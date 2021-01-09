"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.render("sign-up", {
        layout: "sign-up-layout",
    });
});
router.post("/", passport_1.default.authenticate("local-signup", {
    successRedirect: "/login",
    failureRedirect: "/sign-up",
    failureFlash: true,
}));
module.exports = router;
