"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const infoSchema = new Schema({
    id: { type: Number, required: true },
    addressName: { type: String, required: true },
    placeName: { type: String, required: true },
    position: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
});
const infoModel = mongoose_1.default.model("info", infoSchema);
exports.default = infoModel;
