import User from "../models/Users";
import Publications from "../models/Publications";
import jwt, { JwtPayload } from "jsonwebtoken";
import { palabraclave } from "../config";

type LoginType = {
  email: string;
  password: string;
};

type UserTypes = {
  _id: string;
  name: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  birthdate: string;
  profile_picture: string;
  verified: boolean;
  connected: boolean;
  token?: String;
};

type PublicationsTypes = {
  _id: string;
  id_user: string;
  description: string;
  image: string;
  comments: [];
};

type CommentTypes = {
  _id: string;
  id_public: string;
  text: string;
  author: UserTypes["_id"];
};

type Deletecoments = {
  _id?: string;
  id_public?: string;
};

type DeleteCommentResult = {
  success: boolean;
};

export const resolvers = {
  //aqui en Query van las funciones de obtencion de datos de la DB
  Query: {
    hello: () => "Hello World!",
    users: async () => await User.find(),
    user: async (_: any, { _id }: UserTypes) => await User.findById(_id),
    publications: async () => await Publications.find(),
    validarToken: async (_: any, { token }: { token: string }) => {
      // console.log(token);
      const code: JwtPayload | string | LoginType = jwt.verify(
        token,
        palabraclave
      );
      if (!code || typeof code === "string")
        throw Error("Vuelva a iniciar sesion");
      const result: UserTypes | null = await User.findOne({
        email: code.email,
        password: code.password,
      });
      if (!result) throw Error("Ocurrio un error");
      const data = {
        email: result.email,
        name: result.name,
        username: result.username,
        lastname: result.lastName,
        password: result.password,
      };
      const newToken = jwt.sign(data, palabraclave);
      result.token = newToken;
      return result;
    },
  },

  //aqui en Mutation van las funciones de crear actualizar y eliminar de la DB
  Mutation: {
    //Verificar Usuario si existe el usuario y devuelve datos con token
    login: async (_: any, { email, password }: LoginType) => {
      const emailResult = await User.findOne({ email });
      if (!emailResult) throw Error("No se encontro cuenta con ese email");
      const result: UserTypes | null = await User.findOne({ password });
      if (!result) throw Error("La contraseña no coincide");
      const data = {
        email: result.email,
        name: result.name,
        username: result.username,
        lastname: result.lastName,
        password: result.password,
      };
      const token = jwt.sign(data, palabraclave, { expiresIn: "3d" });
      result.token = token;
      return result;
    },

    //creacion de usuario
    createUser: async (
      _: any,
      {
        name,
        lastName,
        username,
        email,
        password,
        birthdate,
        profile_picture,
        verified,
        connected,
      }: UserTypes
    ) => {
      const user = new User({
        name,
        lastName,
        username,
        email,
        password,
        birthdate,
        profile_picture,
        verified,
        connected,
      });
      const saveUser = await user.save();

      return saveUser;
    },
    //creacion de publicaciones
    createPublication: async (
      _: any,
      { id_user, description, image }: PublicationsTypes
    ) => {
      const user = await User.findById(id_user);

      if (!user) throw new Error("User no found");

      const newPublication = new Publications({
        id_user,
        description,
        image,
      });

      const savePublication = await newPublication.save();

      return savePublication;
    },
    //añadir comentario a una publicacion
    createComents: async (
      _: any,
      { id_public, text, author }: CommentTypes
    ) => {
      try {
        const publication = await Publications.findById(id_public);
        const user = await User.findById(author);
        if (!publication || !user)
          throw new Error("publications or user not found");

        const newComents = {
          text,
          author,
        };
        publication.comments?.push(newComents);

        await publication.save();

        return publication;
      } catch (error) {
        console.error(error);
        throw new Error("Error adding comment");
      }
    },

    //eliminacion de comentarios ... nota analizar error de tipado
    deleteComents: async (_: any, { _id, id_public }: Deletecoments) => {
      try {
        const publication = await Publications.findById(id_public);
        if (!publication) throw new Error("Publication not found");

        const updatedComments = publication.comments?.filter(
          (comment: any) => comment._id.toString() !== _id
        );
        if (!updatedComments) throw new Error("comment no found");
        publication.comments = updatedComments;
        console.log(updatedComments);
        await publication.save();

        return publication;
      } catch (error) {
        console.error(error);
        throw new Error("Error deleting comment");
      }
    },
    //eliminacion de publicaciones
    deletPublication: async (_: any, { _id }: PublicationsTypes) => {
      const publication = await Publications.findByIdAndDelete(_id);

      if (!publication) throw new Error("Publication no found");

      return publication;
    },
  },
  //relacion entre usuario y sus publicaciones
  User: {
    publications: async (parent: PublicationsTypes) => {
      const list = await Publications.find({ id_user: parent._id });
      if (!list) throw new Error("publications no found");
      return list;
    },
  },
  //relacion entre publicacion y usuario
  Publications: {
    id_user: async (parent: PublicationsTypes) => {
      const user = await User.findById(parent.id_user);
      if (!user) throw new Error("user no found");
      return user;
    },
  },
  //relacion entre usuaria comentario
  Comment: {
    author: async (parent: CommentTypes) => {
      const user = await User.findById(parent.author);
      if (!user) throw new Error("User no found");
      return user;
    },
  },
};
