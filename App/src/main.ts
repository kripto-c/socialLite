import { BrowserWindow, app } from "electron";
import path from "path";
import { closeApp } from "./event/Event";

let mainWindow: Electron.BrowserWindow | null;

let tray;

let hide;

let isDev = true;

const createWindows = () => {
  mainWindow = new BrowserWindow({
    minWidth: 1200,
    maxWidth: 1300,
    minHeight: 600,
    height: 700,
    transparent: true,
    backgroundColor: "#00000000",

    frame: false,

    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname + "/preload.js"),
    },
  });

  // win.loadURL("http://localhost:5173");

  // mainWindow.setIcon(path.join(__dirname, "ico", "icon.png"));

  isDev
    ? mainWindow.loadURL("http://localhost:5173")
    : mainWindow.loadFile(path.join(__dirname, "client", "index.html"));

  !isDev && mainWindow.setMenu(null);
};

//####################################//
//###########   EVENTOS  #############//
//####################################//
closeApp(app);
//####################################//

app.on("ready", createWindows);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindows();
  }
});
