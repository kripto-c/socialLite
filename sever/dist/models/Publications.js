"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PublicationsSchema = new mongoose_1.default.Schema({
    id_user: {
        type: [mongoose_1.default.Schema.Types.ObjectId],
        ref: "User"
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    like: {
        type: Number,
        default: 0
    }
});
//# sourceMappingURL=Publications.js.map