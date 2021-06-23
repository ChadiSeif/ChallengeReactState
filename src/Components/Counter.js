import React from "react";
import "./../Components/Counter.css";

class Counter extends React.Component {
  state = {
    number: 0,
    isClicked: false,
    buttonname: "Start",
    intervalID: "",
  };

  Startcounting = () => {
    this.intervalID = setInterval(() => {
      this.setState({ number: this.state.number + 1 });
      this.setState({ isClicked: true });
      this.setState({ buttonname: "Stop" });
    }, 1000);
    console.log(this.intervalID);
  };

  ResetCounting = () => {
    clearInterval(this.intervalID);
  };

  render() {
    return (
      <div className="MainDiv">
        <h2 style={{ fontSize: 80 }}> {this.state.number} </h2>
        <div className="Buttons">
          <button
            onClick={
              this.state.isClicked === false
                ? this.Startcounting
                : this.ResetCounting
            }
          >
            {this.state.buttonname}
          </button>
          <button onClick={() => this.setState({ number: 0 })}> Reset </button>
        </div>
      </div>
    );
  }
}
export default Counter;
