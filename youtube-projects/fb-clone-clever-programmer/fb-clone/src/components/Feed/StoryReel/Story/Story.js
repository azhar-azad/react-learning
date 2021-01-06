import React from 'react';
import './Story.css';
import { Avatar } from '@material-ui/core';

const Story = (props) => {
  const { image, profileSrc, title } = props;
  const storyStyle = {
    backgroundImage: `url(${image})`
  };
  
  return (
    <div className="story" style={storyStyle}>
      <Avatar className="story__avatar" src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
};

export default Story;