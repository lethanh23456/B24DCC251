import { useState } from "react"; 
import HienThiSo from "../hienthiso";
function Bai1() {
    const [so, setSo] = useState(0);

    const tangSo = () => {
        setSo(so + 1);
    };

    const giamSo = () => {
        setSo(so - 1);
    };
   
    return (
        <div>
            <h2>Bài 1: Ứng dụng Đếm số</h2>
            
            <HienThiSo giaTriSo={so} />
            
            <button onClick={giamSo}>-</button>
            <button onClick={tangSo}>+</button>
        </div>
    );
}
export default Bai1;