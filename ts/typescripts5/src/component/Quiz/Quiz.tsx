import React, { useState } from 'react';
import Question from './Question';
import { QuestionType } from './types';

function Quiz() {
  const questions: QuestionType[] = [
    {
      text: "ReactJS dùng để làm gì?",
      options: ["Mobile App", "Web UI", "Hệ điều hành", "Cơ sở dữ liệu"],
      correctAnswer: "Web UI",
    },
    {
      text: "Thành phần chính của React là gì?",
      options: ["Component", "Function", "Variable", "Loop"],
      correctAnswer: "Component",
    },
    {
      text: "State trong React dùng để làm gì?",
      options: [
        "Lưu trữ dữ liệu thay đổi theo thời gian",
        "Định nghĩa kiểu dữ liệu",
        "Tạo vòng lặp",
        "Xoá component",
      ],
      correctAnswer: "Lưu trữ dữ liệu thay đổi theo thời gian",
    },
  ];
  
  const [score, setScore] = useState<number>(0);
  const [answerCurrent, setAnswerCurent] = useState<number>(0);
  
  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore((prev) => prev + 1);
  };
  
  return (
    <div>
      <h3>bai5 :Quiz App</h3>
      {questions.map((q, i) => (
        i === answerCurrent ? (
          <Question 
            key={i} 
            question={q} 
            index={i} 
            onAnswer={handleAnswer} 
            setAnswerCurent={setAnswerCurent} 
            answerCurrent={answerCurrent} 
          />
        ) : null
      ))}
      {answerCurrent === questions.length && (
        <p>
          Bạn trả lời đúng {score} trên {questions.length} câu.
        </p>
      )}
    </div>
  );
}

export default Quiz;