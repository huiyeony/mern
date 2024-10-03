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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const errorHandler_1 = require("../middlewares/errorHandler");
const httpCode_1 = require("../types/httpCode");
exports.default = {
    searchKeyword: (search) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { KAKAO_API_KEY } = process.env;
            const res = yield axios_1.default.get(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${search}`, {
                headers: {
                    Authorization: `KakaoAK ${KAKAO_API_KEY}`,
                },
            });
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
        }
        catch (error) {
            console.log(error);
            throw new errorHandler_1.HttpException(httpCode_1.HttpCode.INTERNAL_SERVER_ERROR);
        }
    }),
};
