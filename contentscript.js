console.log("I am content script!");
// document.body.style.backgroundColor = "blue";

const menu = document.querySelector('[data-name="academy-header-login"]');
const loginButton = document.querySelector('[data-name="academy-header-login"]');

const mobileField = document.querySelector(
  '[data-cy="login-mobile-number_input"]'
);



// console.log(element);

function myContentScriptFunction() {
  menu.click();
  mobileField.value = 6201560096;
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "myAction") {
    myContentScriptFunction();
  }
});
