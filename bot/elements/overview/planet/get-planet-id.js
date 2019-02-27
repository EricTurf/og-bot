const planetQueryParam = '&cp=';

const getPlanetId = () => {
  const url = window.location.href;

  return url.contains(planetQueryParam)
    ? url.split(url.split('&cp=').pop()).pop()
    : '';
};

export default getPlanetId;
