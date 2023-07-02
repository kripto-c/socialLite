import { BrowserWindow, app } from "electron";
import path from "path";
import { eventBarra } from "./event/Event";

let mainWindow: Electron.BrowserWindow | null = null;

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

  // mainWindow.setIcon(path.join(__dirname, "ico", "icon.png")); // reemplazar por la ruta del icono de la aplicacion

  isDev
    ? mainWindow.loadURL("http://localhost:5173")
    : mainWindow.loadFile(path.join(__dirname, "client", "index.html"));

  !isDev && mainWindow.setMenu(null);

  let icon = path.join(__dirname, "ico", "icon.png");

  eventBarra(app, mainWindow, icon);
};

//####################################//
//###########   EVENTOS  #############//
//####################################//
// eventBarra(app, mainWindow);
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
