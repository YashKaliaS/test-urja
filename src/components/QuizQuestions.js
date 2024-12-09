import React, { useState } from 'react';
import {
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Card,
  CardContent,
} from'@mui/material'; 

function QuizQuestions({ questions, onSubmit }) {
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (questionNo, answer) => {
    setAnswers({ ...answers, [questionNo]: answer });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((q) => (
        <Card key={q.question_no} style={{ marginBottom: '1rem' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {q.question_no}. {q.question}
            </Typography>
            <RadioGroup
              value={answers[q.question_no] || ''}
              onChange={(e) => handleAnswerChange(q.question_no, e.target.value)}
            >
              {q.options.map((option) => (
                <FormControlLabel
                  key={option}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </CardContent>
        </Card>
      ))}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={Object.keys(answers).length !== questions.length}
        style={{ marginTop: '1rem' }}
      >
        Submit Quiz
      </Button>
    </form>
  );
}

export default QuizQuestions;

