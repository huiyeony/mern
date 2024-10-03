import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const { DB_USER, DB_HOST, DB_PASSWORD, DB_NAME } = process.env;
const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

export default async function () {
  return mongoose
    .connect(uri)
    .then(() => {
      console.log("MongoDb connected");
    })
    .catch(() => {
      console.log("MongoDb connection fail");
    });
}
