require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./connection");
const Quiz = require("./models/Quiz");


const quizQuestions = require("./quizData");

const seedQuiz = async () =>{
    try{
        await connectDB();

        await Quiz.deleteMany({createdBy : null});

        await Quiz.create({
            title: "Ultimate Mixed Quiz",
            isPublic: true,
            createdBy: null,
            questions: quizQuestions
        });
        console.log("quiz seeding completed");
    }catch(err){
        console.log("Error seeding quiz:", err);
    }
};
seedQuiz();