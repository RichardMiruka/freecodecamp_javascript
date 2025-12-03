// Inventory Data
const inventory = [
  { id: 1, name: "Bread", price: 50, categories: ["food", "breakfast"] },
  { id: 2, name: "Milk", price: 70, categories: ["food", "dairy"] },
  { id: 3, name: "Soap", price: 40, categories: ["home", "bath"] },
  { id: 4, name: "Sugar", price: 120, categories: ["food"] },
  { id: 5, name: "Tissue", price: 90, categories: ["home"] }
];

// Helper to show output
function show(text) {
  document.getElementById("output").innerText = text;
}


// 1. FOR + BREAK
document.getElementById("showFirst3").addEventListener("click", () => {
  let result = "FIRST 3 ITEMS:\n";

  for (let i = 0; i < inventory.length; i++) {
    if (i === 3) break;
    result += `${inventory[i].name} - KES ${inventory[i].price}\n`;
  }

  show(result);
});


// 2. FOR...OF
document.getElementById("showAll").addEventListener("click", () => {
  let result = "ALL ITEMS:\n";

  for (const item of inventory) {
    result += `${item.name} (${item.categories.join(", ")})\n`;
  }

  show(result);
});


// 3. FOR...IN
document.getElementById("showProps").addEventListener("click", () => {
  let result = "PROPERTIES OF FIRST ITEM:\n";
  const sample = inventory[0];

  for (const prop in sample) {
    result += `${prop}: ${sample[prop]}\n`;
  }

  show(result);
});


// 4. NESTED LOOPS
document.getElementById("showCategories").addEventListener("click", () => {
  let result = "ITEMS & CATEGORIES:\n";

  for (const item of inventory) {
    result += `\n${item.name} categories:\n`;
    for (const cat of item.categories) {
      result += ` - ${cat}\n`;
    }
  }

  show(result);
});


// 5. WHILE
document.getElementById("searchItem").addEventListener("click", () => {
  let index = 0;
  let result = "SEARCHING FOR 'Sugar'...\n";

  while (index < inventory.length) {
    if (inventory[index].name === "Sugar") {
      result += `Found 'Sugar' at index ${index}`;
      break;
    }
    index++;
  }

  show(result);
});


// 6. DO...WHILE
document.getElementById("simulateCheckout").addEventListener("click", () => {
  let confirmed = false;
  let attempts = 0;
  let result = "SIMULATING CHECKOUT...\n";

  do {
    attempts++;
    result += `Attempt ${attempts}: Asking user to confirm...\n`;

    // Simulate confirmation on 3rd attempt
    if (attempts === 3) {
      confirmed = true;
    }

  } while (!confirmed);

  result += "Purchase confirmed!";
  show(result);
});


// 7. CONTINUE
document.getElementById("cheapItems").addEventListener("click", () => {
  let result = "ITEMS UNDER 100 KES:\n";

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].price > 100) continue;
    result += `${inventory[i].name} - KES ${inventory[i].price}\n`;
  }

  show(result);
});

