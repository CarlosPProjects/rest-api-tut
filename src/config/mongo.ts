import "dotenv/config";
import { connect } from "mongoose";

/**
  * Primero, se importan los paquetes dotenv y mongoose. dotenv se 
  * utiliza para cargar las variables de entorno desde un archivo .env y 
  * mongoose es la biblioteca de Node.js que se utiliza para interactuar con MongoDB.

  * Luego, se define una función async llamada dbConnect que utiliza la función 
  * connect de mongoose para conectarse a la base de datos MongoDB. La URL de la 
  * base de datos se obtiene de la variable de entorno DB_URI utilizando process.env.DB_URI.

  * Finalmente, la función dbConnect se exporta por defecto para que pueda ser 
  * utilizada en otros archivos de la aplicación.
 */

async function dbConnect(): Promise<void> {
  const DB_URI = <string>process.env.DB_URI;
  await connect(DB_URI);
}

export default dbConnect;
