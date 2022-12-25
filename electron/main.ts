// Native
import { join } from 'path';

// Packages
import { BrowserWindow, app, ipcMain } from 'electron';
import isDev from 'electron-is-dev';
import { DynamicIslandType } from './type';

const dynamicIsland: { [type in DynamicIslandType]: { width: number; height: number } } = {
  normal: { width: 193, height: 37 },
  short: { width: 125, height: 37 },
  square: { width: 83, height: 83 },
  expand: { width: 373, height: 83 },
  maximum: { width: 373, height: 200 },
};

function createWindow() {
  const { width, height } = dynamicIsland.normal;
  const window = new BrowserWindow({
    width,
    height,
    frame: false,
    show: true,
    resizable: false,
    fullscreenable: false,
    transparent: true,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
    },
  });

  const port = process.env.PORT || 3000;
  const url = isDev ? `http://localhost:${port}` : join(__dirname, '../dist/index.html');

  if (isDev) {
    window?.loadURL(url);
  } else {
    window?.loadFile(url);
  }
  window.center();

  ipcMain.on('resize', (event, payload: DynamicIslandType) => {
    const { width, height } = dynamicIsland[payload];
    window.setSize(width, height);

    event.reply('IPC_RENDERER_CHANNEL_NAME', 'message');
  });
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
