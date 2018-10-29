import { ipcRenderer } from "electron";

const log = (...args) => ipcRenderer.send("log", args);

export default log;
