
module.exports = () => {
  console.log('Plugin reloaded')
  return {
    configureServer(server) {
      setTimeout(() => {
        try {
          console.log('Server restarted')
          server.restart();
        } catch (e) {}
      }, 5000);
    }
  };
}
