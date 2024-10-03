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
const infosService_1 = __importDefault(require("../services/infosService"));
const errorHandler_1 = require("../middlewares/errorHandler");
const httpCode_1 = require("../types/httpCode");
exports.default = {
    createInfo: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const info = req.body;
        try {
            const target = yield infosService_1.default.getInfo(info.id);
            if (target)
                throw new errorHandler_1.HttpException(httpCode_1.HttpCode.CONFLICT, "중복된 데이터");
            const result = yield infosService_1.default.createInfo(info);
            console.log(result);
            res.status(200).json({
                message: "success",
            });
        }
        catch (error) {
            next(error);
        }
    }),
    getInfo: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.body;
        try {
            const result = yield infosService_1.default.getInfo(Number(id));
            res.status(200).json({
                message: "success",
            });
        }
        catch (error) {
            next(error);
        }
    }),
    getInfos: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = yield infosService_1.default.getInfos();
            res.status(httpCode_1.HttpCode.OK).json({
                message: "success",
                data,
            });
        }
        catch (error) {
            next(error);
        }
    }),
};
