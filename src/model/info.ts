import mongoose from "mongoose";
import { Info } from "../types/Info";
const Schema = mongoose.Schema;
const infoSchema = new Schema<Info>({
  id: { type: Number, required: true },
  addressName: { type: String, required: true },
  placeName: { type: String, required: true },
  position: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
});
const infoModel = mongoose.model("info", infoSchema);

export default infoModel;
