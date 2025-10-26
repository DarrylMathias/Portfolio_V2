'use server'
import userModel from "@/models/user"
import { z } from "zod"
import connect from "@/config/mongoose"
import sparkConfirmation from "@/utils/sparkConfirmation"

export default async function sparkForm(formData) {
    try {
        await connect()
        const schema = z.object({
            name: z.string().min(1),
            email: z.string().email(),
            place: z.string().min(1)
        })
        const name = formData.get('name')?.trim()
        const email = formData.get('email')?.trim().toLowerCase()
        const place = formData.get('place')?.trim()
        const rawRes = { name, email, place }
        const res = schema.safeParse(rawRes)
        if (!res.success) {
            throw new Error(`${res.error.format()}`);
        } else {
            const userExists = await userModel.findOne({
                email: res?.data?.email
            })
            if (userExists) {
                console.log(`${res.data.email} already exists`);
                throw new Error(`${res.data.email} email already exists`)
            }
            const user = await userModel.create({
                name: res?.data?.name,
                email: res?.data?.email,
                place: res?.data?.place
            })
            await sparkConfirmation(res.data.name, res.data.email, user._id)
            console.log(`${res.data.name} creation success`);
            return { success: true }
        }
    }
    catch (err) {
        console.log(`Error in spark form ${err.message}`);
        return { success: false, error: err.message }
    }
}