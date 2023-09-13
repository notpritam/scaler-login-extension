console.log("I am content script!");

var optValue = 0;

const menu = document.querySelector('[data-name="academy-header-login"]');

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function myContentScriptFunction() {
  menu.click();

  await delay(3000);

  var phoneInput = document.getElementById("login-mobile-number");
  const loginButton = document.querySelector(
    '[data-gtm-element="login_mobile"]'
  );

  loginButton.addEventListener("click", () => {
    console.log(phoneInput.value);
  });

  phoneInput.addEventListener("click", () => {
    phoneInput.value = '9050731132';
  });

    phoneInput.click();
    await delay(2000);
    phoneInput.dispatchEvent(new Event("input"));

    await delay(1000);

    loginButton.click();
    phoneInput.blur();

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
    myContentScriptFunction();////
  }
  if (request.action === "otpValue") {
    optValue = request.data;
  }

  console.log(request);
});
