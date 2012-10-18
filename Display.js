function display(activeGrid,div){
	var rowtext = [];
	activeGrid.forEach(function(r,c,value){
		if(rowtext.length < r+1) rowtext[r]='';	
		rowtext[r] += ' ' + (value > 0 ? value : '&nbsp;') + ' ';
	});	
	div.innerHTML = ''; //clear the display
	for (var r in rowtext){
		div.innerHTML += rowtext[r] + '<br>';
	}
}
