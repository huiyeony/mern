import { Response, Request, NextFunction } from "express";
import infosService from "../services/infosService";
import { Info } from "../types/Info";
import { HttpException } from "../middlewares/errorHandler";
import { HttpCode } from "../types/httpCode";
export default {
  createInfo: async (req: Request, res: Response, next: NextFunction) => {
    const info = req.body as Info;
    try {
      const target = await infosService.getInfo(info.id);
      if (target) throw new HttpException(HttpCode.CONFLICT, "중복된 데이터");
      const result = await infosService.createInfo(info);
      console.log(result);
      res.status(200).json({
        message: "success",
      });
    } catch (error) {
      next(error);
    }
  },
  getInfo: async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.body;
    try {
      const result = await infosService.getInfo(Number(id));
      res.status(200).json({
        message: "success",
      });
    } catch (error) {
      next(error);
    }
  },

  getInfos: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await infosService.getInfos();
      res.status(HttpCode.OK).json({
        message: "success",
        data,
      });
    } catch (error) {
      next(error);
    }
  },
};
