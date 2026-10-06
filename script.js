// Assignment 1: Blacksmith — The Tiny Forge

// Main game notes:
// The forge starts with 20 heat and 0 swords.
// heatForge(amount) adds heat, but the heat cannot go above 100.
// makeSword() only works when the forge has at least 30 heat.
// Making one sword removes 30 heat and adds 1 to the sword count.
// If the heat is below 30, no sword is made and the numbers stay the same.

// Forge status:
// 0–29 heat = Too cold
// 30–69 heat = Ready to forge
// 70–100 heat = Roaring fire


// PLAN: Write a short pseudocode plan for making a sword here.
// First, check how much heat the forge has.
// If there is enough heat, make one sword and use 30 heat.
// If there is not enough heat, show a message.
// After each action, update the page.

// 1. Select the forge, heat, sword count, status, image, and message elements.
//    Find their IDs in index.html.

const forge = document.getElementById("forge");
const heatValue = document.getElementById("heat-value");
const swordCount = document.getElementById("sword-count");
const forgeStatus = document.getElementById("forge-status");
const forgeImage = document.getElementById("forge-image");
const actionMessage = document.getElementById("action-message");


// 2. Create the two state variables: heat and swords made.

let heat = 20;
let swordsMade = 0;

// 3. Write getForgeStatus(heatValue). Return the correct status string.

function getForgeStatus(heatValue) {
    if (heatValue < 30) {
        return "Too cold";
    }
    else if (heatValue < 70) {
        return "Ready to forge";
    }
    else {
        return "Roaring fire";
    }
}

// 4. Write updateForge(). Update text and apply one status class.

function updateForge() {

    // Update numbers 
    heatValue.textContent = heat;
    swordCount.textContent = swordsMade;

    // Get current status
    const status = getForgeStatus(heat);

    forgeStatus.textContent = status;

    // remove old status classes
    forge.classList.remove("is-cold", "is-ready", "is-roaring");


//    Change the supplied forge image src and alt to match the heat.

    // Too cold
    if (status === "Too cold") {

        forge.classList.add("is-cold");

        forgeImage.setAttribute("src","assets/forge-cold.svg");

        forgeImage.setAttribute("alt", "A stone forge with dark coals and no flames");

    }

//    Keep the most recent action message visible.
     
// Ready 

  else if (status === "Ready to forge") {

    forge.classList.add("is-ready");

    forgeImage.setAttribute("src","assets/forge-ready.svg");

    forgeImage.setAttribute("alt","A stone forge with a small orange fire" );
  }

  // Roaring
  else {

    forge.classList.add("is-roaring");

    forgeImage.setAttribute("src","assets/forge-roaring.svg");

    forgeImage.setAttribute("alt","A stone forge with tall bright flames and sparks");
  }
}

// 5. Write resetForge(). Restore the state, message, and display.

function resetForge() {
    heat = 20;
    swordsMade = 0;
    actionMessage.textContent = "Welcome to the forge. Add heat to begin.";
    updateForge();

}

// 6. Write heatForge(amount). Add heat, cap it, and update the page.

function heatForge(amount) {
    heat = heat + amount;
    if (heat > 100) {
        heat = 100;
    }

    actionMessage.textContent = "The forge was heated."
    updateForge();

}

// 7. Write makeSword(). Handle both success and insufficient heat.

function makeSword() {
    if (heat >= 30) {
        heat = heat -30;
        swordsMade = swordsMade +1;

        actionMessage.textContent = "Sword made successfully.";
    } else {
        actionMessage.textContent = "Not enough heat. Add more heat.";
    }
    updateForge();
}

// 8. Call resetForge() once to start the game.
resetForge();


// Use the tests in ASSIGNMENT.md to check your work.
