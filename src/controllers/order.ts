import { Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { RequestExt } from "../interfaces/req-ext";

const getItems = (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "Esto solo lo ven los usuarios logueados / jwt válido ",
      user: req.user,
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

export { getItems };
