import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';
// https://medium.com/@finnkumar6/mastering-user-authentication-building-a-secure-user-schema-with-mongoose-and-bcrypt-539b9394e5d9

const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Admin = mongoose.model('Admin', AdminSchema);

export default Admin;