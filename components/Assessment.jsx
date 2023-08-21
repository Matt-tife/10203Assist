import React, { useState } from 'react';


const Assessment = ({ questions, onSave }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleAnswer = (questionId, answer) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: answer }));
  };

  const handleSave = () => {
    // Send answers to backend for saving
    onSave(answers);
    setIsCompleted(true);
  };

  return (
    <div className='w-[18rem] h-[18rem] flex flex-col justify-center items-center'>
      <h2>Assessment</h2>
      {!isCompleted && (
        <div className='flex flex-col justify-center items-center'>
          <p>Question {currentQuestionIndex + 1}/{questions.length}</p>
          <div>{questions[currentQuestionIndex].text}</div>
          <div>
            <input
              className='border-2 border-blue-500 '
              type="text"
              value={answers[questions[currentQuestionIndex].id] || ''}
              onChange={(e) =>
                handleAnswer(questions[currentQuestionIndex].id, e.target.value)
              }
            />
          </div>
          <div className='flex gap-12 mb-[20px]'>
            <button 
              onClick={handlePrevious} 
              disabled={currentQuestionIndex === 0}
              >
                Previous
            </button>
            <button 
              onClick={handleNext} 
              disabled={currentQuestionIndex === questions.length - 1}
              >
                Next
            </button>
          </div>
        </div>
      )}
      <div>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default Assessment;
