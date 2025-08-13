document.onreadystatechange = () => {
  if (document.readyState === 'complete') {

    var elements = document.querySelectorAll('.ui-accordion .ui-accordion-content');
    elements.forEach(function (element) {
      element.style.height = 'auto';
      element.style.maxHeight = '700px';
      element.style.padding = '10px';
    });

    // Timer logic
    let startSeconds = 15 * 60;
    let seconds = startSeconds;
    const originalTitle = document.title;

    function pad(n) {
      return n < 10 ? '0' + n : n;
    }

    function updateTitle() {
      const min = Math.floor(Math.abs(seconds) / 60);
      const sec = Math.abs(seconds) % 60;
      const sign = seconds < 0 ? '-' : '';
      document.title = `${sign}${pad(min)}:${pad(sec)} ${originalTitle}`;
      console.log("WTF");
    }

    updateTitle();
    setInterval(() => {
      seconds--;
      updateTitle();
    }, 1000);

    

  }
};



