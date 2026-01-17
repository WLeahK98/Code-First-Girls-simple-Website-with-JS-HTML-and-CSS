//Creating a second header in JS
const newHeader = document.createElement("h2");

newHeader.textContent = "This is our Header 2";

document.body.appendChild(newHeader);

// Step 1. Find Elements
const changeText = document.getElementById("change-text");
const hideText = document.getElementById("hide-text");

// Step 2. Modify Elements
changeText.textContent = "Text Changed";

// Step 3. Remove Elements
hideText.remove();
