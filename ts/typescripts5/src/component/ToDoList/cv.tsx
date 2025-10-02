import React from 'react';

interface CvProps {
  ten: string;
  onDelete: () => void;
}

function Cv({ ten, onDelete }: CvProps) {
  return (
    <li>
      <span>{ten}</span>{' '}
      <button onClick={onDelete}>Xóa</button>
    </li>
  );
}

export default Cv;