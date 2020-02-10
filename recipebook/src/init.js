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
        "Vegetarian" : "#228B22",
        "Italian" : "#8B0000",
        "Meat" : "#bd2130",
        "Japanese" : "#117a8b",
        "Fish" : "#0062cc",
        "Tex-Mex" : "#ca7c08",
        "Fast Food" : "#495057",
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
            handsOnTime.innerHTML = "Hands-on time: " + handsOnPretty;

            var totalTime = document.getElementsByClassName("total-time")[0];
            var totalPretty = M2HM( this.getElementsByClassName("card-total-time")[0].innerHTML );
            totalTime.innerHTML = "Total time: " + totalPretty;

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

}
