"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const Users_1 = __importDefault(require("../models/Users"));
const Publications_1 = __importDefault(require("../models/Publications"));
exports.resolvers = {
    Query: {
        hello: () => 'Hello World!',
        users: () => __awaiter(void 0, void 0, void 0, function* () { return yield Users_1.default.find(); }),
        user: (_, { _id }) => __awaiter(void 0, void 0, void 0, function* () { return yield Users_1.default.findById(_id); }),
        publications: () => __awaiter(void 0, void 0, void 0, function* () { return yield Publications_1.default.find(); }),
    },
    Mutation: {
        createUser: (_, { name, lastName, username, email, password, birthdate, profile_picture, verified, connected }) => __awaiter(void 0, void 0, void 0, function* () {
            const user = new Users_1.default({
                name,
                lastName,
                username,
                email,
                password,
                birthdate,
                profile_picture,
                verified,
                connected
            });
            const saveUser = yield user.save();
            return saveUser;
        }),
        createPublication: (_, { id_user, description, image }) => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield Users_1.default.findById(id_user);
            if (!user)
                throw new Error('User no found');
            const newPublication = new Publications_1.default({
                id_user,
                description,
                image
            });
            const savePublication = yield newPublication.save();
            return savePublication;
        }),
        createComents: (_, { id_public, text, author }) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            try {
                const publication = yield Publications_1.default.findById(id_public);
                const user = yield Users_1.default.findById(author);
                if (!publication || !user)
                    throw new Error('publications or user not found');
                const newComents = {
                    text,
                    author
                };
                (_a = publication.comments) === null || _a === void 0 ? void 0 : _a.push(newComents);
                yield publication.save();
                return publication;
            }
            catch (error) {
                console.error(error);
                throw new Error('Error adding comment');
            }
        }),
        deleteComents: (_, { _id, id_public }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const publication = yield Publications_1.default.findById(id_public);
                if (!publication)
                    throw new Error('Publication not found');
                const updatedComments = publication.comments.filter((comment) => comment._id !== _id);
                if (!updatedComments)
                    throw new Error('comment no found');
                publication.comments = updatedComments;
                yield publication.save();
            }
            catch (error) {
                console.error(error);
                throw new Error('Error deleting comment');
            }
        }),
        deletPublication: (_, { _id }) => __awaiter(void 0, void 0, void 0, function* () {
            const publication = yield Publications_1.default.findByIdAndDelete(_id);
            if (!publication)
                throw new Error('Publication no found');
            return publication;
        })
    },
    User: {
        publications: (parent) => __awaiter(void 0, void 0, void 0, function* () {
            const list = yield Publications_1.default.find({ id_user: parent._id });
            if (!list)
                throw new Error('publications no found');
            return list;
        })
    }
};
//# sourceMappingURL=resolve.js.map