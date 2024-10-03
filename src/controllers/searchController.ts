import { NextFunction, Request, Response } from "express";
import searchService from "../services/searchService";
import { HttpCode } from "../types/httpCode";

export default {
  searchKeyword: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const search = req.query.query as String;
      const data = await searchService.searchKeyword(search);
      res.status(HttpCode.OK).json({
        message: "success",
        data,
      });
    } catch (error) {
      next(error);
    }
  },
};
