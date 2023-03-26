import { create } from "zustand";

interface LoginState {
  log: boolean;
  setLogin: (b: boolean) => void;
}

export const isLogin = create<LoginState>((set) => ({
  log: false,
  setLogin: (b: boolean) => set((state) => ({ log: b })),
}));
