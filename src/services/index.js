const stuff = require('./stuff/stuff.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(stuff);
};
