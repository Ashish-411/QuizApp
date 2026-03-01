const Quiz = require("../database/models/Quiz");

const getInGameQuiz = async(req,res) =>{
    try{
        const quizzes = await Quiz.find({createdBy: null});
        res.status(200).json(quizzes);
    }catch(err){
        res.status(500).json({
            error: err.message
        });
    }
};

const getInGameSingleQuiz = async(req,res) =>{
    const {questionId} = req.query;
    try{
        const quiz = await Quiz.findOne({createdBy: null}).lean();

        if(!quiz) {
            return res.status(404).json({
                message: "Quiz not found"
            });
        }
        const question =  quiz.questions.find(q => q._id.toString() === questionId);
        if(!question){
            return res.status(404).json({
                message: "Question not found"
            })
        }
        res.status(200).json(question);
    }catch(err){
        res.status(500).json({
            error: err.message
        });
    }
}

module.exports = {
    getInGameQuiz,
    getInGameSingleQuiz,
}