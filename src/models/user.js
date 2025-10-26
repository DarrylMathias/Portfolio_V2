import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
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
    place: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    hasConfirmed : {
        type : Boolean,
        default : false
    }
})

// If the model already exists use it, or create one
const userModel = mongoose.models.user || mongoose.model("user", userSchema)
export default userModel