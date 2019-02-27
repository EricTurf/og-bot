import getPlanetId from './get-planet-id';

const getPlanetInfo = info => () => {
  const id = getPlanetId();

  if (!id) {
    return document.getElementsByClassName(`planet-${info}`)[0].innerHTML;
  } else {
    const planet = document.getElementById(`planet-${id}`);

    return planet.getElementsByClassName(`planet-${info}`)[0].innerHTML;
  }
};

export default getPlanetInfo;
