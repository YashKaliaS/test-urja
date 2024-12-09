import React from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Card,
  CardContent,
} from '@mui/material';

function QuizResults({ questions, userAnswers, onReset }) {
  const correctAnswers = questions.filter(
    (q) => userAnswers[q.question_no] === q.correct_answer
  ).length;

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Quiz Results
      </Typography>
      <Typography variant="h6" gutterBottom>
        You answered {correctAnswers} out of {questions.length} questions correctly.
      </Typography>
      <List>
        {questions.map((q) => (
          <ListItem key={q.question_no} disableGutters>
            <Card style={{ width: '100%', marginBottom: '1rem' }}>
              <CardContent>
                <ListItemText
                  primary={`${q.question_no}. ${q.question}`}
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        color={
                          userAnswers[q.question_no] === q.correct_answer
                            ? 'primary'
                            : 'error'
                        }
                      >
                        Your answer: {userAnswers[q.question_no]}
                      </Typography>
                      <br />
                      <Typography component="span" variant="body2" color="primary">
                        Correct answer: {q.correct_answer}
                      </Typography>
                    </>
                  }
                />
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        color="primary"
        onClick={onReset}
        fullWidth
        style={{ marginTop: '1rem' }}
      >
        Start New Quiz
      </Button>
    </div>
  );
}

export default QuizResults;

