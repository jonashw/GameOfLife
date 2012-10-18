function Grid(rows,cols,array){//only array is optional
	if (array){
		this.array = array;
	} else {
		this.array = [];
		for(var r=0; r<rows; r++){
			var temprow = [];
			for (var c=0; c<cols; c++){
				temprow.push(null);
			}
			this.array.push(temprow);
		}
	}
	this.rows = rows;
	this.cols = cols;
	this.cells = rows*cols;
}
Grid.prototype.clone = function(){
	var newArray = new Array();
	for(var k in this.array) newArray[k] = this.array[k];
	return new Grid(this.rows, this.cols, newArray);
}
Grid.prototype.forEach = function(callback){
	for(var r=0; r<this.rows; r++) for(var c=0; c<this.cols; c++) callback(r,c,this.get(r,c));
}
Grid.prototype.get = function(r,c){
	this._checkRequestAgainstBounds(r,c);
	return this.array[r][c];
}
Grid.prototype.set = function(r,c,value){
	this._checkRequestAgainstBounds(r,c);
	this.array[r][c] = value;
}
Grid.prototype.cellExists = function(r,c){
	return r >= 0 && r < this.rows && c >= 0 && c < this.cols;
}
Grid.prototype._checkRequestAgainstBounds = function(r,c){
	if(!this.cellExists(r,c)) throw('grid.set(r,c,value): r (' + r + ') or c (' + c + ') is outside the grid bounds: rows('+this.rows+'), cols('+this.cols+')');
}
