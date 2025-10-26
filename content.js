// This is a content script that runs in the context of web pages
// Content scripts can interact with web pages and communicate with other extension parts

// This function returns a Hebrew "Hello World" message
// Parameters: none
// Returns: string - The Hebrew text "שלום עולם!" (Hello World)
// Purpose: Provides the Hebrew message that will be displayed in the popup
function getHebrewMessage() {
    window.open('https://www.google.com', '_blank');
    return 'שלום עולם!';  // Returns "Hello World" in Hebrew
}
// functiopn that opens a google search in a new tab

// We add the function to the window object (global scope)
// This is necessary because:
// 1. Different extension scripts run in isolated contexts
// 2. popup.js needs to access this function
// 3. Adding to window makes it accessible from popup.js
window.getHebrewMessage = getHebrewMessage;
