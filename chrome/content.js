console.log("Content Script Loaded");

function setContainerStyles() {
    var viewContainer = document.querySelector(".view-container");
    if (viewContainer) {
        viewContainer.style.height = "calc(100vh - 160px)";
        viewContainer.style.backgroundColor = "";
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

setContainerStyles();

window.addEventListener("resize", setContainerStyles);

var intervalId = setInterval(setContainerStyles, 1000);

// Set a timeout to clear the interval after 10 seconds
setTimeout(function() {
  clearInterval(intervalId);
  console.log("Interval cleared after 10 seconds");
}, 10000);

/*

if (window.location.href.includes("https://www.toonamiaftermath.com/")) {
  alert("You are on TOONAMI FUCKING AFTERMATH!");

  function setContainerStyles() {
      var viewContainer = document.querySelector(".view-container");
      if (viewContainer) {
        viewContainer.style.height = "calc(100vh - 410px)";
        viewContainer.style.backgroundColor = "";
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
  
    setContainerStyles();
  
    window.addEventListener("resize", setContainerStyles);
}

*/