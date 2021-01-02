import React from 'react';

const validation = (props) => {
  
  let minimumTextLength = 5;
  let validationMessage = '';
  
  if (props.inputLength <= minimumTextLength) {
    validationMessage = 'Text too short';
  } else {
    validationMessage = 'Text long enough';
  }
  
  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  );
};

export default validation;