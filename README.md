#GD bindings for Node.js
*GD graphic library bindings for Node.js supporting asynchronous I/O written in C/C++*.

Tested with Node v0.4.6 & v0.6.6 (by Dudochkin Victor <blacksmith@gogoo.ru>)

## Install:
### Using npm

npm install gd

### From sources
1) go to the directory with GD (this library :) )

2) execute `node-waf configure build`

3)  Put it in node_modules.

## Using GD

app.js:
    
    var fs   = require('fs');
    var path = require('path');
    var gd   = require('gd');
    var source = './test.png';
    var target = './test.thumb.png';

    if (path.exists(target)) fs.unlink(target);

    gd.openPng(
	source,
	function(png, path) {
		if(png) {
			var w = Math.floor(png.width/2), h = Math.floor(png.height/2);
			var target_png = gd.createTrueColor(w, h);

			png.copyResampled(target_png,0,0,0,0,w,h,png.width,png.height);
			target_png.savePng(target, 1, gd.noop);
		}
	}
    );

That's all folks!
