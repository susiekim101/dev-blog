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
    subhead: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,
        required: true,
        trim: true
    },
    tags: [String],
    featuredImage: {
        type: ImageSchema,
        required: true
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


PostSchema.index({ title: 1 });

const Post = mongoose.model('Post', PostSchema);

export default Post;