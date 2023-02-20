"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserShema = new mongoose_1.default.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    birthdate: {
        type: String,
        require: true
    },
    name: {
        type: String,
    },
    lastName: {
        type: String
    },
    profile_picture: {
        type: String
    },
    friends: [{
            type: [mongoose_1.default.Schema.Types.ObjectId],
            ref: "User"
        }],
    publications: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Publications"
        }],
    message: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Message"
        }],
    verified: {
        type: Boolean,
    },
    connected: {
        type: Boolean,
    }
}, { timestamps: false });
exports.default = mongoose_1.default.model("User", UserShema);
//# sourceMappingURL=Users.js.map