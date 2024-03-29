import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: String,
        default: 0
    }
}, {
    timestamps: true
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;