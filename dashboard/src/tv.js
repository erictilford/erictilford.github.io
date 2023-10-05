function LoadETTV(animSpeed) {
    icon = 'fa-solid fa-tv " style="color:darkcyan';
			$("#ettv-title").append(' <i class=" ' + icon + '">');
			$("#widget-list").append('<a id="ettv-button"><li><i class="fa-2x ' + icon + '"></i><br>ETTV</li></a>');
			$("#close-tv-button").click(function() { $("#ettv-panel").hide(animSpeed); });
			$("#ettv-button").click(function() {  
                $("#ettv-panel").toggle(animSpeed); 
                $('html,body').animate({
                    scrollTop: $("#ettv-panel").offset().top
                 });
            });
			$("#ettv-button").attr("title",  "ETTV" );
}