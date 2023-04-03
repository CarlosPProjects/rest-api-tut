/**
 * Es una interfaz que define la estructura de un objeto de tipo Car
 */

export interface Car {
  color: string;
  gas: "gasoline" | "diesel" | "electric";
  year: number;
  description: string;
  price: number;
  name: string;
}
