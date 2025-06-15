import mongoose from 'mongoose'
import { number } from 'motion'

const locationSchema = mongoose.Schema({
    ip: number,
    lat: number,
    lon: number,
})

// If the model already exists use it, or create one
const locationModel = mongoose.models.location || mongoose.model("location", locationSchema)
export default locationModel