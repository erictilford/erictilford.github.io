function LoadRNG(animSpeed) {
    icon = 'fa-solid fa-dice " style="color:darkcyan';
			$("#rng-title").append(' <i class=" ' + icon + '">');
			$("#widget-list").append('<a id="rng-button" class="pointer"><li><i class="fa-2x ' + icon + '"></i><br>RNG</li></a>');
			// $("#close-rng-button").click(function() { $("#rng-panel").hide(animSpeed); });
			$("#rng-button").click(function() {  
                $("#rng-panel").toggle(animSpeed); 
                $('html,body').animate({
                    scrollTop: $("#rng-panel").offset().top
                 });
            });
			$("#rng-button").attr("title",  "Random Number Generator" );

            $("#d6-button").append('<i class="fa-solid fa-dice-six fa-2x">');
            $("#d20-button").append('<i class="fa-solid fa-dice-d20 fa-2x">');
            
}