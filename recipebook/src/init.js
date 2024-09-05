//var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1kHpjMZl3TVcLbt_eNIu0k77wfSInQFHScgt5vDm51TE/edit?usp=sharing';
/*
function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                    callback: showInfo,
                    simpleSheet: true } );
}
*/

/*
function init() {
    Papa.parse(public_spreadsheet_url, {
      download: true,
      header: true,
      complete: function(results) {
        var recipes = results.recipes
        console.log(recipes)
      }
    })
  }
*/

window.addEventListener('DOMContentLoaded', showInfo);

function showInfo(results) {

    var noSleep = new NoSleep();

    var tagButtonNames = [];

    // TAG/BADGE COLORS
    var tagColors = {
        "Appetizer" : "#d4b5ff",
        "Party" : "#81ccc8",
        "Sauce" : "#d4b5ff",
        "Sides" : "#81ccc8",
        "BBQ" : "#c99393",
        "Thai" : "#83dec4",
        "Dessert" : "#ebb7c3",
        "Dinner" : "#f2a68f",
        "Holiday" : "#7dc991",
        "Japanese" : "#1594a8",
        "Baking" : "#e0db90",
        "Italian" : "#c99393",
        "Tex-Mex" : "#ffc14f",
        "Seafood" : "#81b0e3",
        "Guides" : "#bbbbbb",
        "Breakfast" : "#ffe3a5",
        // OLD
        "Vegetarian" : "#228B22",
        "Fast Food" : "#495057",
        "Chinese" : "#dc3545"
    };

    // ROW ITERATION
    for (var recipeNumber in recipes) {

        // TAG BUTTON GENERATION
        var tags = recipes[recipeNumber].tags.split("; ");
        for (var tag in tags){
            if (!tagButtonNames.includes(tags[tag])){
                tagButtonNames.push(tags[tag]);
            }
        }

        // C A R D S
        var newElement = document.createElement('div');
        newElement.id = "card_"+recipeNumber; newElement.className = "card blue-hover small-card";

        // LARGE CARD
        newElement.onclick = function openlargeCard()
        { 
            noSleep.enable();

            document.getElementById("close-large-card-layer").style.display = "block";
            document.getElementById("large-card").style.display = "block";
            // scroll to top
            document.getElementsByClassName("full-page")[0].scrollTop = 0;

            // recipe title
            var recipeTitle = document.getElementsByClassName("recipe-title")[0];
            recipeTitle.innerHTML = this.getElementsByClassName("card-title")[0].innerHTML;

            // recipe summary
            var recipeSummary = document.getElementsByClassName("summary")[0];
            recipeSummary.innerHTML = this.getElementsByClassName("card-text")[0].innerHTML;

            // large card badges
            var largeCardBadges = document.getElementsByClassName("large-card-badges")[0];
            largeCardBadges.innerHTML = "";
            var largeCardBadgeArray = this.getElementsByClassName("badge");
            
            for (var x in largeCardBadgeArray) {
                badgeName = largeCardBadgeArray[x].innerHTML;
                if (badgeName !== undefined){ // no idea why this is happening
                    var testBadge = document.createElement('span');
                    testBadge.className = 'badge badge-secondary unselectable';
                    testBadge.innerHTML = badgeName;
                    testBadge.style.background = tagColors[badgeName];
                    largeCardBadges.appendChild(testBadge);
                }
            }

            // Minutes to Hours/Minutes
            function M2HM(mins) {
                var s = "";
                var hours = Math.floor(mins / 60);
                if (hours == 1) {
                    s += "1 Hour ";
                } else if (hours >= 2) {
                    s += hours + " Hours ";
                }
                var minutes = mins % 60;
                if (minutes == 1) {
                    s += "1 Minute ";
                } else if (minutes >= 2) {
                    s += minutes + " Minutes";
                }
                return s;
            }
            
            // "photo" section
            var imageFrame = document.getElementsByClassName("large-card-image-frame")[0];
            imageFrame.innerHTML = "";
            //add for loop for multiple images here
            var imageAnchor = document.createElement('a');
            imageAnchor.href = this.getElementsByClassName("card-img-top")[0].src;
            imageAnchor.target = "_blank";
            imageFrame.appendChild(imageAnchor);
            var recipeThumb = document.createElement('img');
            recipeThumb.src = this.getElementsByClassName("card-img-top")[0].src;
            recipeThumb.className = "recipe-thumb";
            imageAnchor.appendChild(recipeThumb);

            // title background image
            var largeImage = document.getElementsByClassName("large-card-card-image")[0];
            largeImage.src = this.getElementsByClassName("card-img-top")[0].src;

            // hands-on time
            var handsOnTime = document.getElementsByClassName("hands-on-time")[0];
            var handsOnPretty = M2HM( this.getElementsByClassName("card-hands-on-time")[0].innerHTML );
            handsOnTime.innerHTML = "<b>Hands-on time:</b> " + handsOnPretty;
            // total time
            var totalTime = document.getElementsByClassName("total-time")[0];
            var totalPretty = M2HM( this.getElementsByClassName("card-total-time")[0].innerHTML );
            totalTime.innerHTML = "<b>Total time:</b> " + totalPretty;
            // servings
            var servings = document.getElementsByClassName("servings")[0];
            servings.innerHTML = "<b>Serves:</b> " + this.getElementsByClassName("card-servings")[0].innerHTML;

            // ingredients
            var ingredientList = document.getElementsByClassName("ingredient-list")[0];
            ingredientList.innerHTML = "";
            ingredientArray = this.getElementsByClassName("card-ingredients")[0].innerHTML.split("; ");

            for (var y in ingredientArray) {
                var ingredient = document.createElement('li');
                ingredient.innerText = ingredientArray[y];
                ingredientList.appendChild(ingredient);
            }

            // directions
            var directionList = document.getElementsByClassName("direction-list")[0];
            directionList.innerHTML = "";
            directionArray = this.getElementsByClassName("card-directions")[0].innerHTML.split("; ");

            for (var z in directionArray) {
                var direction = document.createElement('li');
                direction.innerText = directionArray[z];
                directionList.appendChild(direction);
            }

            // notes
            var noteList = document.getElementsByClassName("note-list")[0];
            noteList.innerHTML = "";
            noteArray = this.getElementsByClassName("card-notes")[0].innerHTML.split("; ");

            for (var z in noteArray) {
                var note = document.createElement('li');
                note.innerText = noteArray[z];
                noteList.appendChild(note);
            }
        }

        // CARD CONTENT
        var cardImage = document.createElement('img');
        cardImage.src = "assets/recipes/"+recipes[recipeNumber].image; 
        cardImage.className = "card-img-top";
        newElement.appendChild(cardImage);

        // card body
        var cardBody = document.createElement('div'); 
        cardBody.className = "card-body";

        // card title AKA recipe name
        var cardTitle = document.createElement('h5'); 
        cardTitle.className = "card-title unselectable";
        cardTitle.innerHTML = recipes[recipeNumber].recipe_name;
        cardBody.appendChild(cardTitle);

        // card text AKA summary
        var cardText = document.createElement('p'); 
        cardText.className = "card-text d-none";
        cardText.innerHTML = recipes[recipeNumber].summary;
        cardBody.appendChild(cardText);

        // BADGES
        var badges = recipes[recipeNumber].tags.split("; ");
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

        // ADDING HIDDEN INFO
        
        // hands-on time
        var handsOnTime = document.createElement('div');
        handsOnTime.className = "card-hands-on-time d-none";
        handsOnTime.innerHTML = recipes[recipeNumber].hands_on_time;
        newElement.appendChild(handsOnTime);

        // total time
        var totalTime = document.createElement('div');
        totalTime.className = "card-total-time d-none";
        totalTime.innerHTML = recipes[recipeNumber].total_time;
        newElement.appendChild(totalTime);

        // servings
        var cardServings = document.createElement('div');
        cardServings.className = "card-servings d-none";
        cardServings.innerHTML = recipes[recipeNumber].serves;
        newElement.appendChild(cardServings);
        
        // ingredient list
        var cardIngredients = document.createElement('div'); 
        cardIngredients.className = "card-ingredients d-none";
        cardIngredients.innerHTML = recipes[recipeNumber].ingredients;
        newElement.appendChild(cardIngredients);

        // direction list
        var cardDirections = document.createElement('div');
        cardDirections.className = "card-directions d-none";
        cardDirections.innerHTML = recipes[recipeNumber].directions;
        newElement.appendChild(cardDirections);

        // notes list
        var cardNotes = document.createElement('div');
        cardNotes.className = "card-notes d-none";
        cardNotes.innerHTML = recipes[recipeNumber].notes;
        newElement.appendChild(cardNotes);

        document.getElementById("cardholder").appendChild(newElement);
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
            //document.documentElement.style
            //    .setProperty('--shadow-filter', 'var(--light-filter)');
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
            //document.documentElement.style
            //    .setProperty('--shadow-filter', 'var(--dark-filter)');
            document.getElementsByClassName("light-mode-button")[0].className = "fa fa-sun fa-lg light-mode-button header-icon";
            darkMode = true;
        }
    }
    // attach to SUN BUTTON
    document.getElementsByClassName("light-mode-button")[0].onclick = function() { toggleLightMode() };

    // HIDE LOADING SPINNER (this goes last)
    document.getElementById("loading-spinner").style.display = "none";
}
