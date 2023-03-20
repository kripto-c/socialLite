const { BrowserWindow, app, ipcMain } = require("electron");
const path = require("path");

const createWindows = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 1000,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadURL("http://localhost:5173/");
};

ipcMain.handle("getProcess", async () => {
  return JSON.stringify(process);
});

app.whenReady().then(() => {
  createWindows();
});
