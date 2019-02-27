import React from 'react';

import 'antd/dist/antd.css';

const { ipcRenderer } = window.require('electron');

class App extends React.Component {
  state = { ressources: { m: 1, c: 1, d: 1 } };

  componentDidMount() {
    setInterval(() => ipcRenderer.send('get-state'), 10000);
    ipcRenderer.on('state', (_, state) => console.log(state));
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
