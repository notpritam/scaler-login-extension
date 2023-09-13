// popup.js

document.addEventListener("DOMContentLoaded", function () {

  const mobile = document.getElementById("mobile-input");
  
  mobile.value = 9050731132;

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const activeTab = tabs[0];
    chrome.tabs.sendMessage(
      activeTab.id,
      { action: "myAction" , data : mobile.value},
      function (response) {
        // Handle response if needed
      }
    );
  });

  document
    .getElementById("callFunctionButton")
    .addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(
          activeTab.id,
          { action: "myAction" },
          function (response) {
            // Handle response if needed
          }
        );
      });
    });
});
