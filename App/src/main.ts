import { BrowserWindow, app } from "electron";

const createWindows = () => {
  const win = new BrowserWindow({
    width: 900,
    height: 700,
    transparent: true,
    backgroundColor: "#00000000",
    frame: false,
  });

  win.loadURL("http://localhost:5173");
};

app.whenReady().then(() => createWindows());
