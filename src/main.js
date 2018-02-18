const { app, BrowserWindow } = require('electron');

let mainWindow;

const useWebpackServer = (process.argv.filter(arg => arg === 'useWebServer=true').length > 0)
const mainUrl = useWebpackServer ? 'http://localhost:8081/index.html' : `file://${__dirname}/index.html`

console.log(`Using url ${mainUrl}`)

app.on('ready', () => {
    mainWindow = new BrowserWindow({width: 800, height: 600})
    mainWindow.loadURL(mainUrl)
})