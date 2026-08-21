import { app, BrowserWindow } from 'electron';
import path from 'node:path';
import started from 'electron-squirrel-startup';

if (started) {
  app.quit();
}

// TODO: 실제 재생 중인 곡 정보를 가져오는 부분. 지금은 자리표시자(mock)만 있음.
// 나중에 여기를 Windows 미디어 세션(SMTC) 또는 Spotify Web API 호출로 교체하면 됨.
function getNowPlaying(): { title: string; artist: string } | null {
  return { title: '(아직 연동 안 됨)', artist: '재생 중인 곡 정보 없음' };
}

const createWindow = () => {
  const overlay = new BrowserWindow({
    width: 360,
    height: 90,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: false,
    skipTaskbar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    overlay.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    overlay.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`),
    );
  }

  // 1초마다 지금 재생 중인 곡 정보를 렌더러로 전달
  setInterval(() => {
    overlay.webContents.send('now-playing', getNowPlaying());
  }, 1000);
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
