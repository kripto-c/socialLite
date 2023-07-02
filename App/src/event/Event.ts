import { ipcMain, Menu, Notification, Tray } from "electron";

let hide;

let tray;

export function eventBarra(app: any, mainWindow: any, iconURL: string) {
  ipcMain.handle("closeApp", () => {
    app.quit();
  });

  ipcMain.handle("minimizeApp", () => {
    mainWindow.minimize();
  });

  ipcMain.handle("hide", () => {
    new Notification({
      title: "SociaLite",
      body: "Seguira ejecutandose en segundo plano",
      icon: iconURL, // ruta del icono de la App
    }).show();

    hide = true;
    mainWindow?.hide();
  });

  tray = new Tray(iconURL);
  const contextMenu = Menu.buildFromTemplate([
    { label: "Abrir", click: () => mainWindow?.show() },
    { label: "Salir", click: () => app.quit() },
  ]);

  tray.setContextMenu(contextMenu);

  // Abrir la ventana principal al hacer clic en el icono
  tray.on("click", () => {
    mainWindow?.show();
  });
}
