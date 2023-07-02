import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("closeApp", async () => {
  const data = await ipcRenderer.invoke("closeApp");
  return data;
});

contextBridge.exposeInMainWorld("minimizeApp", async () => {
  const data = await ipcRenderer.invoke("minimizeApp");
  return data;
});

contextBridge.exposeInMainWorld("hide", async () => {
  const data = await ipcRenderer.invoke("hide");
  return data;
});
