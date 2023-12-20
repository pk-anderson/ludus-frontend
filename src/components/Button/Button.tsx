import React, { MouseEventHandler } from 'react';
import './Button.css';

interface ButtonProps {
  text: string;
  height: number;
  width: number;
  backgroundColor: string;
  textSize: number;
  textColor: string;
  borderRadius: number;
  onClick?: MouseEventHandler<HTMLButtonElement>; 
}

const Button: React.FC<ButtonProps> = ({
  text,
  height,
  width,
  backgroundColor,
  textSize,
  textColor,
  borderRadius,
  onClick,
}) => {
  const buttonStyle = {
    height: `${height}px`,
    width: `${width}px`,
    backgroundColor: backgroundColor,
    color: textColor,
    fontSize: `${textSize}px`,
    borderRadius: `${borderRadius}px`, 
  };

  return (
    <button className="custom-button" style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
