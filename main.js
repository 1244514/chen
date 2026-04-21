const { app, BrowserWindow } = require('electron')
function createWindow() {
  const win = new BrowserWindow({
    width: 480, height: 820,
    icon: __dirname + '/img/icon.ico',
    webPreferences: { nodeIntegration: true, contextIsolation: false }
  })
  win.loadFile('qchat.html')
}
app.whenReady().then(createWindow)