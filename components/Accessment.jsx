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
    <div>
      <h2>Assessment</h2>
      {!isCompleted && (
        <div>
          <p>Question {currentQuestionIndex + 1}/{questions.length}</p>
          <div>{questions[currentQuestionIndex].text}</div>
          <div>
            <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
              Previous
            </button>
            <button onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>
              Next
            </button>
          </div>
          <div>
            <label>
              Your Answer:
              <input
                type="text"
                value={answers[questions[currentQuestionIndex].id] || ''}
                onChange={(e) =>
                  handleAnswer(questions[currentQuestionIndex].id, e.target.value)
                }
              />
            </label>
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
