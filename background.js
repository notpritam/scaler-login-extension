
console.log("I am background script!")


//-----------------------------------------------------------------------//

// chrome.tabs.onCreated.addListener(function(tab) {
//     console.log(tab)
// })

//-----------------------------------------------------------------------//
// chrome.tabs.onActivated.addListener(function(tab) {
//     console.log(tab)
// })
//-----------------------------------------------------------------------//

// listen to bookmark creation
chrome.bookmarks.onCreated.addListener(function (id, bookmark) {
  console.log(id)
  console.log(bookmark)
});
//-----------------------------------------------------------------------//

//Context menu

// chrome.contextMenus.create({
//   id: "sampleContextMenu",
//   title: "Sample Context Menu",
//   contexts: ["all"]
// });

//-----------------------------------------------------------------------//
