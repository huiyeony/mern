import mongooseConnection from "./configs/mongoose-connection";
import express from "express";
import morgan from "morgan";
import infosController from "./controllers/infosController";
import { ErrorHandler } from "./middlewares/errorHandler";
import searchController from "./controllers/searchController";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); //logging
app.use(ErrorHandler); //middleware
app.use(cors()); //모든 도메인 허용

let collection;
app.listen(3001, async () => {
  console.log(`Server started`);
  //db에 연결시도
  const MongoClient = await mongooseConnection();
});
//위치 데이터 저장
app.post("/api/infos", infosController.createInfo);
//전체 위치 데이터 조회
app.get("/api/infos", infosController.getInfos);
//검색 데이터 조회
app.get("/api/search", searchController.searchKeyword);
