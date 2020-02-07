var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1kHpjMZl3TVcLbt_eNIu0k77wfSInQFHScgt5vDm51TE/edit?usp=sharing';

function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                    callback: showInfo,
                    simpleSheet: true } );
}

window.addEventListener('DOMContentLoaded', init)

function showInfo(data) {

    console.log(data);
    console.log("Successfully processed " + data.length + " rows!");

    var names = "<b>Found in File:</b> ";

    for (var x in data) {

        names += data[x].recipe_name;
        if (x < data.length - 1) { names += ", "; }

        var newElement = document.createElement('div');
        newElement.id = "card_"+x; newElement.className = "card blue-hover";
        newElement.onclick = function() 
        { 
            document.getElementById("large-card").style.display = "block";
            var s = "<h5>Ingredients:</h5><ul>";

            ingredientArray = this.getElementsByClassName("card-ingredients")[0].innerHTML.split(", ");

            for (var y in ingredientArray) {
                console.log(ingredientArray[y]);
                s += "<li>" + ingredientArray[y] + "</li>";
            }
            s += "</ul>"

            document.getElementsByClassName("ingredients")[0].innerHTML = s;
        }

        var cardImage = document.createElement('img');
        cardImage.src = "assets/recipes/"+data[x].image; 
        cardImage.className = "card-img-top";
        newElement.appendChild(cardImage);

        var cardBody = document.createElement('div'); 
        cardBody.className = "card-body";

        var cardTitle = document.createElement('h5'); 
        cardTitle.className = "card-title";
        cardTitle.innerHTML = data[x].recipe_name;
        cardBody.appendChild(cardTitle);

        var cardText = document.createElement('p'); 
        cardText.className = "card-text";
        cardText.innerHTML = data[x].summary;
        cardBody.appendChild(cardText);

        newElement.appendChild(cardBody);

        var cardIngredients = document.createElement('div'); 
        cardIngredients.className = "card-ingredients";
        cardIngredients.innerHTML = data[x].ingredients; 
        cardIngredients.style.display = "none";
        newElement.appendChild(cardIngredients);

        document.getElementById("cardholder").appendChild(newElement);


    }

    document.getElementById("names").innerHTML = names;

    document.getElementsByClassName("x-button")[0].onclick = function() {
        document.getElementById("large-card").style.display = "none";
    }




}


document.write("<span class='wrapp'>The published spreadsheet is located at <a target='_new' href='" + public_spreadsheet_url + "'>" + public_spreadsheet_url + "</a></span>");
