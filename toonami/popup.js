document.addEventListener('DOMContentLoaded', function() {
  var checkbox = document.getElementById('testCheckbox');

  // Attach event listener to detect changes
  checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
          alert('Checkbox is checked!');
      } else {
          alert('Checkbox is unchecked!');
      }
  });
});
