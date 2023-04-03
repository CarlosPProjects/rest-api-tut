"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
        unique: true,
    },
    description: {
        type: String,
        default: "Soy un usuario nuevo",
    },
}, {
    versionKey: false,
    timestamps: true,
});
const UserModel = (0, mongoose_1.model)("Users", UserSchema);
exports.default = UserModel;
