"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const router = express_1.default.Router();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
router.get('/', (req, res) => {
    res.json({
        hello: '123',
    });
});
app.use('/.netlify/functions/server', router);
exports.handler = (0, serverless_http_1.default)(app);
