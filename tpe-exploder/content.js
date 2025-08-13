window.onload = function() {
  var elements = document.querySelectorAll('.ui-accordion .ui-accordion-content');
  elements.forEach(function (element) {
    element.style.height = 'auto';
    element.style.maxHeight = '700px';
    element.style.padding = '10px';
  });

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
  console.log("WTAF");

  // Timer logic
  let startSeconds = 15 * 60;
  let seconds = startSeconds;

  function pad(n) {
    return n < 10 ? '0' + n : n;
  }

  function updateTimer() {
    const min = Math.floor(Math.abs(seconds) / 60);
    const sec = Math.abs(seconds) % 60;
    const sign = seconds < 0 ? '-' : '';
    timerDiv.textContent = `${sign}${pad(min)}:${pad(sec)}`;
  }

  updateTimer();
  setInterval(() => {
    seconds--;
    updateTimer();
  }, 1000);
};