"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const mongoose_1 = require("mongoose");
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
function dbConnect() {
    return __awaiter(this, void 0, void 0, function* () {
        const DB_URI = process.env.DB_URI;
        yield (0, mongoose_1.connect)(DB_URI);
    });
}
exports.default = dbConnect;
