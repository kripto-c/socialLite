"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PublicationsSchema = new mongoose_1.default.Schema({
    id_user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    likes: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'User'
        }],
    comments: [{
            text: { type: String },
            author: { type: String, }
        }]
}, {
    timestamps: true
});
exports.default = mongoose_1.default.model("Publications", PublicationsSchema);
//# sourceMappingURL=Publications.js.map