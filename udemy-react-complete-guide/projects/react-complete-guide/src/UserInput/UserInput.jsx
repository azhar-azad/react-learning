import React from 'react';

const userInput = (props) => {
  const userInputStyle = {
    border: '2px solid red'
  };
  
  return (
    <div>
      <input type="text"
             style={userInputStyle}
             onChange={props.changed}
             value={props.currentName} />
    </div>
  );
};

export default userInput;