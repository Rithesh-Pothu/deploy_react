import React from "react";
import "./App.css";
import Surya from "./surya.js";
import Cards from "./component/card.js";
import { BrowserRouter, Route } from "react-router-dom";
import resume from "./component/resume.js";
// function App() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   );
// }

// class App extends React.Component {
//   render() {
//     return React.createElement(
//       "div",
//       { style: { background: "yellow" } },
//       React.createElement("div", null, "Rithesh")
//     );
//   }
// }

// function App() {
//   const x = (
//     <div>
//       <p>Hai everyone</p>
//       <h4>How are you</h4>
//     </div>
//   );
//   return React.DOM.render(x, null, document.getElementById("root"));
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Surya name="venkat" role="developer"></Surya>
//         <Surya name="Narayana" role="Trainer"></Surya>
//       </div>
//     );
//   }
// }

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={Cards}></Route>
          <Route exact path="/resume" component={resume}></Route>
        </BrowserRouter>
        <Surya />
        {/* <Cards></Cards> */}
      </div>
    );
  }
}

export default App;
