let numbers = [10, 5, 8, 20, 15];
let total = 0;
let i = 0;

while (total < 50) {
	total+= numbers[i];
	console.log("Current total:", total);
	i++;
}

/*
let total = 0;

for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
    console.log("Current total:", total);
    if (total >= 50) break;
}
*/

/*
 Start: total = 0, i = 0.

Check 0 < 50 → true
Add numbers[0] (10): total = 10 → log Current total: 10 → i = 1

Check 10 < 50 → true
Add numbers[1] (5): total = 15 → log Current total: 15 → i = 2

Check 15 < 50 → true
Add numbers[2] (8): total = 23 → log Current total: 23 → i = 3

Check 23 < 50 → true
Add numbers[3] (20): total = 43 → log Current total: 43 → i = 4

Check 43 < 50 → true
Add numbers[4] (15): total = 58 → log Current total: 58 → i = 5

Check 58 < 50 → false → loop stops.

So the loop runs 5 times and exits after total becomes 58.
*/
