const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
mongoose.connect("mongodb://localhost:27017/step-by-step-mvc");

async function register(email, password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({
        email: email,
        password: hashedPassword
    });
    await user.save();
}

async function login(email, password) {
    const user = await User.findOne({ email: email });
    if (!user) {
        throw new Error("User not found");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error("Invalid password");
    }
    return user;
}

async function resetPassword(email, newPassword) {
    const user = await User.findOne({ email: email });
    if (!user) {
        throw new Error("User not found");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
    await user.save();
}

