window.onload = function() {
  var elements = document.querySelectorAll('.ui-accordion .ui-accordion-content');
  elements.forEach(function (element) {
    element.style.height = 'auto';
    element.style.maxHeight = '700px';
    element.style.padding = '10px';
  });

  // Ensure stylesheet is loaded
  if (!document.querySelector('link[href$="tpe-exploder/style.css"]')) {
    var styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    styleLink.href = 'tpe-exploder/style.css';
    document.head.appendChild(styleLink);
  }

  // If URL starts with tpe2admin-ok.cdc.nicusa.com, prepend (P) to the title and show PROD label
  if (window.location.hostname.startsWith('tpe2admin-ok.cdc.nicusa.com')) {
    document.title = '(P) ' + document.title;
    var prodLabel = document.createElement('div');
    prodLabel.textContent = 'PROD';
    prodLabel.className = 'env-label prod';
    document.body.prepend(prodLabel);
  }
  // If URL starts with tpe2admin-uat.cdc.nicusa.com, prepend (U) to the title and show UAT label
  if (window.location.hostname.startsWith('tpe2admin-uat.cdc.nicusa.com')) {
    document.title = '(U) ' + document.title;
    var uatLabel = document.createElement('div');
    uatLabel.textContent = 'UAT';
    uatLabel.className = 'env-label uat';
    document.body.prepend(uatLabel);
  }

  console.log("BAZINGA");
};