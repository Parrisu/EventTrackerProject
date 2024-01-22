export class Store {

  id: number;
  name: string;
  location: string;

  constructor(
    id: number = 0,
    name: string = '',
    location: string = '',
  ){
    this.id = id;
    this.name = name;
    this.location = location;
  }
}
