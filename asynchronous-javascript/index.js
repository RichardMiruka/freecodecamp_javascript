async function makeCoffee () {
	const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

	console.log("Starting coffee machine ...");
	await wait(1000);
	console.log("Boiling water...");
	console.log("Your coffee is ready");

}

makeCoffee();
