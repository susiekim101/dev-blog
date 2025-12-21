import mongoose from 'mongoose';

const { Schema } = mongoose;

const ImageSchema = new Schema({
    src: {
        type: String,
        required: true,
        trim: true
    },
    alt: {
        type: String,
        required: true,
        trim: true
    },
    caption: {
        type: String, trim: true
    }
}, { _id: false });

export default ImageSchema;