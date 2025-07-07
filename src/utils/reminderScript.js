import axios from "axios";
import connect from "../config/mongoose.js";
import userModel from "../models/user.js";
import sparkConfirmation from "./sparkConfirmation.js";
import dotenv from 'dotenv'
dotenv.config()

function convertToHours(timestamp) {
    return Math.floor((Date.now() - timestamp) / (1000 * 60 * 60))
}

export default async function setReminder() {
    try {
        console.log("Starting reminder script...");
        await connect()

        let users
        if (process.env.NODE_ENV === 'development') {
            users = await userModel.find({
                email: 'mathiasndarryl7@gmail.com'
            })
        } else {
            users = await userModel.find({
                hasConfirmed: false
            })
        }
        for (const user of users) {
            const hoursElapsed = convertToHours(user?.createdAt.getTime());
            console.log(`Processing ${user.email}: ${hoursElapsed} hours old`);

            if (hoursElapsed >= 24 && hoursElapsed <= 48) {
                await sparkConfirmation(user.name, user.email, user._id)
                console.log(`Sent DAY 1 reminder for ${user.name}`);
                await new Promise(resolve => setTimeout(resolve, 100));

            } else if (hoursElapsed >= 72 && hoursElapsed <= 96) {
                await sparkConfirmation(user.name, user.email, user._id)
                console.log(`Sent DAY 3 final reminder for ${user.name}`);
                await new Promise(resolve => setTimeout(resolve, 100));

            } else if (hoursElapsed >= 168) {
                await userModel.findOneAndDelete({
                    _id: user._id
                })
                console.log(`Deleted user account for ${user.email} (${Math.floor(hoursElapsed / 24)} days old)`);
            } else {
                console.log(`No action for ${user.email} (${Math.floor(hoursElapsed / 24)} days old)`);
            }
        }
    } catch (err) {
        console.log(`Error in reminder script ${err.message}`);
    }
}