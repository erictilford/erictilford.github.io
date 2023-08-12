function LoadETTV() {
    icon = 'fa-solid fa-paw " style="color:lightblue';
			$("#random-dog-title").append(' <i class=" ' + icon + '">');
			$("#widget-list").append('<a id="dog-button"><li><i class="fa-2x ' + icon + '"></i><br>Random Dog</li></a>');
			$("#close-dog-button").click(function() { $("#dog-panel").hide(animSpeed); });
			$("#dog-button").click(function() {  
                $("#dog-panel").toggle(animSpeed); 
                $('html,body').animate({
                    scrollTop: $("#dog-panel").offset().top
                 });
            });
			$("#dog-button").attr("title",  "Random Dog API" );
}