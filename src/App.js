import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
import Recipes from './components/Recipes';

const App = () => {

  const [inputText, setInputText] = useState('');

  let inputHandler = (e)=>{
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase)
  }

  return (
    <div className='app'>
        <h1>Happy cooking recipes !</h1>
        <div className="search">
          {/* <TextField
            id='outlined-basic'
            variant='outlined'
            onChange={inputHandler}
            fullWidth
            label='Search'
          /> */}
          <input type="text" onChange={inputHandler}/>
        </div>
        <Recipes input={inputText}/>
    </div>
  );
};

export default App;
