import { useState } from 'react';
import CongViec from '../congviec';
function TodoList() {
    const [danhSachCongViec, setDanhSachCongViec] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const themCongViec = () => {
        if (inputValue.trim() !== '') {
            setDanhSachCongViec([...danhSachCongViec, inputValue]);
            setInputValue('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            themCongViec();
        }
    };

    return (
        <div>
            <h2>Bài 2: Danh sách công việc</h2>
            
            <div>
                <input 
                    type="text" 
                    placeholder="Nhập công việc"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button onClick={themCongViec}>Thêm</button>
            </div>
            
            <ul>
                {danhSachCongViec.map((congViec, index) => (
                    <CongViec key={index} tenCongViec={congViec} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;