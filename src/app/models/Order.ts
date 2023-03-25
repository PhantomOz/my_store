import { Cart } from './Cart';

export interface Order {
  name: string;
  total: number;
  address: string;
  cart: Cart[];
}
