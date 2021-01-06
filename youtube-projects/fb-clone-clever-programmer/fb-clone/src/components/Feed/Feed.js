import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel/SotryReel';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';

const Feed = () => {
  
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      
      <Post
        profilePic="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        message="this works"
        timestamp="this is a timestamp"
        username="azad"
        image="https://content.fortune.com/wp-content/uploads/2017/01/google.jpeg"
      />
      <Post
        profilePic="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        message="this works"
        timestamp="this is a timestamp"
        username="azad"
      />
    </div>
  );
};

export default Feed;