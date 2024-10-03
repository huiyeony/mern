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
const mongoose_connection_1 = __importDefault(require("./configs/mongoose-connection"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const infosController_1 = __importDefault(require("./controllers/infosController"));
const errorHandler_1 = require("./middlewares/errorHandler");
const searchController_1 = __importDefault(require("./controllers/searchController"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)("dev")); //logging
app.use(errorHandler_1.ErrorHandler); //middleware
app.use((0, cors_1.default)()); //모든 도메인 허용
let collection;
app.listen(3001, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Server started`);
    //db에 연결시도
    const MongoClient = yield (0, mongoose_connection_1.default)();
}));
//위치 데이터 저장
app.post("/api/infos", infosController_1.default.createInfo);
//전체 위치 데이터 조회
app.get("/api/infos", infosController_1.default.getInfos);
//검색 데이터 조회
app.get("/api/search", searchController_1.default.searchKeyword);
module.exports = app;
