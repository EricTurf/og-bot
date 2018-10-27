const shouldOpen = tab =>
  !tab.parentElement.parentElement.parentElement.className.includes("open");

export default shouldOpen;
