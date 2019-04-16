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

export interface ICart {
  id: number;
  created: Date;
  updated: Date;
  lines: IProduct[];
  total: number;
}

export interface ICartLine {
  category_id: number;
  category_title: string;
  created: Date;
  description?: string;
  image?: string;
  price: number;
  product_id: number;
  quantity: number;
  title: string;
  total: number;
  updated: Date;
}

export interface IOrder {
  address: string;
  created: Date;
  id: number;
  name: string;
  updated: Date;
  user_id: number;
}

export interface ICurrentUser {
  authenticated: boolean;
  user: IUser;
  validation: any[];
  error: string;
  token: string;
  loginUser: Function;
  logoutUser: Function;
  fetching: boolean;
}

export interface PagedQuery {
  limit: number;
  offset: number;
  items: any[];
  _links: {
    self: {
      href: string
    }
    next: {
      href: string
    }
  };
} 

export interface RequestError {
  error: string
}

export interface ValidationError {
  field: string;
  error: string
}
