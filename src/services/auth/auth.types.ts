import {User} from "firebase/auth";
import {ReactNode} from "react";

export interface IContext {
  user: User | null;
  isLoading: boolean;
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export interface IAuth {
  children: ReactNode;
}