import shouldOpen from "./helpers/should-open";
const { ipcRenderer } = require("electron");

window.onload = function() {
  const url = window.location.href;
  if (url === "https://en.ogame.gameforge.com/") login();
  openUni();
};

const universe = "Cosmos";

function login() {
  const logInTab = document.getElementById("ui-id-1");
  logInTab.click();
  const emailField = document.getElementById("usernameLogin");
  emailField.value = "skadoosh@gmail.com";
  const passwordField = document.getElementById("passwordLogin");
  passwordField.value = "123456789";
  const loginButton = document.getElementById("loginSubmit");
  loginButton.click();
}

function getRandomInterval() {
  return Math.floor(Math.random() * 3000) + 1000;
}

const pressPlay = element => {
  const playButton = [...element.getElementsByTagName("button")].find(
    el => el.innerText === "Play"
  );

  playButton && playButton.click();
};

function hasLoaded() {
  return [...document.getElementsByClassName("sk-spinner")].length === 0;
}

function openUni() {
  if (hasLoaded()) {
    const uniTab = [...document.getElementsByTagName("div")].find(
      el => el.innerText === universe
    );

    const uniRow = uniTab.parentElement.parentElement;

    if (shouldOpen(uniTab)) {
      uniTab.parentElement.parentElement.click();

      setTimeout(() => pressPlay(uniRow), getRandomInterval());
    } else {
      pressPlay(uniRow);
    }
  } else {
    setTimeout(openUni, 500);
  }
}
