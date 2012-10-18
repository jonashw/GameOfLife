function simulateGeneration(activeGrid,secondGrid,maxAge){
	activeGrid.forEach(function(r,c,cellState){
		if(cellState && cellState >= maxAge){
			secondGrid.set(r,c,0);//kill old cells
			return;
		}
		//determine neighbors
		var neighbors = [
			{r:r-1, c:c-1},	
			{r:r-1, c:c-0},	
			{r:r-1, c:c+1},	
			{r:r-0, c:c-1},	
			{r:r-0, c:c+1},	
			{r:r+1, c:c-1},	
			{r:r+1, c:c-0},	
			{r:r+1, c:c+1}
		];
		//count living neighbors
		var livingNeighbors = 0;
		for(var i in neighbors){
			var n = neighbors[i];
			if(activeGrid.cellExists(n.r,n.c) && activeGrid.get(n.r,n.c) > 0) livingNeighbors++;
		}

		//act on the cell depending on living neighbors
		var ln = livingNeighbors;
		if(ln == 2){ //stable.  still dead or still alive
			if(cellState > 0) secondGrid.set(r,c,cellState + 1);//age the cell if it's alive
		} else if(ln==3){ //life! still alive or newborn if empty
			if(cellState > 0){
				secondGrid.set(r,c,cellState + 1);//age the cell
			} else {
				secondGrid.set(r,c,1);//newborn
			}
		} else if(ln < 2 || ln > 3){//cell dies of loneliness/overcrowding
			if(cellState) secondGrid.set(r,c,0);//make sure it's dead
		}
	});
}

