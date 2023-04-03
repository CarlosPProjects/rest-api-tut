"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logMiddleware = void 0;
/**
 * El middleware es una función que se ejecuta antes de que se ejecute
 * el controlador, es decir, antes de que se ejecute la función, es una
 * especie de guardian.
 * Si no se aplica el next() no se ejecuta el controlador.
 */
const logMiddleware = (req, res, next) => {
    console.log("Hola desde el middleware");
    next();
};
exports.logMiddleware = logMiddleware;
