const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    options:{
        type: [String],
        required: true
    },
    correctAnswer:{
        type: Number,
        required: true
    }
});

const quizSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    title:{
        type: String,
        required: true,
    },
    isPublic:{
        type: Boolean,
        default: true,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        default: null
    },
    questions: [questionSchema]
},
{timestamps: true});
quizSchema.pre("save", async function() {
    if (this.id) return next();

    const lastQuiz = await mongoose.model("Quiz")
        .findOne()
        .sort({ id: -1 });

    this.id = lastQuiz ? lastQuiz.id + 1 : 1;
});

module.exports = mongoose.model("Quiz", quizSchema);