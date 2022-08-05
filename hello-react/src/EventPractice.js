import { Component } from "react";

class EventPractice extends Component {
  constructor(props) {
    super(props);
    this.
    this.state = { 
      message: "",
    };
  }

  //   state = {

  //   }
  render() {
    const { message } = this.state; //구조분해할당으로 message는 this.state.message와 동일
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="입력하는곳"
          value={this.state.message}
          onChange={(e) => {
            this.setState({ message: e.target.value });
          }}
        ></input>
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: "",
            });
          }}
        ></button>
      </div>
    );
  }
}

export default EventPractice;
