import 'index.sass';
import React, { Component } from 'react';

export default class App extends Component<{}, { timeInSeconds: string }> {
  state = { timeInSeconds: this.getMetricTime() };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        timeInSeconds: this.getMetricTime(),
      });
    }, 200);
  }

  mod(divisee: number, base: number) {
    return Math.round(divisee - Math.floor(divisee / base) * base);
  }

  getMetricTime(): string {
    var dte = new Date();
    var hrs = dte.getHours();
    var min = dte.getMinutes();
    var sec = dte.getSeconds();
    var mil = dte.getMilliseconds();
    var totalmil = mil + sec * 1000 + min * 1000 * 60 + hrs * 1000 * 60 * 60;
    var totalmetsecs = parseInt(`${totalmil / 864}`);
    var methrs = parseInt(`${totalmetsecs / 10000}`);
    var metmin = parseInt(`${this.mod(totalmetsecs, 10000) / 100}`);
    var metsec = this.mod(totalmetsecs, 100);

    return [methrs, metmin, metsec].map((n) => (n <= 9 ? `0${n}` : `${n}`)).join(':');
  }

  render() {
    return (
      <div id="app">
        <div>{this.state.timeInSeconds}</div>
      </div>
    );
  }
}
