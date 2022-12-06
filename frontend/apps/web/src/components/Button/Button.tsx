import React, { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
