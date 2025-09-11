import { useState , React} from "react";
import "./home.css";
import Thanhqk from "../thanhkq";
import Button from "../button";
import Bai1 from "../bai1";
import Bai2 from "../bai2";



function Home() {
  const NutBam = ["1", "2", "3", "+",
                  "4", "5", "6", "-",
                  "7", "8", "9", "x",
                  "C", "0", "=", "/"]
  const [input, setInput] = useState(""); 
  const [result, setResult] = useState(""); 
  return (
    <div className="clc">
      <Thanhqk dauVao = {input} dauRa = {result}></Thanhqk>
      <Button setKetQua= {setResult} setNhap = {setInput} truyennutbam = {NutBam} ></Button>
      <Bai1></Bai1>
      <Bai2></Bai2>
    </div>
  );
}

export default Home;