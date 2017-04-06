import { app, BrowserWindow } from 'electron';
import path from 'path';
import url from 'url';

let win = null;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    show: false
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'app', 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  win.once('ready-to-show', () => { win.show(); });
  win.on('closed', () => { win = null; });

}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (win === null) {
    createWindow();
  }
});
