var _ = require("lodash");

var cellNeighbours = function(cell) {
	return [
		cell.up,
		cell.up.right,
		cell.right,
		cell.right.down,
		cell.down,
		cell.down.left,
		cell.left,
		cell.left.up
	];
};

var run = function(world) {
	_.each(world, function(row) {
		_.each(row, function(cell) {

			// super fast:
			var count = 0;
			var neighbours = cellNeighbours(cell);
			for (var i = 0; i < 8 && count < 4; i += 1) {
				count += (neighbours[i].isAlive ? 1 : 0);
			}

			// super slow:
			//var count = _.reduce(cellNeighbours(cell), function(count, neighbour) {
			//	return count + (neighbour.isAlive ? 1 : 0);
			//}, 0, null);

			if (cell.isAlive) {
				cell.isAliveNext = (count >= 2 && count <= 3);
			}
			else {
				cell.isAliveNext = (count === 3);
			}
		});
	});

	_.each(world, function(row) {
		_.each(row, function(cell) {
			cell.isAlive = cell.isAliveNext;
		});
	});

	setTimeout(_.bind(run, null, world), 200);
};

var startRunning = function(world) {
	run(world);
};

module.exports = {
	start: startRunning
};