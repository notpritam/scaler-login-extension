console.log("background contebt");
self.importScripts("firebase/app.js", "firebase/database.js");
// document.body.style.backgroundColor = "blue";
const firebaseConfig = {
  apiKey: "AIzaSyAVgZ_JYPzotlS9kSSxXUJgR4DNf3tDfDk",
  authDomain: "scaler-otp.firebaseapp.com",
  databaseURL: "https://scaler-otp-default-rtdb.firebaseio.com",
  projectId: "scaler-otp",
  storageBucket: "scaler-otp.appspot.com",
  messagingSenderId: "458812842671",
  appId: "1:458812842671:web:5ea8d6c4b6864c0a11ea5a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log(firebase);

const database = firebase.database();

const rootRef = database.ref();

var finalotpValue = 0;

rootRef.on("value", function (snapshot) {
  const data = snapshot.val();
  const otpValue = data.otp;
  finalotpValue = otpValue;
});

function myBackgroundFunction(data) {
  console.log("Function in background.js called with data:", data);

  chrome.runtime.sendMessage({
    action: "callBackgroundFunction",
    finalotpValue,
  });
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "callBackgroundFunction") {
    console.log(message, sender, sendResponse);
    sendResponse(finalotpValue);
  }
});
