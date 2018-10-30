const path = require('path');

const botConfig = {
  entry: path.join(__dirname, 'bot', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'bot-build'),
    filename: 'bot.js',
  },
  target: 'electron-renderer',
  mode: 'development',
};

const electronConfig = {
  entry: path.join(__dirname, 'electron', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'bot-build'),
    filename: 'electron.js',
  },
  target: 'electron-main',
  mode: 'development',
};

module.exports = [botConfig, electronConfig];
