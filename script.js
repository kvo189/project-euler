function showAnswer(){
	if (document.getElementById("input").value.length > 7) {
			alert("Please enter less than 7 digits");
		return;
	}

	let sum = 0;
	let counter = document.getElementById("input").value;

	for (var i = 0; i < counter; i++) {
		if (i % 3 == 0 || i % 5 == 0) {
			sum += i;
		}
	}
	document.getElementById("answer1").innerHTML = sum;
}