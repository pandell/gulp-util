var colors = require('./colors');
var date = require('./date');
var format = require('util').format;

module.exports = function(){
  var time = '['+colors.grey(date(new Date(), 'HH:MM:ss'))+']';
  var args = Array.prototype.slice.call(arguments);
  args[0] = format("%s %s", time, args[0]);
  console.log.apply(console, args);
  return this;
};
