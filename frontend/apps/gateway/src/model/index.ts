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
