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
exports.authenticateSupabaseToken = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { SUPABASE_URL, SUPABASE_KEY } = process.env;
if (!SUPABASE_URL || !SUPABASE_KEY) {
    throw new Error('Supabase URL and Key must be provided');
}
// Initialize Supabase client
const supabase = (0, supabase_js_1.createClient)(SUPABASE_URL, SUPABASE_KEY);
// Middleware to authenticate the Supabase token
const authenticateSupabaseToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        res.status(401).json({ message: 'Token is missing. Access denied.' });
        return;
    }
    const { data: user, error } = yield supabase.auth.getUser(token);
    if (error || !user) {
        res.status(403).send('Invalid or expired token');
        return;
    }
    req.user = user; // Attach user to the request object
    next(); // Proceed to the next middleware/route
});
exports.authenticateSupabaseToken = authenticateSupabaseToken;
