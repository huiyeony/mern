import axios from "axios";
import { HttpException } from "../middlewares/errorHandler";
import { HttpCode } from "../types/httpCode";
import { SearchResponse } from "../types/search";
export default {
  searchKeyword: async (search: String) => {
    try {
      const { KAKAO_API_KEY } = process.env;
      const res = await axios.get<SearchResponse>(
        `https://dapi.kakao.com/v2/local/search/keyword.json?query=${search}`,
        {
          headers: {
            Authorization: `KakaoAK ${KAKAO_API_KEY}`,
          },
        }
      );
      const infos = res.data.documents.map((item) => ({
        id: Number(item.id),
        placeName: item.place_name,
        addressName: item.address_name,
        position: {
          lat: Number(item.y),
          lng: Number(item.x),
        },
      }));
      return infos;
    } catch (error) {
      console.log(error);
      throw new HttpException(HttpCode.INTERNAL_SERVER_ERROR);
    }
  },
};
