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
    <div>
      <p>{desc}</p>
      <Button onClick={onClick}>{buttonLabel}</Button>
      <div>{children}</div>
    </div>
  );
};

export default FetchAndButton;
