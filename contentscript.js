console.log("I am content script!");

var optValue = 0;

const menu = document.querySelector('[data-name="academy-header-login"]');

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function myContentScriptFunction() {
  menu.click();
  var phoneInput = document.getElementById("login-mobile-number");

  await delay(2000);
  const loginButton = document.querySelector(
    '[data-gtm-element="login_mobile"]'
  );

  console.log(loginButton);

  phoneInput.value = `+916201560096`;

  await delay(2000);

  loginButton.click();

  chrome.runtime.sendMessage(
    { action: "callBackgroundFunction", data: "Hello from content.js!" },
    function (response) {
      console.log("Response received in content.js:", response);
    }
  );
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "myAction") {
    myContentScriptFunction();
  }
  if (request.action === "otpValue") {
    optValue = request.data;
  }

  console.log(request);
});
