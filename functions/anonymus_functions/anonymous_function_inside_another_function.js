function operate(num, callback) {
	return callback(num);
}

const result = operate(5, function (x) {
	return x * x;
});

console.log(result); // 25
