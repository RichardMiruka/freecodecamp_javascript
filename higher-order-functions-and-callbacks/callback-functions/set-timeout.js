// The callback runs after something finishes (Time delay)

function showMessage(callback) {
	console.log("Please wait...");

	setTimeout(function () {
		callback();
	}, 5000);
}

showMessage(function() {
	console.log("Done waiting!");
});
