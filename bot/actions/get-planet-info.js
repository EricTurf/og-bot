import { ipcRenderer } from 'electron';

import overviewElements from '../elements/overview';

const {
  metalAmount,
  crystalAmount,
  deutAmount,
  planetName,
  planetCoords,
} = overviewElements;

const getPlanetInfo = () => {
  const metal = metalAmount();
  const crystal = crystalAmount();
  const deut = deutAmount();
  const name = planetName();
  const coords = planetCoords();

  const planet = {
    name,
    coords,
    resources: { metal, crystal, deut },
  };

  ipcRenderer.send('planet-info', JSON.stringify(planet));
};

export default getPlanetInfo;
