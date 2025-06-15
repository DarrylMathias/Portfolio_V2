import mongoose from 'mongoose'

const locationSchema = mongoose.Schema({
    ip: { type: String, required: true },
    lat: { type: Number },
    lon: { type: Number },
    city: { type: String },
    country: { type: String },
})

// If the model already exists use it, or create one
const locationModel = mongoose.models.location || mongoose.model("location", locationSchema)
export default locationModel