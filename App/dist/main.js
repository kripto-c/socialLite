"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const createWindows = () => {
    const win = new electron_1.BrowserWindow({
        width: 900,
        height: 700,
        transparent: true,
        backgroundColor: "#00000000",
        frame: false,
    });
    win.loadURL("http://localhost:5173");
};
electron_1.app.whenReady().then(() => createWindows());
