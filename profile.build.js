/* jshint unused: false */
'use strict';
var amdExclude = ['demos/', 'build/', 'external/', 'tests/', 'Gruntfile', 'jquery.js', 'profile.build'];
var ignoreExclude = ['node_modules', 'demos/', 'build/', 'external/', 'tests/', 'Gruntfile', 'jquery.js', 'profile.build'];
var profile = {
	resourceTags: {
		amd: function (filename/*, mid*/) {
			var cnt, excluded = !(/\.js$/).test(filename);
			for (cnt=0;(cnt < amdExclude.length) && !excluded; cnt += 1){
				if (filename.indexOf(amdExclude[cnt]) >= 0) {
					excluded = true;
				}
			}
			return !excluded;
		},
		ignore: function (filename/*, mid*/) {
			var cnt, excluded = false;
			for (cnt=0;(cnt < ignoreExclude.length) && !excluded; cnt += 1){
				if (filename.indexOf(ignoreExclude[cnt]) >= 0) {
					excluded = true;
				}
			}
			return excluded;
		}
	}
};