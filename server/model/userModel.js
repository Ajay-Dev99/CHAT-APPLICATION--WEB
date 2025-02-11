const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [3, 'Name must be at least 3 characters long'],
        maxLength: [10, 'Name can be at most 10 characters long'],
    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long'],
    },
    profilepic: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
}, { timestamps: true })

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next(); // Only hash password if it is modified
    try {
        this.password = await bcrypt.hash(this.password, 12); // Hashing the password with 12 salt rounds
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.isPasswordCorrect = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};


module.exports = mongoose.model('Users', userSchema)