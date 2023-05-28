import { create } from "zustand";
import { IDataAPI, ILoginStore, IUserData } from "./LoginTypes";
import { getDataLogin } from "./LoginControllers";

export const useLogin = create<ILoginStore>((set) => ({
  data: {} as IUserData,
  isLogin: false,
  token: "",

  setLogin: (data: IDataAPI) => {
    const { dataLogin, token } = getDataLogin(data);
    set({ token: token, data: dataLogin, isLogin: true });
  },
  exitSession: () => {
    localStorage.clear();
    sessionStorage.clear();
    // window.location.reload();
    set({ isLogin: false, token: "", data: {} as IUserData });
  },
}));
