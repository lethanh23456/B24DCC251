import React, { useMemo, useState } from 'react';
import ColorBox from './ColorBox';

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState<string>('');
  
  return (
    <div style={{ padding: 20 }}>
      <h2>Bài 2: Color Picker</h2>
      <button onClick={() => setSelectedColor('red')}>Đỏ</button>
      <button onClick={() => setSelectedColor('blue')}>Xanh</button>
      <button onClick={() => setSelectedColor('yellow')}>Vàng</button>
    
      {selectedColor && <ColorBox color={selectedColor} />}
    </div>
  );
}

export default ColorPicker;

