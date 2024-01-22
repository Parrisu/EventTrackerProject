import { Store } from "./store";

export class Donut {

  id: number;
  name: string;
  price: number;
  calories: number;
  enabled: boolean;
  store: Store;
  createdAt: string;
  updatedAt: string;

  constructor(
    id: number = 0,
    name: string = '',
    price: number = 0,
    calories: number = 0,
    enabled: boolean = true,
    store: Store = new Store(),
    createdAt: string = '',
    updatedAt: string = '',
    ){
    this.id = id;
    this.name = name;
    this.price = price;
    this.calories = calories;
    this.enabled = enabled;
    this.store = store;
    this.createdAt  = createdAt;
    this.updatedAt = updatedAt;
    };


}
