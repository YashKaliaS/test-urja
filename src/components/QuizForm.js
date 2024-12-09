import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button, Grid } from '@mui/material';

const boards = ['CBSE', 'ICSE', 'IGCSE', 'JEE', 'NEET', 'SSC'];
const subjects = {
  CBSE: ['Mathematics', 'Science', 'English', 'Social Studies'],
  ICSE: ['Mathematics', 'Science', 'English', 'History & Civics'],
  IGCSE: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
  JEE: ['Physics', 'Chemistry', 'Mathematics'],
  NEET: ['Physics', 'Chemistry', 'Biology'],
  SSC: ['Mathematics', 'General Science', 'English', 'Social Science'],
};

function QuizForm({ setBoard, setSubject }) {
  const [selectedBoard, setSelectedBoard] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setBoard(selectedBoard);
    setSubject(selectedSubject);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="board-label">Select Board</InputLabel>
            <Select
              labelId="board-label"
              value={selectedBoard}
              onChange={(e) => setSelectedBoard(e.target.value)}
              label="Select Board"
              required
            >
              {boards.map((board) => (
                <MenuItem key={board} value={board}>
                  {board}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="subject-label">Select Subject</InputLabel>
            <Select
              labelId="subject-label"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              label="Select Subject"
              disabled={!selectedBoard}
              required
            >
              {selectedBoard &&
                subjects[selectedBoard].map((subject) => (
                  <MenuItem key={subject} value={subject}>
                    {subject}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={!selectedBoard || !selectedSubject}
          >
            Start Quiz
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default QuizForm;

