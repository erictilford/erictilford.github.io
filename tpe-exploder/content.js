window.onload = function() {
  var elements = document.querySelectorAll('.ui-accordion .ui-accordion-content');
  elements.forEach(function (element) {
    element.style.height = 'auto';
    element.style.maxHeight = '700px';
    element.style.padding = '10px';
  });

  // If URL starts with tpe2admin-ok.cdc.nicusa.com, prepend [P] to the title
  if (window.location.hostname.startsWith('tpe2admin-ok.cdc.nicusa.com')) {
    document.title = '(P) ' + document.title;
  }
  // If URL starts with tpe2admin-uat.cdc.nicusa.com, prepend [U] to the title
  if (window.location.hostname.startsWith('tpe2admin-uat.cdc.nicusa.com')) {
    document.title = '(U) ' + document.title;
  }

  console.log("SUCCESS");
};