"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../middleware/middleware");
const router = (0, express_1.Router)();
// Protected route example
router.get('/:id', middleware_1.authenticateSupabaseToken, (req, res) => {
    const user = req.user;
    res.send(`Hello ${user.email}, this is a protected route.`);
});
exports.default = router;
