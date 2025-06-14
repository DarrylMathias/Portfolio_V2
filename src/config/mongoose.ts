import mongoose from 'mongoose'

export default async function connect() {
    mongoose.connect(process.env.MONGODB_URI!)
    .then(() => {
        console.log('Mongodb connection successful');
    })
    .catch((err : any) => {
        console.log(`Error in mongodb connection ${err}`)
    })

    const connection = mongoose.connection 
}