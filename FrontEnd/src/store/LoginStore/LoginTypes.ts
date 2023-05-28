export interface IUserData {
  _id: string;
  name: string;
  lastName: string;
  username: string;
  email: string;
  birthdate: string;
  codeVerify: string;
  profile_picture: string;
  verified: boolean;
}

export interface IDataAPI {
  token: string;
  _id: string;
  name: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  birthdate: string;
  profile_picture: any;
  verified: boolean;
  __typename: string;
}

export interface ILoginStore {
  token: string;
  data: IUserData;
  isLogin: boolean;

  setLogin: (data: IDataAPI) => void;

  exitSession: () => void;
}
