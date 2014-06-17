/* jshint unused: false */
'use strict';
var amdExclude = ['demos/'];
var profile = {
	resourceTags: {
		ignore: function(filename){
			return (/node_modules/).test(filename);
		},
		amd: function (filename/*, mid*/) {
			var cnt, excluded = !(/\.js$/).test(filename);
			for (cnt=0;(cnt < amdExclude.length) && !excluded; cnt += 1){
				if (filename.indexOf(amdExclude[cnt]) >= 0) {
					excluded = true;
				}
			}
			return !excluded;
		}
	}
};