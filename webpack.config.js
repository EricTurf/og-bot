const path = require("path");
module.exports = {
  entry: path.join(__dirname, "bot", "index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bot.js"
  },
  target: "electron-renderer"
};
