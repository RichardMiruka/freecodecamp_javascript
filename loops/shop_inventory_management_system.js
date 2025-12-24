// =======================================
//  SIMPLE SHOP INVENTORY MANAGEMENT SYSTEM
// =======================================

// Our shop inventory (Array of Objects)
const inventory = [
  { id: 1, name: "Bread", price: 50, categories: ["food", "breakfast"] },
  { id: 2, name: "Milk", price: 70, categories: ["food", "dairy"] },
  { id: 3, name: "Soap", price: 40, categories: ["home", "bath"] },
  { id: 4, name: "Sugar", price: 120, categories: ["food"] },
  { id: 5, name: "Tissue", price: 90, categories: ["home"] }
];

console.log("=== SHOP INVENTORY SYSTEM ===");


// -----------------------------------------------------
// 1. FOR LOOP → Print first 3 items (limit results)
// -----------------------------------------------------
console.log("\n1. FOR LOOP — Showing first 3 items:");
for (let i = 0; i < inventory.length; i++) {
  if (i === 3) break; // stop after 3 items   ← using break
  console.log(`${inventory[i].name} - KES ${inventory[i].price}`);
}


// -----------------------------------------------------
// 2. FOR...OF → Loop through all items normally
// -----------------------------------------------------
console.log("\n2. FOR...OF — List all items:");
for (const item of inventory) {
  console.log(`${item.name} (${item.categories.join(", ")})`);
}


// -----------------------------------------------------
// 3. FOR...IN → Loop through properties of an item
// -----------------------------------------------------
console.log("\n3. FOR...IN — Show properties of one item:");
const sampleItem = inventory[0];

for (const prop in sampleItem) {
  console.log(`${prop}: ${sampleItem[prop]}`);
}


// -----------------------------------------------------
// 4. NESTED LOOPS → Display each item and each category
// -----------------------------------------------------
console.log("\n4. NESTED FOR...OF — Items with categories:");
for (const item of inventory) {
  console.log(`\n${item.name} categories:`);

  for (const cat of item.categories) {
    console.log(" - " + cat);
  }
}


// -----------------------------------------------------
// 5. WHILE LOOP → Keep searching for an item until found
// -----------------------------------------------------
console.log("\n5. WHILE LOOP — Searching for 'Sugar'...");

let index = 0;
while (index < inventory.length) {
  if (inventory[index].name === "Sugar") {
    console.log(`Found Sugar at index ${index}`);
    break;
  }
  index++;
}


// -----------------------------------------------------
// 6. DO...WHILE → Ask user to confirm checkout
// (Simulated here since we cannot use prompt)
// -----------------------------------------------------
console.log("\n6. DO...WHILE — Simulating checkout confirmation:");

let confirmed = false;
let attempt = 0;

do {
  console.log("Attempt:", attempt + 1, "- Asking user to confirm purchase...");
  attempt++;

  // Simulate user confirming on 3rd attempt
  if (attempt === 3) {
    confirmed = true;
  }

} while (!confirmed);

console.log("Purchase confirmed!");


// -----------------------------------------------------
// 7. CONTINUE → Skip items that are too expensive
// -----------------------------------------------------
console.log("\n7. CONTINUE — Showing items under KES 100:");

for (let i = 0; i < inventory.length; i++) {
  if (inventory[i].price > 100) {
    continue; // Skip expensive items
  }
  console.log(`${inventory[i].name} - KES ${inventory[i].price}`);
}


console.log("\n=== END OF PROGRAM ===");

