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

// Reference to the specific data you want to read (e.g., a node named "exampleData")
const rootRef = database.ref();

// Listen for changes to the data
rootRef.on("value", function (snapshot) {
  const data = snapshot.val();
  const otpValue = data.otp; // Replace "opt" with your actual key name
  console.log("Value of 'opt' changed to:", otpValue);
  chrome.runtime.sendMessage({ data: otpValue, action: "otpValue" });
});
