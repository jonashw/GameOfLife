function setupRandom(grid){
	grid.forEach(function(r,c){
		grid.set(r,c,Math.round(Math.random()));
	});
}
