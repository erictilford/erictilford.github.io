window.addEventListener('DOMContentLoaded', showInfo);

function showInfo(results) {

    // var noSleep = new NoSleep();

    var tagButtonNames = [];

    // RECIPE ITERATION
    for (var recipeNumber in recipes) {

        // TAG BUTTON GENERATION
        var tags = recipes[recipeNumber].tags;
        for (var tag in tags){
            if (!tagButtonNames.includes(tags[tag])){
                tagButtonNames.push(tags[tag]);
            }
        }

        // CARD GENERATION
        var newElement = document.createElement('a');
        $(newElement).attr("href", "recipe.html?id=" + recipes[recipeNumber].id);
        newElement.id = "card_"+recipeNumber; newElement.className = "card blue-hover small-card";

        // CARD IMAGE
        var cardImage = document.createElement('img');
        cardImage.src = "assets/recipes/"+recipes[recipeNumber].image; 
        cardImage.className = "card-img-top";
        newElement.appendChild(cardImage);

        var cardBody = document.createElement('div'); 
        cardBody.className = "card-body";

        // CARD TITLE
        var cardTitle = document.createElement('h5'); 
        cardTitle.className = "card-title unselectable";
        $(cardTitle).html(recipes[recipeNumber].recipe_name);
        cardBody.appendChild(cardTitle);

        // CARD SUMMARY
        var cardText = document.createElement('p'); 
        cardText.className = "card-text d-none";
        cardText.innerHTML = recipes[recipeNumber].summary;
        cardBody.appendChild(cardText);

        // BADGES
        var badges = recipes[recipeNumber].tags;
        for (var badge in badges){
            var testBadge = document.createElement('span');
            //testBadge.onclick = function showCardsWithThisTag()  {
            //    alert("WTF");
            //}
            testBadge.className = 'badge badge-secondary unselectable';
            testBadge.innerHTML = badges[badge];
            testBadge.style.background = tagColors[badges[badge]];
            cardBody.appendChild(testBadge);
        }

        newElement.appendChild(cardBody);

        $("#cardholder").append(newElement);
    }

    // TAG BUTTON CREATION
    function createButtons() {
        // "ALL" Button
        var newButton = document.createElement('button');
        newButton.type = "button";
        newButton.className = "btn btn-secondary btn-sm tag-button";
        newButton.innerHTML = "All";
        newButton.style.background = "lightgray";

        newButton.addEventListener("click", function () {
            $(".small-card").show();
        });

        document.getElementById("buttonholder").appendChild(newButton);
        // TAG Buttons
        tagButtonNames.sort();
        for (var name in tagButtonNames) {
            var newButton = document.createElement('button');
            newButton.type = "button";
            newButton.className = "btn btn-secondary btn-sm tag-button";
            newButton.innerHTML = tagButtonNames[name];
            newButton.style.background = tagColors[tagButtonNames[name]];

            newButton.addEventListener("click", function () {
                $btnTxt =this.innerText;
                $(".small-card").hide();
                $("span.badge").filter(function () {
                    return this.innerHTML == $btnTxt;
                }).parents(".card").show();
            });

            document.getElementById("buttonholder").appendChild(newButton);
        }
    }
    createButtons();

    /*
    // CLOSE LARGE CARD
    function closeLargeCard(){ 
        noSleep.disable();
        document.getElementById("large-card").style.display = "none"; 
        document.getElementById("close-large-card-layer").style.display = "none"; 
    }
    // attach to X BUTTON
    document.getElementsByClassName("x-button")[0].onclick = function() { closeLargeCard() };
    // attach to "CLICK OUTSIDE TO CLOSE" LAYER
    document.getElementById("close-large-card-layer").onclick = function() { closeLargeCard() };

    document.getElementsByClassName("tag-filter-toggle-btn")[0].onclick = function() { 
        $("#buttonholder").toggle();
     };
*/


    // LIGHT / DARK MODE
    var darkMode = true;
    function toggleLightMode() {
        if (darkMode == true) {
            document.documentElement.style
                .setProperty('--primary-color', 'var(--light-primary)');
            document.documentElement.style
                .setProperty('--secondary-color', 'var(--light-secondary)');
            document.documentElement.style
                .setProperty('--tertiary-color', 'var(--light-tertiary)');
            document.documentElement.style
                .setProperty('--text-color', 'var(--light-text)');
            document.documentElement.style
                .setProperty('--card-highlight', 'var(--light-card-highlight)');
            document.getElementsByClassName("light-mode-button")[0].className = "fa fa-moon-o fa-lg light-mode-button header-icon";
            darkMode = false;
        }
        else if (darkMode == false) {
            document.documentElement.style
                .setProperty('--primary-color', 'var(--dark-primary)');
            document.documentElement.style
                .setProperty('--secondary-color', 'var(--dark-secondary)');
            document.documentElement.style
                .setProperty('--tertiary-color', 'var(--dark-tertiary)');
            document.documentElement.style
                .setProperty('--text-color', 'var(--dark-text)');
            document.documentElement.style
                .setProperty('--card-highlight', 'var(--dark-card-highlight)');
            document.getElementsByClassName("light-mode-button")[0].className = "fa fa-sun fa-lg light-mode-button header-icon";
            darkMode = true;
        }
    }
    // attach to SUN BUTTON
    document.getElementsByClassName("light-mode-button")[0].onclick = function() { toggleLightMode() };

    // HIDE LOADING SPINNER (this goes last)
    document.getElementById("loading-spinner").style.display = "none";
}
