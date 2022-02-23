import React, { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ImageIcon from '@mui/icons-material/Image';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const App = () => {

  const initialState = JSON.parse(localStorage.getItem('comments') || []);
  const [comments, setComments] = useState(initialState);
  const [inputValue, setInputValue] = useState({
    fullName: '',
    mail: '',
    createdAt: '',
    text: '',
  });

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handleInputChange = (e) => {
    setInputValue({...inputValue,
      [e.target.name]: e.target.value,
      createdAt: new Date().toUTCString(),
    });
  };
  const handleSubmit = () => {
    setComments((prevState) => [...prevState, inputValue]);
    setInputValue({
      fullName: '',
      mail: '',
      createdAt: '',
      text: '',
    });
  };
  return (
    <div
      style={{
        paddingTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h3>Отзывы</h3>
      {comments.map((comment) => (
        <List key={comment.createdAt}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={comment.fullName} secondary={comment.text} />
          </ListItem>
        </List>
      ))}
      <div style={{ marginBottom: '10px' }}>
        <TextField
          value={inputValue.fullName}
          name='fullName'
          id='outlined-basic'
          label='Имя'
          variant='outlined'
          onChange={handleInputChange}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <TextField
          value={inputValue.mail}
          name='mail'
          id='outlined-basic'
          label='Почта'
          variant='outlined'
          onChange={handleInputChange}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <TextField
          value={inputValue.text}
          name='text'
          id='outlined-basic'
          label='Текст'
          variant='outlined'
          multiline
          rows={4}
          onChange={handleInputChange}
        />
      </div>
      <Button onClick={handleSubmit} variant='contained'>
        Отправить
      </Button>
    </div>
  );
};

export default App;
