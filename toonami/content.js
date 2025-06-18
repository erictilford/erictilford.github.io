

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    console.log("TOONAMI ADDON LOADED");






    function checkForToonamiElement() {
      // check if DOM elements exist
      var element = document.querySelector(".view-container");

      if (element) {
        setToonamiContainerStyles();
        // Stop checking by clearing the interval
        clearInterval(intervalId);
      }
    }

    // Set up the interval to call the function every x ms
    var intervalId = setInterval(checkForToonamiElement, 100);

    function checkForTheaterButton() {
      var theaterButton = document.querySelector("button.theater");
      if (theaterButton) {
        theaterButton.addEventListener('click', function () {

          setTimeout(function () {
            setToonamiContainerStyles()
          }, 100);

        });
        clearInterval(intervalId2);
      }
    }

    var intervalId2 = setInterval(checkForTheaterButton, 100);

    function setToonamiContainerStyles() {

      var chatContainer = document.querySelector(".chat");
      chatContainer.style.display = "none";

      
      var viewContainer = document.querySelector(".view-container");
      var theaterModeContainer = document.querySelector(".theaterMode .view-container");
      viewContainer.style.backgroundColor = "transparent";
      if (theaterModeContainer) {

        //console.log("theater mode");
        viewContainer.style.height = "100%";
        viewContainer.style.backgroundColor = "transparent";
      }
      else if (viewContainer) {

    

        //console.log("not theater mode");
        viewContainer.style.height = "calc(100vh - 160px)";
        viewContainer.style.backgroundColor = "black";
      }

      var videoContainer = document.querySelector(".video-container");
      if (videoContainer) {
        videoContainer.style.height = "100%";
        videoContainer.style.width = "100%";
      }

      var footerContainer = document.querySelector(".content");
      if (footerContainer) { footerContainer.remove() }

      var nav = document.querySelector("nav");
      if (nav) { nav.remove() };

    }

  }
};



