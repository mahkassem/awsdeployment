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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./database"));
dotenv_1.default.config();
const app = (0, express_1.default)(); // create an express application
const port = process.env.PORT || 80; // set the port
// Defaul middlewares
app.use((0, cors_1.default)(), // enable cors
(0, morgan_1.default)('dev'), // log requests to the console
express_1.default.json());
app.get('/', (req, res) => {
    res.send('The API is working!');
});
app.get('/quotes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const quotes = yield database_1.default.query('SELECT text, author FROM quotes');
    res.send(quotes.rows).status(200);
}));
// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
exports.default = app;
