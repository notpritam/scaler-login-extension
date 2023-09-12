// popup.js

document.addEventListener("DOMContentLoaded", function () {
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
