import React from "react";
import "./../Components/Counter.css";
import Button from "react-bootstrap/Button";

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
          <Button
            variant="light"
            onClick={
              this.state.buttonname === "Start"
                ? this.Startcounting
                : this.StopCounting
            }
          >
            {this.state.buttonname}
          </Button>
          <Button variant="light" onClick={this.ResetCounting}>
            Reset
          </Button>
        </div>
      </div>
    );
  }
}
export default Counter;
