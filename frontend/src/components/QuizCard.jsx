import { useState } from "react";

function QuizCard({ questionData, onAnswer, answered, selectedIndex }) {
    const { question, options, correctAnswer, category } = questionData;

    function getOptionStyle(index) {
        if (!answered) return "border-white/10 text-text hover:border-accent4 hover:bg-[rgba(67,97,238,0.15)] cursor-pointer";
        if (index === correctAnswer) return "border-accent3 bg-[rgba(6,214,160,0.15)] text-accent3 shadow-[0_0_16px_rgba(6,214,160,0.5)]";
        if (index === selectedIndex && index !== correctAnswer) return "border-accent1 bg-[rgba(255,77,109,0.15)] text-accent1 shadow-[0_0_16px_rgba(255,77,109,0.5)]";
        return "border-white/10 text-muted opacity-50";
    }
    const isCorrect = answered && selectedIndex === correctAnswer;
    const isWrong = answered && selectedIndex !== correctAnswer;

    return (
        <div className="w-full max-w-[700px] min-h-[400px] bg-card rounded-[24px] p-8 flex flex-col justify-around gap-6
            border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">

            {/* Category badge */}
            <span className="self-start bg-[rgba(67,97,238,0.15)] border border-accent4/30
                text-accent4 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                {category}
            </span>

            {/* Question */}
            <p className="text-text text-xl font-bold leading-relaxed">
                {question}
            </p>
            
            {isCorrect && <p className="text-[rgba(6,214,160,0.75)] font-bold">Correct ✓</p>}
            {isWrong && <p className="text-[rgba(255,77,109,0.75)] font-bold">Wrong ✘</p>}
            
            {/* Options */}
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
                {options.map((option, index) => (
                    <button
                        key={index}
                        disabled={answered}
                        onClick={() => {onAnswer(index);}}
                        className={`px-6 py-4 rounded-[14px] border-2 bg-transparent
                            text-left font-semibold text-sm transition-all duration-300
                            ${getOptionStyle(index)}`}>
                        <span className="font-extrabold mr-3 opacity-60">
                            {['A', 'B', 'C', 'D'][index]}.
                        </span>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default QuizCard;