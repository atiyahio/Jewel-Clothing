import React from 'react';
import { StyledMenuItem } from './styles';

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <StyledMenuItem bg={imageUrl} className={size}>
      <div className="background-image"></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOW NOW</span>
      </div>
    </StyledMenuItem>
  );
};

export default MenuItem;
