import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/req-ext";

const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop(); // ["Bearer", "token"<- this is what we want ]
    const isUser = (await verifyToken(`${jwt}`)) as { id: string };
    console.log({ isUser });
    if (!isUser) {
      res.status(401);
      res.send("NO_TIENES_UN_JWT_VALIDO");
    } else {
      req.user = isUser;
      console.log({ jwtByUser });
      next();
    }
  } catch (e) {
    console.log("ESTOY EN EL ERROR!!");
    res.status(400);
    res.send("SESSION_NO_VALID");
  }
};

export { checkJwt };
