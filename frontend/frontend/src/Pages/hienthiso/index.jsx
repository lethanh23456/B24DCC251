import { useState } from "react"; 

function HienThiSo(props) {
    return (
        <div>
            Giá trị hiện tại: {props.giaTriSo}
        </div>
    );
}
export default HienThiSo;