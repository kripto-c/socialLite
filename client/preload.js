const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("getProcess", async () => {
  const data = ipcRenderer.invoke("getProcess");
  return data;
});
