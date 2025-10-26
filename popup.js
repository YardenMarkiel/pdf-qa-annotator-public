// This script controls the popup's behavior
// It runs when the extension icon is clicked and the popup opens

// window.onload is an event handler that runs when the popup HTML is fully loaded
// We need this because:
// 1. We can only access DOM elements after they're created
// 2. Trying to access elements before the page loads would cause errors
// 3. This ensures our code runs at the right time
window.onload = function() {
    // Find the button element by its ID and attach a click event handler
    // getElementById searches the DOM for an element with id="clickButton"
    // onclick defines what happens when the user clicks the button
    document.getElementById('clickButton').onclick = function() {
        // Call getHebrewMessage() from content.js to get our Hebrew text
        // This function is available because:
        // 1. content.js is loaded in popup.html before popup.js
        // 2. content.js added the function to the window object
        const hebrewMessage = getHebrewMessage();

        // Find the message div and update its text content
        // We use textContent (not innerHTML) for security
        // This prevents XSS (Cross-Site Scripting) attacks
        document.getElementById('message').textContent = hebrewMessage;
    };
};