// Get the recipe ID from the URL query parameter

const urlParams = new URLSearchParams(window.location.search);
const recipeId = urlParams.get('id');

// Get the specific recipe from the array
const recipe = recipes[recipeId];

var noSleep = new NoSleep();

// Check if the recipe exists and display it
if (recipe) {

    noSleep.enable();

    //$("*").hide();
    document.title = recipe.recipe_name + " - Recipe Book";
    $(".recipe-title").html(recipe.recipe_name);
    $(".summary").html(recipe.summary);
    $(".large-card-card-image").attr("src","./assets/recipes/"+recipe.image);

    $(".hands-on-time").html("Hands-on time: " + M2HM(recipe.hands_on_time));
    $(".total-time").html("Total time: " + M2HM(recipe.total_time));
    $(".servings").html("Serves: " + recipe.serves);

    recipe.ingredients.forEach(ingredient => {
        var listItem = document.createElement('li');
        if (ingredient.startsWith("!")) {
            listItem.innerHTML = ingredient.slice(1).trim();
            $(listItem).attr("style", "list-style:none; font-size:large; margin-left:-20px; padding-top:5px");
            //console.log(ingredient);
        } else { listItem.innerHTML = ingredient; }
        $(".ingredient-list").append(listItem);
    });

    recipe.directions.forEach(direction => {
        var listItem = document.createElement('li');
        listItem.innerHTML = direction;
         $(".direction-list").append(listItem);
    });

    recipe.notes.forEach(note => {
        var listItem = document.createElement('li');
        listItem.innerHTML = note;
         $(".note-list").append(listItem);
    });
        
    /*
    for (var ingredient in recipe.ingredients) {
        var listItem = document.createElement('li');
        listItem.innerText = ingredient;
         $(".ingredient-list").append(listItem);
    }
    */

    /*
    const recipeContainer = document.getElementById('recipe-container');
    recipeContainer.innerHTML = `
        <h2>${recipe.recipe_name}</h2>
        <img src="${recipe.image}" alt="${recipe.recipe_name}" />
        <p><strong>Summary:</strong> ${recipe.summary}</p>
        <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
        <p><strong>Directions:</strong> ${recipe.directions}</p>
        <p><strong>Notes:</strong> ${recipe.notes}</p>
        <p><strong>Tags:</strong> ${recipe.tags}</p>
        <p><strong>Hands-on Time:</strong> ${recipe.hands_on_time}</p>
        <p><strong>Total Time:</strong> ${recipe.total_time}</p>
        <p><strong>Serves:</strong> ${recipe.serves}</p>
        <p><strong>Contributor:</strong> ${recipe.contributor}</p>
        <p><strong>Date Added:</strong> ${recipe.date_added}</p>
    `;
    */
} else {
    document.title = "Recipe Not Found - Recipe Book";
    $("#recipe").hide();
    $(".container").html("<h1 style='color:white; text-align:center'>Recipe not found.</h1>");
    //document.getElementById('recipe-container').innerHTML = '<p>Recipe not found.</p>';
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