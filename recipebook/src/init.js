var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1kHpjMZl3TVcLbt_eNIu0k77wfSInQFHScgt5vDm51TE/edit?usp=sharing';

function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                    callback: showInfo,
                    simpleSheet: true } );
}

window.addEventListener('DOMContentLoaded', init);

function showInfo(data) {

    var tagButtonNames = [];

    // TAG/BADGE COLORS
    var tagColors = {
        "Sides" : "#81ccc8",
        "BBQ" : "#c99393",
        "Thai" : "#83dec4",
        "Vegetarian" : "#228B22",
        "Italian" : "#8B0000",
        "Dinner" : "#f2a68f",
        "Japanese" : "#117a8b",
        "Fish" : "#0062cc",
        "Tex-Mex" : "#ca7c08",
        "Fast Food" : "#495057",
        "Dessert" : "#ebb7c3",
        "Chinese" : "#dc3545"
    };

    // ROW ITERATION
    for (var recipeNumber in data) {

        // TAG GENERATION
        var tags = data[recipeNumber].tags.split("; ");
        for (var tag in tags){
            if (!tagButtonNames.includes(tags[tag])){
                tagButtonNames.push(tags[tag]);
            }
        }

        // C A R D S
        var newElement = document.createElement('div');
        newElement.id = "card_"+recipeNumber; newElement.className = "card blue-hover";

        // LARGE CARD
        newElement.onclick = function openlargeCard()
        { 
            document.getElementById("large-card").style.display = "block";

            var recipeTitle = document.getElementsByClassName("recipe-title")[0];
            recipeTitle.innerHTML = this.getElementsByClassName("card-title")[0].innerHTML;

            var recipeSummary = document.getElementsByClassName("summary")[0];
            recipeSummary.innerHTML = this.getElementsByClassName("card-text")[0].innerHTML;

            // Minutes to Hours/Minutes
            function M2HM(mins) {
                var s = "";
                var hours = Math.floor(mins / 60);
                if (hours == 1) {
                    s += "1 Hour ";
                } else if (hours >= 2) {
                    s += hours + " Hours";
                }
                var minutes = mins % 60;
                if (minutes == 1) {
                    s += "1 Minute ";
                } else if (minutes >= 2) {
                    s += minutes + " Minutes";
                }
                return s;
            }

            var handsOnTime = document.getElementsByClassName("hands-on-time")[0];
            var handsOnPretty = M2HM( this.getElementsByClassName("card-hands-on-time")[0].innerHTML );
            handsOnTime.innerHTML = "<b>Hands-on time:</b> " + handsOnPretty;

            var totalTime = document.getElementsByClassName("total-time")[0];
            var totalPretty = M2HM( this.getElementsByClassName("card-total-time")[0].innerHTML );
            totalTime.innerHTML = "<b>Total time:</b> " + totalPretty;

            var servings = document.getElementsByClassName("servings")[0];
            servings.innerHTML = "<b>Serves:</b> " + this.getElementsByClassName("card-servings")[0].innerHTML;

            var ingredientList = document.getElementsByClassName("ingredient-list")[0];
            ingredientList.innerHTML = "";
            ingredientArray = this.getElementsByClassName("card-ingredients")[0].innerHTML.split("; ");

            for (var y in ingredientArray) {
                var ingredient = document.createElement('li');
                ingredient.innerText = ingredientArray[y];
                ingredientList.appendChild(ingredient);
            }

            var directionList = document.getElementsByClassName("direction-list")[0];
            directionList.innerHTML = "";
            directionArray = this.getElementsByClassName("card-directions")[0].innerHTML.split("; ");

            for (var z in directionArray) {
                var direction = document.createElement('li');
                direction.innerText = directionArray[z];
                directionList.appendChild(direction);
            }

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
        cardImage.src = "assets/recipes/"+data[recipeNumber].image; 
        cardImage.className = "card-img-top";
        newElement.appendChild(cardImage);

        var cardBody = document.createElement('div'); 
        cardBody.className = "card-body";

        var cardTitle = document.createElement('h5'); 
        cardTitle.className = "card-title";
        cardTitle.innerHTML = data[recipeNumber].recipe_name;
        cardBody.appendChild(cardTitle);

        var cardText = document.createElement('p'); 
        cardText.className = "card-text";
        cardText.innerHTML = data[recipeNumber].summary;
        cardBody.appendChild(cardText);

        // BADGES
        var badges = data[recipeNumber].tags.split("; ");
        for (badge in badges){
            var testBadge = document.createElement('span');
            testBadge.className = 'badge badge-secondary';
            testBadge.innerHTML = badges[badge];
            testBadge.style.background = tagColors[badges[badge]];
            cardBody.appendChild(testBadge);
        }

        newElement.appendChild(cardBody);

        // ADDING HIDDEN INFO
        
        // hands-on time
        var handsOnTime = document.createElement('div');
        handsOnTime.className = "card-hands-on-time d-none";
        handsOnTime.innerHTML = data[recipeNumber].hands_on_time;
        newElement.appendChild(handsOnTime);

        // total time
        var totalTime = document.createElement('div');
        totalTime.className = "card-total-time d-none";
        totalTime.innerHTML = data[recipeNumber].total_time;
        newElement.appendChild(totalTime);

        // servings
        var cardServings = document.createElement('div');
        cardServings.className = "card-servings d-none";
        cardServings.innerHTML = data[recipeNumber].serves;
        newElement.appendChild(cardServings);
        
        // ingredient list
        var cardIngredients = document.createElement('div'); 
        cardIngredients.className = "card-ingredients d-none";
        cardIngredients.innerHTML = data[recipeNumber].ingredients;
        newElement.appendChild(cardIngredients);

        // direction list
        var cardDirections = document.createElement('div');
        cardDirections.className = "card-directions d-none";
        cardDirections.innerHTML = data[recipeNumber].directions;
        newElement.appendChild(cardDirections);

        // notes list
        var cardNotes = document.createElement('div');
        cardNotes.className = "card-notes d-none";
        cardNotes.innerHTML = data[recipeNumber].notes;
        newElement.appendChild(cardNotes);

        document.getElementById("cardholder").appendChild(newElement);
    }

    // BUTTON CREATION
    function createButtons() {
        for (var name in tagButtonNames) {
            var newButton = document.createElement('button');
            newButton.type = "button";
            newButton.className = "btn btn-secondary btn-sm";
            newButton.innerHTML = tagButtonNames[name];
            newButton.style.background = tagColors[tagButtonNames[name]];
            document.getElementById("buttonholder").appendChild(newButton);
            }
        }
    //createButtons();

    // CLOSE LARGE CARD
    function closeLargeCard(){ document.getElementById("large-card").style.display = "none"; }
    // attach to X BUTTON
    document.getElementsByClassName("x-button")[0].onclick = function() { closeLargeCard() };
    // attach to "CLICK OUTSIDE TO CLOSE" LAYER
    document.getElementById("close-large-card-layer").onclick = function() { closeLargeCard() };

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
