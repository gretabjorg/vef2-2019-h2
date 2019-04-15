import { string, number,  } from "prop-types";

export interface ICategory {
  id: number;
  title: string;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
  category: ICategory;
  description?: string;
  created?: Date;
  updated?: Date;
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  admin: boolean;
}

export interface ICurrentUser {
  authenticated: boolean;
  user: IUser;
  validation: any[];
  error: string;
  token: string;
  loginUser: Function;
  logoutUser: Function;
}
