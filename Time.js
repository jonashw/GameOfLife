function Time(ticksPerSecond, stepFn){
	this.ticksPerSecond = ticksPerSecond;
	this.stepFn = stepFn;
	this.loopInterval = null;
}
Time.prototype.start = function(){
	var self = this;
	this.loopInterval = setInterval(function(){self._stepForward()}, 1000/self.ticksPerSecond);
}
Time.prototype.stop = function(){
	if(this.loopInterval) clearInterval(this.loopInterval);
}
Time.prototype.step = function(numTicks){
	var numTicks = numTicks ? numTicks : 1;
	for(var i=0; i<numTicks; i++){
		this._stepForward();
	}
}
Time.prototype._stepForward = function(){//the workhorse
	this.stepFn.call(this, null);
}
Time.prototype.setRefreshRate = function(rr){
	this.ticksPerSecond = rr;
	this.stop();
	this.start();
}
