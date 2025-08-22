window.onload = function() {
  var elements = document.querySelectorAll('.ui-accordion .ui-accordion-content');
  elements.forEach(function (element) {
    element.style.height = 'auto';
    element.style.maxHeight = '700px';
    element.style.padding = '10px';
  });

  // Helper to prepend tag to title only once
  function ensureTitleTag(tag) {
    if (!document.title.startsWith(tag + ' ')) {
      document.title = tag + ' ' + document.title.replace(/^(\(P\)|\(U\)) /, '');
    }
  }

  let envTag = null;
  let labelText = '';
  let labelClass = '';
  if (window.location.hostname.startsWith('tpe2admin-ok.cdc.nicusa.com')) {
    envTag = '(P)';
    labelText = 'PROD';
    labelClass = 'env-label prod';
  } else if (window.location.hostname.startsWith('tpe2admin-uat.cdc.nicusa.com')) {
    envTag = '(U)';
    labelText = 'UAT';
    labelClass = 'env-label uat';
  }

  if (envTag) {
    ensureTitleTag(envTag);
    // Add label if not already present
    if (!document.querySelector('.' + labelClass.replace(/ /g, '.'))) {
      var labelDiv = document.createElement('div');
      labelDiv.textContent = labelText;
      labelDiv.className = labelClass;
      document.body.prepend(labelDiv);
    }
    // Observe title changes
    var titleEl = document.querySelector('title');
    if (titleEl) {
      new MutationObserver(function() {
        ensureTitleTag(envTag);
      }).observe(titleEl, { childList: true });
    }
  }
};