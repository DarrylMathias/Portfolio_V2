import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export default async function connect() {
    await mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Mongodb connection successful');
    })
    .catch((err) => {
        console.log(`Error in mongodb connection ${err}`)
    })

    const connection = mongoose.connection 
}