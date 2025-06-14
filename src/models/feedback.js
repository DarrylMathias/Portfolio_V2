import mongoose from 'mongoose'

const feedbackSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    aiReply : {
        type: String,
    }
})

// If the model already exists use it, or create one
const feedbackModel = mongoose.models.feedback || mongoose.model("feedback", feedbackSchema)
export default feedbackModel