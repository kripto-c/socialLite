"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MessageShema = new mongoose_1.default.Schema({
    id_1: {
        type: [mongoose_1.default.Schema.Types.ObjectId],
        ref: "User"
    },
    id_2: {
        type: [mongoose_1.default.Schema.Types.ObjectId],
        ref: "User"
    },
    message: [{
            type: Array,
            username: {
                type: [mongoose_1.default.Schema.Types.String],
                ref: "User"
            },
            message: {
                type: String
            }
        }]
}, {
    timestamps: false
});
exports.default = mongoose_1.default.model("Message", MessageShema);
//# sourceMappingURL=Menssages.js.map