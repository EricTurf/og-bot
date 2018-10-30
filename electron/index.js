// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let botWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  botWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
  });

  // and load the index.html of the app.
  //   mainWindow.loadFile("./index.html");
  if (process.env.NODE_ENV === 'production')
    mainWindow.loadFile('./build/index.html');

  mainWindow.loadURL('http://localhost:3000/');
  botWindow.loadFile('./bot-build/index.html');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  botWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    botWindow = null;
  });
}

ipcMain.on('log', (_, ...args) => args.forEach(arg => console.log(arg)));
let m;
let c;
let d;

ipcMain.on('res', (e, { met, cry, deut }) => {
  m = met;
  c = cry;
  d = deut;
});

ipcMain.on('give-res', event => {
  console.log('heresdfsdfsdf');
  event.sender.send('bla', m);
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

app.on('web-contents-created', function(webContentsCreatedEvent, contents) {
  if (contents.getType() === 'webview') {
    contents.on('new-window', function(newWindowEvent, url) {
      console.log('here');
      setTimeout(() => {
        const ogameWin = BrowserWindow.getAllWindows()[0];
        ogameWin.hide();
      }, 1000);
    });
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.