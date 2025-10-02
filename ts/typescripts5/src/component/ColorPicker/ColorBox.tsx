import React from 'react';

interface ColorBoxProps {
  color: string;
}

function ColorBox({ color }: ColorBoxProps) {
  const boxStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
    backgroundColor: color,
    marginTop: '20px',
    border: '2px solid black',
  };
  
  return (
    <div>
      <div style={boxStyle}></div>
    </div>
  );
}

export default ColorBox;