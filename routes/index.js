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
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("../src/parser");
const express = require('express');
const router = express.Router();
router.get('/', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        res.json({ response: "OK" });
    });
});
router.get('/health', function (req, res, next) {
    res.json({ response: "OK" });
});
router.post('/sentence', function (req, res, next) {
    let sentence = req.body.sentence;
    let result = (0, parser_1.parseSentence)(sentence);
    res.json({ response: "OK", result: result });
});
module.exports = router;
//# sourceMappingURL=index.js.map