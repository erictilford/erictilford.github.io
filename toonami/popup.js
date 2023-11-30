document.addEventListener('DOMContentLoaded', function () {

  // Retrieve the stored checkbox states on popup load
  chrome.storage.sync.get({ showNav: false, showFooter: false }, function (data) {
    var showNavCheckbox = document.getElementById('showNav');
    var showFooterCheckbox = document.getElementById('showFooter');

    showNavCheckbox.checked = data.showNav;
    showFooterCheckbox.checked = data.showFooter;
  });

  // Add event listeners to the checkboxes
  document.querySelectorAll('.featureCheckbox').forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      // Save the checkbox states to storage
      var showNavState = document.getElementById('showNav').checked;
      var showFooterState = document.getElementById('showFooter').checked;
      chrome.storage.sync.set({ showNav: showNavState, showFooter: showFooterState });

      // Send a message to content script when the checkbox states change
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { showNav: showNavState, showFooter: showFooterState });
      });
    });
  });
  
});