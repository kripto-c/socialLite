import { IDataAPI, IUserData } from "./LoginTypes";

export const getDataLogin = (data: IDataAPI) => {
  const {
    token,
    _id,
    name,
    lastName,
    username,
    email,
    birthdate,
    profile_picture,
    verified,
  } = data;

  const dataLogin = {
    _id,
    name,
    lastName,
    username,
    email,
    birthdate,
    profile_picture,
    verified,
  } as IUserData;

  localStorage.setItem("userAcount", JSON.stringify(dataLogin));
  localStorage.setItem("token", token);

  return { dataLogin, token };
};
