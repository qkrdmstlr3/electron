// Native
import { join } from 'path';

// Packages
import { BrowserWindow, app } from 'electron';
import isDev from 'electron-is-dev';

const height = 100;
const width = 250;

function createWindow() {
  // Create the browser window.
  const window = new BrowserWindow({
    width,
    height,
    //  change to false to use AppBar
    frame: false,
    show: true,
    resizable: false,
    fullscreenable: false,
    transparent: true,
    // webPreferences: {
    //   preload: join(__dirname, 'preload.js'),
    // },
  });

  const port = process.env.PORT || 3000;
  const url = isDev ? `http://localhost:${port}` : join(__dirname, '../dist/index.html');

  // and load the index.html of the app.
  if (isDev) {
    window?.loadURL(url);
  } else {
    window?.loadFile(url);
  }
  window.center();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
