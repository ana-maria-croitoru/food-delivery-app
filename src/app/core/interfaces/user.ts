export interface SafeUserData {
  _id: string;
  role: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface UserData extends SafeUserData {
  accessToken: string;
}

export interface CreateUser {
  role: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export enum Role {
  CUSTOMER = 'CUSTOMER',
  OWNER = 'OWNER',
}
