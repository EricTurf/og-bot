import React, { Component } from 'react';
import logo from './logo.svg';
const { ipcRenderer } = window.require('electron');

class App extends Component {
  state = { ressources: { m: 1, c: 1, d: 1 } };

  componentDidMount() {
    setInterval(() => ipcRenderer.send('give-res'), 10000);
    ipcRenderer.on('settings', (_, ressources) =>
      this.setState({ ressources })
    );
  }

  render() {
    return (
      <div style={{ position: 'absolute', color: 'orange', zIndex: 10 }}>
        {this.state.ressources.metal}
        {this.state.ressources.crystal}
        {this.state.ressources.deut}
      </div>
    );
  }
}

export default App;
