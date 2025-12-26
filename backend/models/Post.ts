import mongoose from 'mongoose';
import ImageSchema from './Image';
const { Schema } = mongoose;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    body: {
        type: String,
        required: true,
        trim: true
    },
    tags: {
        type: [String],
        required: false
    },
    featuredImage: {
        type: ImageSchema,
        required: false
    },
    images: {
        type: [ImageSchema],
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);

export default Post;