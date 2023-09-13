console.log("I am content script!");

var optValue = 0;

const menu = document.querySelector('[data-name="academy-header-login"]');

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function myContentScriptFunction(data) {
  menu.click();

  await delay(3000);

  var phoneInput = document.getElementById("login-mobile-number");
  const loginButton = document.querySelector(
    '[data-gtm-element="login_mobile"]'
  );

<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/main
  loginButton.addEventListener("click", () => {
    console.log(phoneInput.value);
  });

  phoneInput.focus();
  phoneInput.value = data;
  loginButton.click();
 

  // chrome.runtime.sendMessage(
  //   { action: "callBackgroundFunction", data: "Hello from content.js!" },
  //   function (response) {

  //     const otpInput = document.querySelector('[data-cy="login_mobile_otp_input"]');

  //     console.log("Response received in content.js:", response);
  //     otpInput.value = response;

  //     const verifyOtpButton = document.querySelector('[data-cy="login_mobile_otp_verify_button"]');

  //     verifyOtpButton.click();


  //   }
  // );
}

gotOTP = (data) => {
      console.log("this is otp :- " + data);
      const otpInput = document.querySelector('[data-cy="login_mobile_otp_input"]');
      const verifyOtpButton = document.querySelector('[data-cy="login_mobile_otp_verify_button"]');
     
      otpInput.value = data;
      verifyOtpButton.click();
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "myAction") {
    myContentScriptFunction(request.data);////
  }
  if (request.action === "otpValue") {
    optValue = request.data;
  }
  if (request.action === "newOTP") {
    gotOTP(request.data);
    
    sendResponse({ message: "Content script received the action" });
  }

  console.log(request);
});
