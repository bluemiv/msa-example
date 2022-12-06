import React, { ReactNode } from 'react';
import { Button } from '../../components';

export interface FetchAndButtonProps {
  desc?: string;
  buttonLabel?: string;
  onClick: () => void;
  children?: ReactNode;
}

const FetchAndButton = ({ desc, buttonLabel, onClick, children }: FetchAndButtonProps) => {
  return (
    <div className="fetch-and-button">
      <p className="desc">{desc}</p>
      <Button onClick={onClick}>{buttonLabel}</Button>
      <div className="result">{children}</div>
    </div>
  );
};

export default FetchAndButton;
