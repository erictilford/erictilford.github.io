var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1kHpjMZl3TVcLbt_eNIu0k77wfSInQFHScgt5vDm51TE/edit?usp=sharing';

function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                    callback: showInfo,
                    simpleSheet: true } );
}

window.addEventListener('DOMContentLoaded', init);

function showInfo(data) {

    //console.log(data);
    //console.log("Successfully processed " + data.length + " rows!");

    var tagButtonNames = [];

    // ROW ITERATION
    for (var recipeNumber in data) {

        // TAG GENERATION //
        var tags = data[recipeNumber].tags.split("; ");
        for (var tag in tags){
            if (!tagButtonNames.includes(tags[tag])){
                tagButtonNames.push(tags[tag]);
            }
        }

        // CARDS //
        var newElement = document.createElement('div');
        newElement.id = "card_"+recipeNumber; newElement.className = "card blue-hover";

        newElement.onclick = function openlargeCard()
        { 
            document.getElementById("large-card").style.display = "block";

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

            for (var y in directionArray) {
                var direction = document.createElement('li');
                direction.innerText = directionArray[y];
                directionList.appendChild(direction);
            }
        }

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

        var tags = data[recipeNumber].tags.split("; ");
        for (var tag in tags){
            //console.log(tags[tag]);
            var testBadge = document.createElement('span');
            testBadge.className = 'badge badge-secondary';
            testBadge.innerHTML = tags[tag];
            cardBody.appendChild(testBadge);
        }

        newElement.appendChild(cardBody);

        // adding hidden ingredient list
        var cardIngredients = document.createElement('div'); 
        cardIngredients.className = "card-ingredients";
        cardIngredients.innerHTML = data[recipeNumber].ingredients; 
        cardIngredients.style.display = "none";
        newElement.appendChild(cardIngredients);

        // adding hidden direction list
        var cardDirections = document.createElement('div');
        cardDirections.className = "card-directions";
        cardDirections.innerHTML = data[recipeNumber].directions;
        cardDirections.style.display = "none";
        newElement.appendChild(cardDirections);

        document.getElementById("cardholder").appendChild(newElement);
        
    }

    // Creating the Buttons
    for (var name in tagButtonNames) {
        var newButton = document.createElement('button');
        newButton.type = "button";
        newButton.className = "btn btn-secondary btn-sm";
        newButton.innerHTML = tagButtonNames[name];

        document.getElementById("buttonholder").appendChild(newButton);
    }

    // X BUTTON
    document.getElementsByClassName("x-button")[0].onclick = function closeLargeCard(){
        document.getElementById("large-card").style.display = "none";
    }

    // Creating the layer which closes the large card when you click "outside" it.
    var closeLargeCardLayer = document.createElement('div');
    closeLargeCardLayer.id = 'close-large-card-layer';
    closeLargeCardLayer.onclick = function() {
        document.getElementById("large-card").style.display = "none";
    }
    document.body.appendChild(closeLargeCardLayer);
}

//document.write("<span class='wrapp'>The published spreadsheet is located at <a target='_new' href='" + public_spreadsheet_url + "'>" + public_spreadsheet_url + "</a></span>");
