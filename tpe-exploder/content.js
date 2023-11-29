document.onreadystatechange = () => {
  if (document.readyState === 'complete') {

    var elements = document.querySelectorAll('.ui-accordion .ui-accordion-content');
    elements.forEach(function (element) {
      element.style.height = 'auto'; element.style.maxHeight = '700px'; element.style.padding = '10px';
    });

  }
};



