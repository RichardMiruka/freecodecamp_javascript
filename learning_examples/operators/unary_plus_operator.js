/* Unary operators act on a single operand to perform operations
 * like type conversion, value manipulation, or checking certain conditions.
 * The unary plus operator converts its operand into a number.
 * If the operand is already a number, it remains unchanged.
 */
const str = "42";
const strToNum = +str;

console.log(strToNum);
console.log(typeof str);
console.log(typeof strToNum);
