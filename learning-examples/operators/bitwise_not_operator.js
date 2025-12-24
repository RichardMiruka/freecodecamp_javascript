/*  Represented by a tilde ( ~ )
 * it inverts the binary representation of a number
 * Computers store numbers in binary format (1s and 0s)
 * The ~ operator flips every bit, meaning it changes all 1s to 0s and all 0s to 1s.
*/

const num = 5; // The binary of 5 is 00000101
console.log(~num); // -6

/*
 * In this example, 5 became -6 because by applying the ~ operator to 5
 * you get - (5 + 1), which equals -6 due to two's complement representation
 * Two's complement is a way computers represent negative numbers in binary.
 */
