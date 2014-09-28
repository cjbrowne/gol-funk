(function() {

	var _ = require("lodash");

	var gameOfLife = function (world) {

	};

	var generateRow = function(width) {
		
	}

	var generateWorld = function (width, height) {
		_.times(height, _.bind(generateRow, null, width));
	};

	gameOfLife(generateWorld(10, 10));

}());