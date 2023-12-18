import React from 'react';
import './Button.css';

interface ButtonProps {
  text: string;
  height: number;
  width: number;
  backgroundColor: string;
  textSize: number;
  textColor: string;
  borderRadius: number;
}

const Button: React.FC<ButtonProps> = ({
  text,
  height,
  width,
  backgroundColor,
  textSize,
  textColor,
  borderRadius,
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
    <button className="custom-button" style={buttonStyle}>
      {text}
    </button>
  );
};

export default Button;
