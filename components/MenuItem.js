import React from 'react';
import { StyledMenuItem } from './styles';

const MenuItem = ({ title, imageUrl, size }) => {
  const easing = [0.6, -0.5, 0.01, 0.99];

  const fadeinUp = {
    initial: {
      y: 60,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing
      }
    }
  };

  return (
    <StyledMenuItem
      variants={fadeinUp}
      exit={{ opacity: 0 }}
      bg={imageUrl}
      className={size}
    >
      <div className="background-image"></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOW NOW</span>
      </div>
    </StyledMenuItem>
  );
};

export default MenuItem;
