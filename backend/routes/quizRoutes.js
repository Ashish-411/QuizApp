const express = require("express");
const router = express.Router();

const {getInGameQuiz,
       getInGameSingleQuiz,
       createQuizTitle,
       addQuestion,
       getSingleQuiz,
       getAllQuizzes} = require("../controllers/quizController");

const {protect} = require("../middleware/authMiddleware");

router.get("/ingame",getInGameQuiz);
router.get("/ingame-single", getInGameSingleQuiz);

//protected route
router.post("/createquiz", protect, createQuizTitle);
//add quiz route
router.post("/:id/question",protect,addQuestion);
//get a single quiz by id
router.get("/get-single-quiz/:id",protect,getSingleQuiz);
//get all quizzes of a user
router.get("/get-allquizzes/me",protect,getAllQuizzes);

module.exports = router;
