function doTask(job) {
	console.log("Current task");
	job();
}

function cleanRoom () {
	console.log("Cleaning the room");
}

function washDishes () {
	console.log("Washing the dishes");
}

doTask(cleanRoom);
doTask(washDishes);


