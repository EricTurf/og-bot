import shouldOpen from "../helpers/should-open";
import hasLoaded from "../helpers/has-loaded";
import getRandomInterval from "../helpers/get-random-interval";

const pressPlay = element => {
  const playButton = [...element.getElementsByTagName("button")].find(
    el => el.innerText === "Play"
  );
  playButton && playButton.click();
};

const universe = "Dorado";

const openUni = () => {
  if (hasLoaded()) {
    const uniTab = [...document.getElementsByTagName("div")].find(
      el => el.innerText === universe
    );

    const uniRow = uniTab.parentElement.parentElement;

    if (shouldOpen(uniTab)) {
      uniTab.parentElement.parentElement.click();

      setTimeout(() => pressPlay(uniRow), getRandomInterval());
    } else {
      setTimeout(() => pressPlay(uniRow), getRandomInterval(1500));
    }
  } else {
    setTimeout(
      openUni,

      500
    );
  }
};

export default openUni;
