import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJwt } from "../middleware/session";
/**
 * A esta ruta solo pueden acceder los usuarios logueados
 * que tengan un JWT válido
 */

const router = Router();

router.get("/", checkJwt, getItems);

export { router };
