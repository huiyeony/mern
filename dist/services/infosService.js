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
const info_1 = __importDefault(require("../model/info"));
const httpCode_1 = require("../types/httpCode");
const errorHandler_1 = require("../middlewares/errorHandler");
exports.default = {
    createInfo: (info) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield info_1.default.create(info);
            return result;
        }
        catch (error) {
            throw new errorHandler_1.HttpException(httpCode_1.HttpCode.INTERNAL_SERVER_ERROR);
        }
    }),
    getInfo: (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield info_1.default.findOne({ id });
            return result;
        }
        catch (error) {
            throw new errorHandler_1.HttpException(httpCode_1.HttpCode.INTERNAL_SERVER_ERROR);
        }
    }),
    getInfos: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = info_1.default.find({}, { _id: 0, __v: 0 });
            return data;
        }
        catch (error) {
            throw new errorHandler_1.HttpException(httpCode_1.HttpCode.INTERNAL_SERVER_ERROR);
        }
    }),
};
