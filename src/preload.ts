import { contextBridge, ipcRenderer } from "electron";

const overlayAPI: Window["overlayAPI"] = {
  onNowPlaying: (callback) => {
    ipcRenderer.on("now-playing", (_event, track: NowPlaying | null) => callback(track));
  },
};

contextBridge.exposeInMainWorld("overlayAPI", overlayAPI);
