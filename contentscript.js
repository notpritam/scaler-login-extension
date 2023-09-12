console.log("I am content script!");
// document.body.style.backgroundColor = "blue";

const menu = document.querySelector('[data-name="academy-header-login"]');

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function myContentScriptFunction() {
  menu.click();
  const mobileField = document.getElementById("login-mobile");
  const mobileField2 = document.getElementById("login-mobile-number");

  await delay(2000);
  const loginButton = document.querySelector(
    '[data-gtm-element="login_mobile"]'
  );

  console.log(loginButton);

  mobileField.value = "620-156-0096";
  mobileField2.value = "620-156-0096";

  await delay(2000);

  loginButton.click();
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "myAction") {
    myContentScriptFunction();
  }
});
