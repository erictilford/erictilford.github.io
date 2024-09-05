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
    $(".recipe-title").html(recipe.recipe_name);
    $(".summary").html(recipe.summary);
    $(".large-card-card-image").attr("src","./assets/recipes/"+recipe.image);
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
    $("#recipe").hide();
    $(".container").html("<h1 style='color:white; text-align:center'>Recipe not found.</h1>");
    //document.getElementById('recipe-container').innerHTML = '<p>Recipe not found.</p>';
}
