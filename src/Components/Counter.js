import React from "react";
import "./../Components/Counter.css";

class Counter extends React.Component {
  state = {
    number: 0,
    buttonname: "Start",
    intervalID: "",
  };

  Startcounting = () => {
    this.intervalID = setInterval(() => {
      this.setState({ number: this.state.number + 1 });
      this.setState({ buttonname: "Stop" });
    }, 1000);
    console.log(this.intervalID);
  };

  StopCounting = () => {
    clearInterval(this.intervalID);
    this.setState({ buttonname: "Start" });
  };

  ResetCounting = () => {
    clearInterval(this.intervalID);
    this.setState({ number: 0 });
  };

  render() {
    return (
      <div className="MainDiv">
        <h2 style={{ fontSize: 80 }}> {this.state.number} </h2>
        <div className="Buttons">
          <button
            onClick={
              this.state.buttonname === "Start"
                ? this.Startcounting
                : this.StopCounting
            }
          >
            {this.state.buttonname}
          </button>
          <button onClick={this.ResetCounting}> Reset </button>
        </div>
      </div>
    );
  }
}
export default Counter;
