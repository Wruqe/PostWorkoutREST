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
const dotenv_1 = __importDefault(require("dotenv"));
const supabase_js_1 = require("@supabase/supabase-js");
// import db from './drizzle.config';
// import { yourTable } from './schema';
dotenv_1.default.config();
// Initialize Supabase client
const supabase = (0, supabase_js_1.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
// Initialize Express app
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Supabase route
app.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data, error } = yield supabase.from('your_table').select('*');
        if (error)
            throw error;
        res.status(200).json(data);
    }
    catch (err) {
        next(err);
    }
}));
// Drizzle ORM route
// app.get('/drizzle', async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const data = await db.select().from(yourTable);
//     res.json(data);
//   } catch (err) {
//     next(err);
//   }
// });
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
