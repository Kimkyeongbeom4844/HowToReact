import { useState } from "react";

const Say = () => {
  const [message, setMesage] = useState("~~");
  const [color, setColor] = useState("black");
  const onClickEnter = () => setMesage("안녕하세요");
  const onClickLeave = () => setMesage("안녕히가세요");

  const styleRed = {
    color: "red",
  };

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color: color }}>{message}</h1>
      <hr />
      <button style={styleRed} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
    </div>
  );
};

export default Say;
