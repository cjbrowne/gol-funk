var _ = require("lodash");

var generateCell = function() {
	return {
		isAlive: Math.random() > 0.85241
	};
};

var generateRow = function(width) {
	return _.map(_.range(width), _.bind(generateCell, null, width));
};

var horizontalConnector = function(a, b) {
	a.right = b;
	b.left = a;
};

var verticalConnector = function(a, b) {
	a.down = b;
	b.up = a;
};

var connect = function(connector) {
	return function(accumulator, value) {
		connector(accumulator, value);
		return value;
	};
};

horizontalConnector = connect(horizontalConnector);
verticalConnector = connect(verticalConnector);

var connectCells = function(row, connector) {
	_.reduce(row, connector, row[row.length - 1], null);
};

var connectCellsInRow = function(row) {
	connectCells(row, horizontalConnector);
};

var connectCellsInColumn = function(row) {
	connectCells(row, verticalConnector);
};

var generateWorld = function (width, height) {
	var rows = _.map(_.range(height), _.bind(generateRow, null, width));
	_.each(rows, connectCellsInRow);

	var columns = _.zip.apply(_, rows);
	_.each(columns, connectCellsInColumn);

	return rows;
};

module.exports = {
	generateWorld: generateWorld
};