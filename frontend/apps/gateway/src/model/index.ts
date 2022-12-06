export interface Authentication {
  username: string;
  token: string;
}

export interface User {
  id: number;
  username: string;
  password?: string;
  email: string;
}

export interface Payment {
  id: number;
  price: number;
  type: string;
}
