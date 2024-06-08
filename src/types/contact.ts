export interface IContact {
  firstName: string;
  lastName: string;
  age: number;
  photo: string;
  id: string;
  callHistory?: string;
}

export interface ICreateContact {
  firstName: string;
  lastName: string;
  age: number;
  photo: string;
}
