import getPlanetInfo from './planet-info';
import getResAmount from './res-amount';

export default {
  metalAmount: getResAmount('metal'),
  crystalAmount: getResAmount('crystal'),
  deutAmount: getResAmount('deuterium'),
  planetName: getPlanetInfo('name'),
  planetCoords: getPlanetInfo('koords'),
};
