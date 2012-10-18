function Display(refreshRate,grid,textarea){
	this.refreshRate = refreshRate;
	this.grid = grid;
	this.textarea = textarea;
	console.log(textarea);
	this.loopInterval = null;
}
Display.prototype.start = function(){
	var self = this;
	self._draw();
	this.loopInterval = setInterval(function(){self._draw()}, 1000/self.refreshRate);
}
Display.prototype.stop = function(){
	if(this.loopInterval) clearInterval(this.loopInterval);
}
Display.prototype._draw = function(){//the workhorse
	var rowtext = [];
	this.grid.forEach(function(r,c,value){
		if(rowtext.length < r+1) rowtext[r]='';	
		rowtext[r] += ' ' + value + ' ';
	});	
	this.textarea.innerHTML = ''; //clear the display
	for (var r in rowtext){
		this.textarea.innerHTML += rowtext[r] + '<br>';
	}
}
