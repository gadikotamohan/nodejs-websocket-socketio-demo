module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/tmp/github-monitor',
      deployTo: '/home/deploy/node-apps',
      repositoryUrl: 'https://github.com/gadikotamohan/nodejs-websocket-socketio-demo.git',
      ignores: ['.git', 'node_modules'],
      rsync: ['--del'],
      keepReleases: 2,
      shallowClone: true
    },
    staging: {
      servers: 'deploy@178.79.185.146:1981'
    }
  });
};