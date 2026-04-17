function LoadSumo(animSpeed) {
    icon = 'fa-solid fa-torii-gate " style="color:#b10041';
			$("#sumo-title").append(' <i class=" ' + icon + '">');
			$("#widget-list").append('<a id="sumo-button" class="pointer"><li><i class="fa-2x ' + icon + '"></i><br>Sumo</li></a>');
			// $("#close-sumo-button").click(function() { $("#sumo-panel").hide(animSpeed); });
			$("#sumo-button").click(function() {  
                $("#sumo-panel").toggle(animSpeed); 
                $('html,body').animate({
                    scrollTop: $("#sumo-panel").offset().top
                 });
            });
			$("#sumo-button").attr("title",  "Sumo" );

            
}