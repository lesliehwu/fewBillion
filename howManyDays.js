function howManyDays(money){ //amount of money we want to know about
	var days = 1;
	while(money > 0.01){
		days++;
		money /= 2;
	}

	return days;
} 
