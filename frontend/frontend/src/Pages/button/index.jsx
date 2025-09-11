import { useState } from "react"; 

function Button(props) {
    const handleClick = (value) => {
        if (value === "C") {
            props.setNhap("");
            props.setKetQua("");
        } else if (value === "=") {
            try {
                const expression = props.dauVao.replace(/x/g, "*");
                const evalResult = eval(expression);
                props.setKetQua(evalResult);
            } catch {
                props.setKetQua("Error");
            }
        } else {
            props.setNhap(props.dauVao + value);
        }
    };

    return (
        <div className="button-container">
            {props.truyennutbam.map((btn, index) => (
                <div className="nutbam" key={index}>
                    <button
                        className={["+", "-", "x", "/", "C", "="].includes(btn) ? "dacbiet" : ""}
                        onClick={() => handleClick(btn)}
                    >
                        {btn}
                    </button>
                </div>
            ))}
        </div>
    );
}
export default Button;