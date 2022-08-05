import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import MyComponent from "./MyComponent";
import Counter from "./counter";
import Say from "./say";
import EventPractice from "./EventPractice";

class App extends Component {
  render() {
    return (
      <>
        <MyComponent name="react" favorite={1} />
        <Counter />
        <Say />
        <EventPractice />
      </>
    );
  }
}

// function Apps() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
