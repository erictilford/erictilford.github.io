// Get the recipe ID from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const recipeId = urlParams.get('id');

// Get the specific recipe from the array
const recipe = recipes.find(recipe => recipe.id === recipeId);

// Check if the recipe exists and display it
if (recipe) {

    // Enable noSleep (screen lock)
    var noSleep = new NoSleep();
    noSleep.enable();

    // Update page contents
    document.title = recipe.recipe_name + " - Recipe Book";
    $(".recipe-title").html(recipe.recipe_name);
    $(".summary").html(recipe.summary);
    $(".large-card-card-image").attr("src","./assets/recipes/"+recipe.images[0]);

    $(".hands-on-time").html("Hands-on time: " + M2HM(recipe.hands_on_time));
    $(".total-time").html("Total time: " + M2HM(recipe.total_time));
    $(".servings").html("Serves: " + recipe.serves);

    recipe.tags.forEach(badge => {
        if (badge !== undefined){ // no idea why this is happening
            var testBadge = document.createElement('span');
            testBadge.className = 'badge badge-secondary unselectable';
            testBadge.innerHTML = badge;
            testBadge.style.background = tagColors[badge];
            $(".large-card-badges").append(testBadge);
        }
    });

    recipe.images.forEach(img => {
        var imageAnchor = document.createElement('a');
        imageAnchor.href = "./assets/recipes/" + img;
        imageAnchor.target = "_blank";
        $(".large-card-image-frame").append(imageAnchor);
        var recipeThumb = document.createElement('img');
        recipeThumb.src = "./assets/recipes/" + img;
        recipeThumb.className = "recipe-thumb";
        imageAnchor.appendChild(recipeThumb);
    });

    recipe.ingredients.forEach(ingredient => {
        var listItem = document.createElement('li');
        if (ingredient.startsWith("!")) {
            listItem.innerHTML = ingredient.slice(1).trim();
            $(listItem).attr("style", "list-style:none; font-size:large; margin-left:-20px; padding-top:5px");
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