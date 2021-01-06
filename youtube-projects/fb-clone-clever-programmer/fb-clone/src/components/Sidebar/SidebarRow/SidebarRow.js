import React from 'react';
import './SidebarRow.css';
import { Avatar } from '@material-ui/core';

const SidebarRow = (props) => {
  const { src, Icon, title } = props; // Icon is a component
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src}/>}
      {Icon && <Icon />}
      
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarRow;