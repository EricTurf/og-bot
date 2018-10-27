window.onload = function() {
  login();
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

function openUni() {
  const uniTab = [...document.getElementsByTagName("div")].find(
    el => el.innerText === universe
  );
  alert(uniTab);
}
