const mongoose = require("mongoose");
bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        name: String,
        email: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            default: "subscriber"
        },

        cart: {
            type: Array,
            default: []
        },
        address: String,
        // wishList: [{ type: ObjectId, ref: "Product" }],

    }, { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
