window.onload = function() {
  var elements = document.querySelectorAll('.ui-accordion .ui-accordion-content');
  elements.forEach(function (element) {
    element.style.height = 'auto';
    element.style.maxHeight = '700px';
    element.style.padding = '10px';
  });

  // Check if current page is NOT Logout.aspx or Login.aspx
  var page = window.location.pathname.split('/').pop();
  if (page !== 'Logout.aspx' && page !== 'Login.aspx' && page !== 'Mfa.aspx') {
    // Create timer div
    const timerDiv = document.createElement('div');
    timerDiv.id = 'timer-display';
    timerDiv.style.position = 'absolute';
    timerDiv.style.top = '16px';
    timerDiv.style.left = '16px';
    timerDiv.style.background = 'rgba(53,66,74,0.9)';
    timerDiv.style.color = '#fff';
    timerDiv.style.padding = '8px 16px';
    timerDiv.style.borderRadius = '8px';
    timerDiv.style.fontSize = '1.5em';
    timerDiv.style.fontFamily = 'monospace';
    timerDiv.style.zIndex = '9999';
    document.body.appendChild(timerDiv);

    /*
    // Timer logic
    let startSeconds = 15 * 60;
    let seconds = startSeconds;

    function pad(n) {
      return n < 10 ? '0' + n : n;
    }

    // Store the original title
    const originalTitle = document.title;

    function updateTimer() {
      const min = Math.floor(Math.abs(seconds) / 60);
      const sec = Math.abs(seconds) % 60;
      const sign = seconds < 0 ? '-' : '';
      const timerText = `${sign}${pad(min)}:${pad(sec)}`;
      timerDiv.textContent = timerText;
      document.title = `⏱️ ${timerText} | ${originalTitle}`;
    }

    updateTimer();
    setInterval(() => {
      seconds--;
      updateTimer();
    }, 1000);
    */
  }
};

function setFavicon(url) {
  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.href = url;
}

// Example usage:
setFavicon('https://example.com/favicon.ico');