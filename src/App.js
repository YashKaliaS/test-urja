import React, { useState, useEffect } from 'react';
import { Container, Typography, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import QuizForm from './components/QuizForm';
import QuizQuestions from './components/QuizQuestions';
import QuizResults from './components/QuizResults';
import questionsData from './questions.json';
import {Router,Routes,Route} from 'react-router-dom';
const theme = createTheme();

function App() {
  
  const [board, setBoard] = useState('');
  const [subject, setSubject] = useState('');
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (board && subject) {
      const shuffled = questionsData.questions.sort(() => 0.5 - Math.random());
      setQuestions(shuffled.slice(0, 10));
    }
  }, [board, subject]);

  const handleQuizSubmit = (answers) => {
    setUserAnswers(answers);
    setShowResults(true);
  };

  const handleReset = () => {
    setBoard('');
    setSubject('');
    setQuestions([]);
    setUserAnswers({});
    setShowResults(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" align="center" gutterBottom style={{ marginTop: '2rem' }}>
          Quiz App
        </Typography>
        {!board && !subject && (
          <QuizForm setBoard={setBoard} setSubject={setSubject} />
        )}
        {board && subject && !showResults && (
          <QuizQuestions questions={questions} onSubmit={handleQuizSubmit} />
        )}
        {showResults && (
          <QuizResults
            questions={questions}
            userAnswers={userAnswers}
            onReset={handleReset}
          />
        )}
      </Container>
    </ThemeProvider>
  );
  
}

export default App;

