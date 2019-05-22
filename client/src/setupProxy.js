const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/auth', { target: 'http://localhost:8080/' }));
  app.use(proxy('/api/users', { target: 'http://localhost:8080/' }));
  app.use(proxy('/api/customers', { target: 'http://localhost:8080/' }));
  app.use(proxy('/api/notifications', { target: 'http://localhost:8080/' }));
  app.use(proxy('/api/notes', { target: 'http://localhost:8080/' }));
  app.use(proxy('/api/folders', { target: 'http://localhost:8080/' }));
  app.use(proxy('/api/boards', { target: 'http://localhost:8080/' }));
  app.use(proxy('/api/groups', { target: 'http://localhost:8080/' }));
  app.use(proxy('/api/tasks', { target: 'http://localhost:8080/' }));
};
