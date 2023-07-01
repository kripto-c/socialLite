export type LoginType = {
  email: string;
  password: string;
};

export interface IUserVerify {
  _id: string;
  name: string;
  lastName: string;
  username: string;
  email: string;
  birthdate: string;
  verified: Boolean;
  token: string;
}

export type UserTypes = {
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
  codeVerify: string;
};

export type PublicationsTypes = {
  _id: string;
  id_user: string;
  description: string;
  image: string;
  comments: [];
};

export type CommentTypes = {
  _id: string;
  id_public: string;
  text: string;
  author: UserTypes["_id"];
};

export type Deletecoments = {
  _id?: string;
  id_public?: string;
};

export type DeleteCommentResult = {
  success: boolean;
};

export type DataEmail = {
  name: string;
  lastname: string;
  email: string;
  username: string;
  codeVerify: string;
};
