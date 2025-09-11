import { useState } from "react";


function Thanhqk(props) {
    return (
        <div className="thanhkq">
            <p style={{ margin: 0, fontSize: 25 }}>{props.dauVao || "Nhập phép tính"}</p>
            <h2>{props.dauRa}</h2>
        </div>
    );
}

export default Thanhqk;