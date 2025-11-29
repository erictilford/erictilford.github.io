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
        cardImage.src = "assets/recipes/thumbnails/" + recipes[recipeNumber].images[0];
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
        document.getElementsByClassName("tag-filter-toggle-btn")[0].onclick = function() { 
            $("#buttonholder").toggle();
        };
    }
    createButtons();

    // HIDE LOADING SPINNER (this goes last)
    document.getElementById("loading-spinner").style.display = "none";
}
