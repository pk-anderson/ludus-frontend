import React, { ChangeEvent }  from 'react';
import styles from './Input.module.css';

interface InputProps {
  backgroundColor: string;
  text: string;
  textColor: string;
  height: number;
  width: number;
  borderRadius: number;
  type: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  backgroundColor,
  text,
  textColor,
  height,
  width,
  borderRadius,
  type,
  onChange,
}) => {
  const inputStyle: React.CSSProperties = {
    backgroundColor: backgroundColor,
    color: textColor,
    height: `${height}px`,
    width: `${width}px`,
    borderRadius: `${borderRadius}px`,
  };

  return (
    <div className={styles.customInput}>
      <input type={type} style={inputStyle} placeholder={text} onChange={onChange} /> 
    </div>
  );
};

export default Input;
