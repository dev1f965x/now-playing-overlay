import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('overlayAPI', {
  onNowPlaying: (callback: (data: { title: string; artist: string } | null) => void) => {
    ipcRenderer.on('now-playing', (_event, data) => callback(data));
  },
});
