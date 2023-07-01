import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("closeApp", async () => {
  const data = await ipcRenderer.invoke("closeApp");
  return data;
});
