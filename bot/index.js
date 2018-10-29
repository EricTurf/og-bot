import log from "./helpers/log";

import _events from "./events";

const originalOnload = window.onload || document.onload;
window.onload = function() {
  if (originalOnload) originalOnload();
  const url = window.location.href;

  if (url.includes("https://en.ogame.gameforge.com/")) _events.emit("login");
  if (url.includes("https://lobby.ogame.gameforge.com/"))
    _events.emit("open-uni");
};
