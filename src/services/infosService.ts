import { Info } from "../types/Info";
import infoModel from "../model/info";
import { HttpCode } from "../types/httpCode";
import { HttpException } from "../middlewares/errorHandler";
export default {
  createInfo: async (info: Info) => {
    try {
      const result = await infoModel.create(info);
      return result;
    } catch (error) {
      throw new HttpException(HttpCode.INTERNAL_SERVER_ERROR);
    }
  },
  getInfo: async (id: number) => {
    try {
      const result = await infoModel.findOne({ id });
      return result;
    } catch (error) {
      throw new HttpException(HttpCode.INTERNAL_SERVER_ERROR);
    }
  },
  getInfos: async () => {
    try {
      const data = infoModel.find({}, { _id: 0, __v: 0 });
      return data;
    } catch (error) {
      throw new HttpException(HttpCode.INTERNAL_SERVER_ERROR);
    }
  },
};
