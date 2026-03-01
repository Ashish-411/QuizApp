const express = require("express");
const router = express.Router();

const {getInGameQuiz,
         getInGameSingleQuiz} = require("../controllers/quizController");

router.get("/ingame",getInGameQuiz);
router.get("/ingame-single", getInGameSingleQuiz);

module.exports = router;
