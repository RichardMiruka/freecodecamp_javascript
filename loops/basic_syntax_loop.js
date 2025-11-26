/*
 * for (initialization; condition; increment/decrement) {
 * code to repeat 
 * }
 */

/*for (let x = 100; x < 100; x++) {
	console.log(x);
}


for (let x = 1; x <= 100; x++) {
	console.log(x);
} */

/*
 * 0
 * is 0 < 100, 0+1 = 1
 * is 1 < 100, 1+1 = 2
 * is 98 < 100, 98+1 = 99
 * is 99 < 100, 99+1 = 100
 * 100 < 100, 
 */



/*
 * 100 
 * is 100 > 0, 100+ 1 = 101
 * is 101 > 0, 101 + 1 = 102
 *
 */

const fruits = ["Mango", "Orange", "Banana", "Apple"];
for (let i = 0; i < fruits.length; i++) {
	console.log("Fruit:", fruits[i]);
}
