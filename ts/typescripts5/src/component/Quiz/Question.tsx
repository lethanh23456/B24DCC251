import React, { useState } from 'react';
import { QuestionType } from './types';

interface QuestionProps {
  question: QuestionType;
  index: number;
  onAnswer: (isCorrect: boolean) => void;
  answerCurrent: number;
  setAnswerCurent: (value: number) => void;
}

function Question({ question, index, onAnswer, answerCurrent, setAnswerCurent }: QuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  
  const handleAnswer = (answer: string) => {
    if (selectedAnswer !== null) return; 
    setSelectedAnswer(answer);
    const isCorrect = answer === question.correctAnswer;
    onAnswer(isCorrect);
    setAnswerCurent(answerCurrent + 1);
  };
  
  return (
    <div>
      <p>
        {index + 1}. {question.text}
      </p>
      {question.options.map((opt, i) => (
        <button
          key={i}
          onClick={() => handleAnswer(opt)}
          style={{ marginRight: 8 }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default Question;
