function checkEntry(height) {
	if(height < 85) {
		alert("You do not reach the minimum height permitted for this ride :(");
	} else if(height < 195) {
		alert("You are permitted on this ride!");
	} else {
		alert("You exceed the maximum height permitted for this ride :(");
	}
}

checkEntry(170);