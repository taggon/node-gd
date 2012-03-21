#!/usr/bin/node
var fs   = require('fs');
var path = require('path');
var gd   = require('./gd');

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
