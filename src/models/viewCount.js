import mongoose from 'mongoose'

const viewCountSchema = mongoose.Schema({
    views: { type: Number, required: true },
})

// If the model already exists use it, or create one
const viewCountModel = mongoose.models?.viewCount || mongoose.model("viewCount", viewCountSchema)
export default viewCountModel