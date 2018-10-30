import log from './helpers/log';

import { ipcRenderer } from 'electron';
import { getAllPlanets } from './helpers/planets';

import _events from './events';

let planets = [];

const originalOnload = window.onload || document.onload;
window.onload = function() {
  if (originalOnload) originalOnload();
  // if (!planets.length) planets = getAllPlanets();

  loop();
};

function loop() {
  const url = window.location.href;
  log(url);
  if (url.includes('https://en.ogame.gameforge.com/')) _events.emit('login');
  if (url.includes('https://lobby.ogame.gameforge.com/'))
    _events.emit('open-uni');

  if (url.includes('?page=overview'))
    ipcRenderer.send(
      'res',
      document.getElementById('resources_metal').innerHTML
    );
}
