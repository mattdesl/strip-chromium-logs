var logger = require('../')
var test = require('tape')
var fs = require('fs')
var path = require('path')
var concat = require('concat-stream')

test('strips chromium logs from a stream', function(t) {
  t.plan(1)
  var file = path.resolve(__dirname, 'fixture.txt')
  fs.createReadStream(file)
    .pipe(logger())
    .pipe(concat(function (body) {
      t.equal(body.toString(), [
        'http://127.0.0.1:8902/',
        'start',
        'frame-finish',
        'bar'
      ].join('\n') + '\n')
    }))
})