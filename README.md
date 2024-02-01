# Quasar App (quasar-issue)

A Quasar Project

## Install the dependencies
```bash
yarn
# or
npm install
```

### The issue

A vite plugin which uses `server.restart()` will normally reload the config of all the plugins

To demonstrate run `vite` or `npm run vite` which has been provided with a simple plugin to restart the server every 5 seconds
You will also see the `Plugin reloaded` log

Now run
```bash
npm run dev
```

Notice that the server still restart but the plugins are NOT reloaded
