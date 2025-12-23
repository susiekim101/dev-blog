import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
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

AdminSchema.pre('save', async function () {
    try {
        if (!this.isModified('password')) return;

        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    } catch (err) {
        throw err;
    }
});

const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);

export default Admin;