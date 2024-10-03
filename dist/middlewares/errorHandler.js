"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = exports.HttpException = void 0;
const httpCode_1 = require("../types/httpCode");
class HttpException extends Error {
    constructor(status, message) {
        super(message);
        this.status = status || httpCode_1.HttpCode.INTERNAL_SERVER_ERROR;
    }
}
exports.HttpException = HttpException;
const ErrorHandler = (err, req, res, next) => {
    const errStatus = err.status;
    const errMsg = err.message;
    res.status(errStatus).json({
        message: errMsg,
    });
};
exports.ErrorHandler = ErrorHandler;
