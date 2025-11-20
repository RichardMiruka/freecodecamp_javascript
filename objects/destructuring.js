const county = {
	name: "Nairobi",
	area: 257,
	population: 4.5,
	country: "Kenya",
	governor: "Sakaja"
}

const { area, population, ...cleanObject } = county;
console.log(cleanObject);

/* { name: 'Nairobi', country: 'Kenya', governor: 'Sakaja' }
 *
 * const cleanObject {
 * 	name: "Nairobi",
 * 	country: "Kenya",
 * 	governor: "Sakaja"
 * }
 */
