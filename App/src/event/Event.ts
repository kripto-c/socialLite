import { ipcMain } from "electron";

export function closeApp(app: any) {
  ipcMain.handle("closeApp", () => {
    app.quit();
  });
}
