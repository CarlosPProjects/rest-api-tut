import { NextFunction, Request, Response } from "express";

/**
 * El middleware es una función que se ejecuta antes de que se ejecute 
 * el controlador, es decir, antes de que se ejecute la función, es una 
 * especie de guardian.
 * Si no se aplica el next() no se ejecuta el controlador.
 */

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("Hola desde el middleware");
  next();
};

export { logMiddleware };
