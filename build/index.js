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
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const env_1 = __importDefault(require("./config/env"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const tutorRoutes_1 = __importDefault(require("./routes/tutorRoutes"));
const studentRoutes_1 = __importDefault(require("./routes/studentRoutes"));
const reviewRoutes_1 = __importDefault(require("./routes/reviewRoutes"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use("/api/v1/auth", authRoutes_1.default);
app.use("/api/v1/tutor", tutorRoutes_1.default);
app.use("/api/v1/student", studentRoutes_1.default);
app.use("/api/v1/review", reviewRoutes_1.default);
app.use(errorHandler_1.default);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    // TODO: Add DB Connection
    app.listen(env_1.default.PORT, () => console.log(`Listening on port ${env_1.default.PORT}!`));
});
start();
