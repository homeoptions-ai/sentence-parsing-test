import {ISentenceResponse} from "../types";
import {parseSentence} from "../src/parser";

const express = require('express');
const router = express.Router();

router.get('/', async function (req, res, next) {
  res.json({ response: "OK" });
});

router.get('/health', function (req, res, next) {
  res.json({ response: "OK" });
});

router.post('/sentence', function (req, res, next) {
  let sentence:string = req.body.sentence;
  let result: ISentenceResponse = parseSentence(sentence);
  res.json({ response: "OK", result:result });
});

module.exports = router;
