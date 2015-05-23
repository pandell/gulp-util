var util = require('../');
var should = require('should');
var path = require('path');
require('mocha');

describe('log()', function(){

  var writtenValue, stdout_write, time;

  var emulateLogged = function(time, str) {
    return '[' + util.colors.grey(time) + '] '+str+'\n'
  }

  beforeEach(function() {
    // console.log("in before");
    time = util.date(new Date(), 'HH:MM:ss');

    // Stub process.stdout.write
    stdout_write = process.stdout.write;
    process.stdout.write = function(value) {
      writtenValue = value;
    };
  });

  it('should work i guess', function(done){
    util.log(1, 2, 3, 4, 'five');
    writtenValue.should.eql(emulateLogged(time, '1 2 3 4 five'));

    // Restore process.stdout.write
    process.stdout.write = stdout_write;
    done();
  });

  it('should interpolate sprintf characters', function(done) {
    util.log("%s", 'hello');
    writtenValue.should.eql(emulateLogged(time, 'hello'));
    process.stdout.write = stdout_write;
    // console.log('after', writtenValue);
    done();
  });
});
