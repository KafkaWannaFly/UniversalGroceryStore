"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    }
    else {
        res.redirect("/login");
    }
}, (req, res) => {
    // console.log(`User: ${JSON.stringify(req.user, null, 4)}`);
    res.render("information", { layout: "information-layout", user: req.user });
});
router.get("/json", (req, res) => {
    // console.log(`user: ${JSON.stringify(req.user, null, 4)}`);
    if (req.isAuthenticated()) {
        res.send(JSON.stringify(req.user));
    }
    else {
        res.send(JSON.stringify(undefined));
    }
});
module.exports = router;
