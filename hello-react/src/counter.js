import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }

  //   위와 동일하게 작동
  //   state = {
  //     number: 0,
  //     fixedNumber :0
  //   };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h1>바뀌지 않는 값 : {fixedNumber}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 1 }, () => {
              console.log("끝남");
              console.log(this.state);
            });
          }}
        >
          더하기
        </button>
      </div>
    );
  }
}

export default Counter;
