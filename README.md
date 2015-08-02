# strip-chromium-logs

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Strips Chromium logs from a stream, mainly useful for cleaning up Electron's `process.stderr` stream.

## Install

```sh
npm install strip-chromium-logs --save
```

## Example

```js
var proc = require('child_process')
var electron = require('electron-prebuilt')
var logger = require('strip-chromium-logs')
var path = require('path')

var args = process.argv.slice(2)
var server = path.resolve(__dirname, 'server.js')

// spawn electron and print debugging to console
var p = proc.spawn(electron, [ server ].concat(args))
p.stdout.pipe(process.stdout)
p.stderr.pipe(logger()).pipe(process.stderr)
```

Before `strip-chromium-logs`:

![before](http://i.imgur.com/p1ZWzX6.png)

After `strip-chromium-logs`:

![after](http://i.imgur.com/7rFrX8l.png)

## Usage

[![NPM](https://nodei.co/npm/strip-chromium-logs.png)](https://www.npmjs.com/package/strip-chromium-logs)

#### `stripChromiumLogs()`

Returns a duplexer stream which ignores Chromium-looking logs (which can span several lines) but allows other lines to pass through.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/strip-chromium-logs/blob/master/LICENSE.md) for details.
