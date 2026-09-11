import { app, BrowserWindow } from "electron";
import path from "node:path";
import started from "electron-squirrel-startup";

// The Squirrel installer launches the app with setup flags; exit immediately in that case.
if (started) {
  app.quit();
}

const POLL_INTERVAL_MS = 1000;

/**
 * Returns the track currently playing on the system, or `null` when nothing is.
 *
 * No playback source is connected yet. Candidates are the Windows media session
 * (any player, needs a native module) or the Spotify Web API (Spotify only).
 * The overlay depends on nothing but this signature.
 */
function getNowPlaying(): NowPlaying | null {
  return null;
}

function createWindow() {
  const overlay = new BrowserWindow({
    width: 360,
    height: 90,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: false,
    skipTaskbar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    overlay.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    overlay.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  const timer = setInterval(() => {
    overlay.webContents.send("now-playing", getNowPlaying());
  }, POLL_INTERVAL_MS);
  overlay.on("closed", () => clearInterval(timer));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
