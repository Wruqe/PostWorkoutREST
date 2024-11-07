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
const express_1 = require("express");
const dotenv_1 = __importDefault(require("dotenv"));
const supabase_js_1 = require("@supabase/supabase-js");
dotenv_1.default.config();
const router = (0, express_1.Router)();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const { SUPABASE_URL, SUPABASE_KEY } = process.env;
if (!SUPABASE_URL || !SUPABASE_KEY) {
    throw new Error('Supabase URL and Key must be provided');
}
const supabase = new supabase_js_1.SupabaseClient(SUPABASE_URL, SUPABASE_KEY);
// Register route
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const { data, error } = yield supabase.auth.signUp({
        email,
        password,
    });
    if (error) {
        res.status(400).json({ message: 'Registration failed', error: error.message });
        return;
    }
    res.status(201).json({ message: 'User registered successfully', user: data.user });
}));
// Login endpoint using Supabase Auth
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const { data, error } = yield supabase.auth.signInWithPassword({
        email,
        password,
    });
    if (error) {
        res.status(401).json({ message: 'Login failed', error: error.message });
        return;
    }
    // Supabase returns the access token, which can be used for future requests
    const { session } = data;
    // Send the access token to the client
    res.json({ token: session === null || session === void 0 ? void 0 : session.access_token });
}));
exports.default = router;
