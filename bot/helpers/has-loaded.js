const hasLoaded = () => {
  return [...document.getElementsByClassName("sk-spinner")].length === 0;
};

export default hasLoaded;
