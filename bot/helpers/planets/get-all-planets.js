const getAllPlanets = () => {
  const planets = [...document.getElementsByClassName('smallplanet')];

  const planetLinks = planets.reduce((acc, planetDiv) => {
    acc = [
      ...acc,
      {
        element: planetDiv.getElementsByTagName('a')[0],
        name: planetDiv.getElementsByClassName('planet-name')[0].innerHTML,
      },
    ];
    return acc;
  });

  return planetLinks;
};

export default getAllPlanets;
