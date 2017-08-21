function fewBillion(days){ //number of days we are doubling the money
	var current = 0.01; //how much money he has
	for (var i = 1; i < days; i++){
		current *= 2;
	}
	return current;
}
