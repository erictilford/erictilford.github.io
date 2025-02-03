// TAG/BADGE COLORS
var tagColors = {
    "Appetizer": "#d4b5ff",
    "Party": "#81ccc8",
    "Sauce": "#d4b5ff",
    "Sides": "#81ccc8",
    "BBQ": "#c99393",
    "Thai": "#83dec4",
    "Dessert": "#ebb7c3",
    "Dinner": "#f2a68f",
    "Holiday": "#7dc991",
    "Japanese": "#1594a8",
    "Baking": "#e0db90",
    "Italian": "#c99393",
    "Tex-Mex": "#ffc14f",
    "Seafood": "#81b0e3",
    "Guides": "#bbbbbb",
    "Breakfast": "#ffe3a5",
    // OLD
    "Vegetarian": "#228B22",
    "Fast Food": "#495057",
    "Chinese": "#dc3545"
};

// RECIPES
var recipes = [
    /*
    {
        "recipe_name": "",
        "summary": "",
        "ingredients": [
            ""
        ],
        "directions": [
            ""
        ],
        "notes": [
            ""
        ],
        "tags": [""],
        "hands_on_time": "",
        "total_time": "",
        "date_added": "",
        "contributor": "Eric Tilford",
        "serves": "",
        "images": [""],
        "id": ""
    },
    */
    {
        "recipe_name": "Sloppy Joes",
        "summary": 'More formally known as "Untidy Josephs".',
        "ingredients": [
            "1 lb. ground beef",
            "1 small onion, finely chopped",
            "1&frac12; green bell pepper, chopped",
            "2 cloves garlic, minced",
            "1 cup tomato sauce",
            "&frac14; cup ketchup",
            "1 Tbs brown sugar",
            "1 tsp Worcestershire sauce",
            "1 tsp mustard (optional)",
            "1/2 tsp salt",
            "1/4 tsp black pepper",
            "Hamburger buns"
        ],
        "directions": [
            "Brown the ground beef in a non-stick skillet over medium heat until excess liquid evaporates.",
            "Add the onion, bell pepper, and garlic to skillet, cooking until softened, ~5 minutes.",
            "Stir in the remaining ingredients* and let the mixture simmer for 10-15 minutes, stirring occasionally.",
            "Serve Sloppy Joes on hamburger buns and enjoy."
        ],
        "notes": [
            "*Don't stir in the hamburger buns.",
            "Try adding cheese or pickles!"
        ],
        "tags": ["Dinner"],
        "hands_on_time": "45",
        "total_time": "45",
        "date_added": "2/2/2025",
        "contributor": "Eric Tilford",
        "source": "ChatGPT",
        "serves": "6-8 servings",
        "images": ["sloppyjoes.jpg"],
        "id": "sloppy-joes"
    },
    {
        "recipe_name": "Broccoli Cheddar Chicken Casserole",
        "summary": "A casserole for the soul.",
        "ingredients": [
            "1 lb. boneless chicken breast, chopped*",
            "1 yellow onion, chopped",
            "3 carrots, chopped",
            "3 cups broccoli florets, roughly chopped",
            "1&frac12; cups jasmine rice",
            "&frac12; cup dry orzo pasta",
            "3&frac12; cups low sodium chicken broth*",
            "&frac12; cup whole milk",
            "1&frac12; cups shredded sharp cheddar cheese, divided*",
            "1 Tbs avocado oil",
            "2 Tbs salted butter",
            "2 Tbs fresh thyme, plus more for topping",
            "2 bay leaves",
            "&frac12; tsp garlic powder",
            "&frac12; tsp cayenne pepper*",
            "zest of &frac12; lemon",
            "salt and pepper"
        ],
        "directions": [
            "Preheat oven to 425&deg;F.",
            "Heat oil in a large pot over medium heat.",
            "Add onion and carrot and cook until fragrant, about 5 minutes.",
            "Add the chicken, season with salt and pepper, stir, and cook until chicken is seared, about 2-3 minutes.",
            "Add the butter, rice, orzo, and thyme, and cook until golden and toasted, 2-3 minutes.",
            "Add the broth and bring to a boil over high heat.",
            "Add the broccoli, bay leaves, garlic powder, cayenne, and a large pinch of both salt and pepper.",
            "Bring to a boil, cover, and reduce heat to low.",
            "Cook covered for 20-25 minutes, until the rice is mostly cooked.",
            "Once the rice is cooked, remove bay leaves and stir in the lemon zest, milk, and &frac12; cup of cheese.",
            "If needed, transfer the mixture to an oven-safe casserole dish.",
            "Top the casserole with the remaining cheese.",
            "Transfer to oven and bake for 15-20 minutes, until the cheese is melted and starting to brown.",
            "Finish with remaining fresh thyme, allow to cool, and serve."
        ],
        "notes": [
            "Although the spice level is mild, you may want to omit the cayenne pepper if cooking for kids.",
            "We think a sharp <i>white</i> cheddar looks great for this recipe.",
            "To make ahead or freeze: instead of baking, let cool, cover, and refrigerate for up to 2 days or freeze for up to 3 months.",
            "If possible, use a rotisserie chicken to make homemade broth and pulled chicken."
        ],
        "tags": ["Dinner"],
        "hands_on_time": "20",
        "total_time": "60",
        "date_added": "9/10/2024",
        "contributor": "Amber Tilford",
        "source": "Half-Baked Harvest",
        "serves": "6-8 servings",
        "images": ["casserole.jpg"],
        "id": "broccoli-cheddar-chicken-casserole"
    },
    {
        "recipe_name": "Cinnamon Swirl Coffee Cake",
        "summary": "Rich, buttery coffee cake with a sweet spiced walnut swirl",
        "ingredients": [
            "2&frac13; cups AP flour, spooned and leveled",
            "2 cups granulated sugar",
            "2 sticks (1 cup) room temp. unsalted butter",
            "3 large eggs",
            "8oz full fat sour cream",
            "1&frac12; tsp vanilla extract",
            "1 tsp salt",
            "&frac12; tsp baking soda",
            "!Cinnamon Swirl*:",
            "1+ cup chopped walnut",
            "3 Tbs light brown sugar",
            "2 tsp cinnamon",
            "2 Tbs melted butter"
        ],
        "directions": [
            "Toast walnuts on baking sheet for 10 minutes at 350&deg;F.",
            "Combine swirl ingredients and set aside.",
            "Set oven to 300&deg;F.",
            "Butter and flour Bundt cake pan, tap out excess flour.",
            "In a medium bowl, whisk flour, baking soda, and salt, and set aside.",
            "Using an electric mixer with paddle or beater attachment, combine sugar and butter, beating on medium speed until pale and fluffy (about 3 minutes).",
            "Add the eggs one at a time, beating well after each.",
            "On low speed, add the sour cream and vanilla (may look a bit curdled).",
            "Gradually add the flour mix on low speed until smooth and homogenous.",
            "Add &frac13; of the batter to the pan, then &frac12; of the swirl mixture, etc.",
            "Bake 65-75 minutes, allow to cool for 15 minutes ONLY*"
        ],
        "notes": [
            "*The brown sugar in the swirl mixture may stick to the pan, so don't overcool, and try not to bring the swirl to the edge of the pan.",
            "You may want to increase amount of swirl mixture."
        ],
        "tags": ["Dessert", "Breakfast", "Baking"],
        "hands_on_time": "30",
        "total_time": "100",
        "date_added": "9/9/2024",
        "contributor": "Eric Tilford",
        "serves": "16 slices",
        "images": ["coffeecake.jpg", "coffeecake2.jpg"],
        "id": "cinnamon-swirl-coffee-cake"
    },
    {
        "recipe_name": "Taco Seasoning",
        "summary": "Homemade seasoning blend for classic tacos",
        "ingredients": [
            "1 Tbs chili powder",
            "&frac14; tsp garlic powder",
            "&frac14; tsp onion powder",
            "&frac14; tsp dried oregano",
            "&frac14; tsp paprika",
            "1&frac12; tsp ground cumin",
            "&frac12; tsp salt",
            "1 tsp ground black pepper"
        ],
        "directions": [
            "Thoroughly mix seasoning blend with browned ground beef while cooking."
        ],
        "notes": [
            "This recipe is for 1 lb. ground beef."
        ],
        "tags": ["Tex-Mex", "Dinner"],
        "hands_on_time": "5",
        "total_time": "5",
        "date_added": "9/7/2024",
        "contributor": "Eric Tilford",
        "serves": "1 lb.",
        "images": ["taco-seasoning.jpg"],
        "id": "taco-seasoning"
    },
    {
        "recipe_name": "Chili",
        "summary": "Classic beef & bean chili recipe for pressure cooker",
        "ingredients": [
            "1 lb ground beef",
            "16oz can chili beans, drained",
            "14.5oz can diced tomato, drained",
            "1 white onion, diced, divided*",
            "1 cup chicken broth",
            "1&frac12; Tbs light brown sugar",
            "1&frac12; Tbs chili powder",
            "1 Tbs cumin",
            "1 Tbs tomato paste",
            "1 tsp coriander",
            "1 tsp paprika",
            "1 tsp garlic powder",
            "2 tsp salt",
            "1 tsp pepper"
        ],
        "directions": [
            "In pressure cooker, saut&eacute;e onion in 1 Tbs oil until translucent.",
            "Add ground beef and cook until browned.",
            "Add spices and stir thoroughly.",
            "Add broth, tomato, and beans.",
            "Pressure cook on beans/chili mode for 20 minutes."
        ],
        "notes": [
            "*Depending on the dish, you may want to reserve some diced onion to finish.", 
            "Don't want beans? Add another lb ground beef."
        ],
        "tags": ["Dinner"],
        "hands_on_time": "20",
        "total_time": "40",
        "date_added": "8/23/2024",
        "contributor": "Amber Tilford",
        "serves": "4-6 servings",
        "images": ["chili.jpg"],
        "id": "chili"
    }, {
        "recipe_name": "Pancakes",
        "summary": "Classic pancakes!",
        "ingredients": [
            "1&frac12; cups all-purpose flour",
            "3&frac12; tsp baking powder",
            "1 Tbs sugar",
            "&frac14; tsp salt",
            "1&frac14; cups milk",
            "3 Tbs butter, melted",
            "1 egg"
        ],
        "directions": [
            "Sift dry ingredients into a large bowl, and combine.",
            "In a separate bowl, combine wet ingredients.",
            "Make a well in the center of the dry mixture and add the wet mixture, mixing until smooth.",
            "Heat non-stick griddle to medium-high.",
            "Add batter in ~&frac14; cup scoops.",
            "Cook 2-3 minutes per side until golden brown."
        ],
        "notes": [
            "A pancake is the opposite of a pot pie."
        ],
        "tags": [
            "Breakfast"
        ],
        "hands_on_time": "30",
        "total_time": "30",
        "date_added": "3/19/2023",
        "contributor": "Eric Tilford",
        "serves": "2 cups mix / 8 pancakes",
        "images": ["pancakes.jpg"],
        "id": "pancakes"
    },
    {
        "recipe_name": "Baked Salmon",
        "summary": "Baked salmon with a crunchy, buttery, herby, lemony topping.",
        "ingredients": [
            "2-3 salmon filets (~1 lb)",
            "5 Tbs butter, melted",
            "1 tsp lemon zest",
            "1 Tbs lemon juice",
            "1 tsp salt / pepper",
            "&frac34; cup panko breadcrumb",
            "3 cloves garlic, minced",
            "2 Tbs fresh parsley, minced",
            "2 Tbs grated Parmesan cheese",
            "1 Tbs fresh herb of choice, minced"
        ],
        "directions": [
            "Preheat oven to 400&deg;F.",
            "In a bowl, combine panko, herbs, lemon zest, garlic, Parmesan, and 4 Tbs butter.",
            "Add salmon to an oiled, foil-lined baking sheet or casserole dish.",
            "Brush salmon with remaining butter, season with salt, pepper, and lemon juice.",
            "Top salmon with breadcrumb mixture, spreading evenly and lightly packing down.",
            "Cook 15-17 minutes or until flaky, or until internal temperature reaches 145&deg;F."
        ],
        "notes": [
            "*Fish should not be cold or excessively wet."
        ],
        "tags": [
            "Dinner",
            "Seafood"
        ],
        "hands_on_time": "25",
        "total_time": "45",
        "date_added": "3/19/2023",
        "contributor": "Eric Tilford",
        "serves": "2-3 servings",
        "images": ["baked_salmon.jpg"],
        "id": "baked-salmon"
    },
    {
        "recipe_name": "Italian Meatballs",
        "summary": "Classic Italian meatballs!",
        "ingredients": [
            "1 cup panko breadcrumb",
            "&frac13; cup milk",
            "1 lb ground beef",
            "1 lb ground pork",
            "4 cloves garlic, minced",
            "2 eggs",
            "1 cup grated Parmesan cheese",
            "&frac14; cup fresh / 2-3 tsp dried herbs (parsley, basil, oregano)",
            "&frac14; cup grated onion",
            "2 tsp Worcestershire sauce",
            "1 tsp salt / pepper",
            "&frac14; tsp crushed red pepper"
        ],
        "directions": [
            "Mix panko and milk in a bowl and set aside 5-10 minutes.",
            "In a separate large bowl, add and mix remaining ingredients, then add panko mixture and combine until mixed well.",
            "Cover bowl and chill for 30 minutes to 1 hour.",
            "Preheat oven to 425&deg;F.",
            "Form mixture into balls using a 2 Tbs scoop and arrange on a large parchment-lined baking sheet.",
            "Cover with foil and cook 12 to 14 minutes or until internal temperature reaches 160&deg;F."
        ],
        "notes": [
            "Serve with mom's spaghetti."
        ],
        "tags": [
            "Dinner",
            "Appetizer",
            "Italian"
        ],
        "hands_on_time": "45",
        "total_time": "60",
        "date_added": "3/19/2023",
        "contributor": "Amber Tilford",
        "serves": "~4 dozen meatballs",
        "images": ["meatballs.jpg"],
        "id": "meatballs"
    },
    {
        "recipe_name": "Tonkatsu",
        "summary": "Panko-breaded pork served with rice, cabbage, and a savory sauce.",
        "ingredients": [
            "Pork tenderloin fillets*",
            "&frac12; cup flour",
            "1 large egg",
            "&frac12; cup panko breadcrumbs",
            "salt and black pepper",
            "!Katsu Sauce:",
            "3 Tbs Ketchup",
            "1&frac12; Tbs Worcestershire sauce",
            "1 Tbs soy sauce",
            "1 Tbs mirin",
            "1 Tbs honey",
            "&frac12; tsp Dijon mustard",
            "!Cabbage Salad:",
            "&frac12; head cabbage, finely shredded (~1-1&frac12; quart)",
            "3 Tbs Extra virgin olive oil",
            "1 Tbs mirin",
            "1 Tbs rice vinegar",
            "1 Tbs honey",
            "1 tsp sesame oil",
            "&frac14; tsp salt and black pepper"
        ],
        "directions": [
            "Mix ingredients for salad dressing until thoroughly combined.",
            "In a large bowl, mix cabbage with dressing, and store covered in the fridge until serving.",
            "Pat pork dry and season both sides with salt and pepper.",
            "In 3 separate rimmed plates, add the flour, the egg beaten, and the panko.*",
            "Add pork to flour, coat completely and shake off excess.",
            "Transfer to egg and then panko, each time repeating the process then placing the breaded pork on a separate plate.",
            "If pan-frying: Heat oil to 350&deg;F and fry pork until golden brown, turning halfway through.*",
            "If air-frying: Preheat air fryer to 400&deg;F and cook pork 10 minutes each side.*",
            "Serve over rice with katsu sauce and cabbage salad."
        ],
        "notes": [
            "*Chicken tenderloins or thinly-sliced/pounded breast may also be used.",
            "*Season breadcrumb to taste.",
            "*Pork should reach an internal temperature of 165&deg;F."
        ],
        "tags": [
            "Dinner",
            "Japanese"
        ],
        "hands_on_time": "45",
        "total_time": "70",
        "date_added": "5/24/2022",
        "contributor": "Eric Tilford",
        "serves": "4-6 servings",
        "images": ["tonkatsu.jpg"],
        "id": "tonkatsu"
    },
    {
        "recipe_name": "Peanut Butter Protein Bites",
        "summary": "Energy balls with optional ingredients for lactation support.",
        "ingredients": [
            "2 cups rolled oats",
            "1 cup peanut butter*",
            "&frac12; cup ground flax seed",
            "1 Tbs brewer's yeast**",
            "&frac13;+ cup honey",
            "&frac18; tsp coarse salt",
            "1 Tbs avocado oil*",
            "&frac12; cup dark chocolate chips (chopped if large)"
        ],
        "directions": [
            "Add all ingredients to a large bowl, mixing until thoroughly combined.",
            "Using a tablespoon measuring spoon, scoop and shape mixture into balls.",
            "Store refrigerated in an airtight container for up to a week."
        ],
        "notes": [
            "*Crunchy, unsalted, unsweetened peanut butter is preferred.",
            "**Brewer's yeast should only be added for lactation support due to its flavor.",
            "*More avocado oil may be necessary depending on the peanut butter's oil content and the consistency of the mixture.",
            "Also known as \"boobie balls.\""
        ],
        "tags": [
            "Dessert"
        ],
        "hands_on_time": "30",
        "total_time": "30",
        "date_added": "5/22/2022",
        "contributor": "Amber Tilford",
        "serves": "20-24 bites",
        "images": ["proteinballs.jpg"],
        "id": "protein-bites"
    },
    {
        "recipe_name": "Air Fryer Buffalo Cauliflower",
        "summary": "Like Buffalo wings except with air-fried battered cauliflower.",
        "ingredients": [
            "1 large head cauliflower, cut into small-medium florets (about 4 cups)",
            "&frac12; cup AP flour*",
            "&frac12; cup water",
            "1 tsp garlic powder",
            "1 tsp paprika",
            "&frac12; tsp salt",
            "&frac14; tsp black pepper",
            "&frac12; cup Buffalo sauce*",
            "!Buffalo Sauce (&frac34; cup):",
            "4oz hot sauce",
            "&frac14; cup (&frac12; stick) melted butter"
        ],
        "directions": [
            "Wash and chop cauliflower into florets and pat dry.",
            "In a large bowl, whisk together flour, water, garlic powder, paprika, salt and pepper.",
            "Add cauliflower to mixture and toss until coated evenly.",
            "Place battered cauliflower into air fryer, cooking 10 minutes at 400°F.",
            "Place cauliflower in a large bowl and toss with Buffalo sauce.",
            "Return sauced cauliflower to air fryer, cooking another 10 minutes at 400°F.",
            "Remove from air fryer and serve with ranch or bleu cheese dressing."
        ],
        "notes": [
            "*Gluten-free 1:1 flour will work too, although more may be needed to achieve a batter-like consistency.",
            "*Buffalo Sauce is 2 parts hot sauce (traditionally Frank's Red Hot) and 1 part melted butter"
        ],
        "tags": ["Appetizer", "Party"],
        "hands_on_time": "40",
        "total_time": "60",
        "date_added": "05/22/2022",
        "contributor": "Eric Tilford",
        "serves": "8 servings",
        "images": ["buffalocauliflower.jpg"],
        "id": "buffalo-cauliflower"
    },
    {
        "recipe_name": "Water Bath Canning",
        "summary": "How to can food using the water bath method.",
        "ingredients": [
            "!(EQUIPMENT)",
            "Water bath canning pot with lid and jar rack",
            "Mason jars with new lids and bands",
            "Mason jar tongs",
            "Jar funnel, bubble popper, and lid grabber",
            "Drying rack or towel"
        ],
        "directions": [
            "Sterilize jar lids by immersing in 180-190°F water for 10 minutes (Leave lids metal side up).",
            "Fill canner to cover empty jars by at least 1\" water.",
            "Heat jars to a simmer (180°F) to prevent breakage (5-10 minutes).",
            "Remove and fill jars with desired filling, leaving ~&frac12;-&frac14;\" space.",
            "Pop bubbles against glass if present and wipe any food from rim.",
            "Attach lids, turning bands until fingertip tight.",
            "Return jars to simmering water.",
            "Heat water to a boil, cover with lid and process for recommended time (typically 10 minutes).",
            "Turn off heat, remove pot lid and let cool 5 minutes.",
            "Remove jars and place onto cooling rack or towel, and allow to cool overnight."
        ],
        "notes": [
            "Lids will pop down from the time they are removed until an hour or so - this is a sign that the processing was successful.",
            "*Our canner processes (10) 16oz or (12) 8oz Ball Mason jars."
        ],
        "tags": ["Guides"],
        "hands_on_time": "60",
        "total_time": "120",
        "date_added": "05/09/2022",
        "contributor": "Eric Tilford",
        "serves": "See notes*",
        "images": ["waterbathcanning.jpg"],
        "id": "water-bath-canning"
    },
    {
        "recipe_name": "Curry Chicken Salad",
        "summary": "A delicious Trader Joe's copycat recipe - \"Slightly sweet with a spicy kick.\"",
        "ingredients": [
            "1 lb chicken (~1&frac12; cups chopped)",
            "3 green onion greens, chopped",
            "1 cup shredded carrot",
            "&frac12; cup cashews",
            "&frac12; cup raisins",
            "&frac12; cup mayonnaise",
            "1 Tbs yellow curry powder",
            "1+ Tbs maple syrup",
            "2 tsp lemon juice*",
            "2 tsp Dijon mustard",
            "&frac12; tsp ground ginger",
            "&frac12; tsp garlic powder",
            "&frac18;-&frac14; tsp cayenne pepper"
        ],
        "directions": [
            "In a large bowl, combine ingredients and mix thoroughly.",
            "Chill at least 30 minutes and serve."
        ],
        "notes": [
            "*Lime juice works too.",
            "Great with bread, croissant, salad greens, tortilla or pita chips."
        ],
        "tags": ["Sides", "Thai"],
        "hands_on_time": "30",
        "total_time": "60",
        "date_added": "05/09/2022",
        "contributor": "Eric Tilford",
        "serves": "~1 quart",
        "images": ["currychickensalad.JPG"],
        "id": "curry-chicken-salad"
    },
    {
        "recipe_name": "Rice Pudding",
        "summary": "This easy rice pudding recipe uses left over cooked rice.",
        "ingredients": [
            "2 cups cooked rice*",
            "2 cups whole or non-dairy milk",
            "3 Tbs granulated sugar",
            "~&frac12; cup raisins",
            "&frac18; tsp salt",
            "1 tsp vanilla extract"
        ],
        "directions": [
            "In a large pot, combine ingredients except vanilla extract.",
            "Cook about 20 minutes on Medium heat, stirring until thickening.",
            "Remove from heat and stir in vanilla extract.",
            "Serve warm or chilled with whipped cream and cinnamon (optional)."
        ],
        "notes": [
            "*Refrigerated day-old rice works great.",
            "We use jasmine rice but would recommend any medium grain rice.",
            "&frac18;-&frac14; tsp nutmeg optional."
        ],
        "tags": ["Dessert"],
        "hands_on_time": "30",
        "total_time": "30",
        "date_added": "05/09/2022",
        "contributor": "Eric Tilford",
        "serves": "~1 quart",
        "images": ["ricepudding.jpg"],
        "id": "rice-pudding"
    },
    {
        "recipe_name": "Chickpea & Edamame Salad",
        "summary": "A fresh bean salad in an herb vinaigrette.",
        "ingredients": [
            "15oz can chickpeas, rinsed and drained",
            "1&frac12; cup shelled edamame",
            "&frac14; cup finely diced carrot",
            "&frac14; cup finely diced red bell pepper",
            "&frac14; cup dried cranberries",
            "3 Tbs extra virgin olive oil",
            "3 Tbs red wine vinegar",
            "1 Tbs Italian seasoning",
            "&frac12; tsp salt",
            "&frac12; tsp ground black pepper",
            "&frac18; tsp ground cumin"
        ],
        "directions": [
            "In a large bowl, combine chickpeas, edamame, carrot, bell pepper, and dried cranberries.",
            "In a separate container, combine remaining ingredients until thoroughly mixed.",
            "Add dressing to bowl and stir until thoroughly mixed.",
            "Chill at least 30 minutes and serve."
        ],
        "notes": [
            "Inspired by an ALDI recipe"
        ],
        "tags": ["Sides"],
        "hands_on_time": "30",
        "total_time": "60",
        "date_added": "05/09/2022",
        "contributor": "Eric Tilford",
        "serves": "1 quart",
        "images": ["chickpeasalad.jpg"],
        "id": "chickpea-salad"
    },
    {
        "recipe_name": "Green Bean Casserole",
        "summary": "An excellent, entirely from-scratch version of the holiday favorite.",
        "ingredients": [
            "1&frac12; lbs green beans, trimmed and cut",
            "2 Tbs unsalted butter",
            "1 yellow onion, diced",
            "2 cloves garlic, minced",
            "2 cups chopped mushroom (1 8oz package)",
            "2 Tbs all-purpose flour",
            "1 cup chicken broth",
            "1 cup half-and-half",
            "&frac12; cup panko breadcrumbs",
            "salt, pepper",
            "!Fried Onion Topping:",
            "2 large or 3 small yellow onions, chopped",
            "2 cups flour",
            "1 Tbs salt, pepper",
            "&frac12; Tbs cayenne pepper",
            "2 cups milk",
            "2-3 cups vegetable oil"
        ],
        "directions": [
            "In a large pot, bring ~&frac12; gal water to a boil and add ~1 Tbs salt. Add green beans and cook until blanched, ~8-10 minutes.",
            "Remove beans and place into ice water, removing and draining after 5-10 minutes.",
            "In a large skillet add butter and cook onions and garlic on medium-high 4-5 minutes or until soft.",
            "Add mushroom, ~1 tsp salt and pepper and cook 1-2 minutes.",
            "Add flour, stirring until combined, and cook ~2 minutes.",
            "Add chicken broth, stir, add half-and-half, and stir.",
            "Simmer until mixture thickens, stirring occasionally (~8 minutes) and remove mixture from heat."
        ],
        "notes": [
            "For a crunchier topping, use store-bought French-fried onions."
        ],
        "tags": ["Holiday", "Sides"],
        "hands_on_time": "30",
        "total_time": "60",
        "date_added": "05/09/2022",
        "contributor": "Eric Tilford",
        "serves": "6",
        "images": ["greenbeancasserole.jpg"],
        "id": "green-bean-casserole"
    },
    {
        "recipe_name": "Jalape&ntilde;o Popper Dip",
        "summary": "A great party dip with the essence of stuffed jalape&ntilde;o poppers.",
        "ingredients": [
            "2 (8oz) packages cream cheese, softened",
            "6-8 slices of bacon, chopped",
            "1 cup mayonnaise",
            "4-6 jalape&ntilde;o peppers, seeded and diced",
            "1 cup shredded cheddar cheese",
            "&frac12; cup shredded mozzarella cheese",
            "&frac14; cup chopped green onion",
            "!Topping:",
            "&frac14; cup butter, melted",
            "1 cup crushed Ritz crackers",
            "&frac12; cup parmesan cheese"
        ],
        "directions": [
            "Preheat oven to 350&deg;F.",
            "In a small bowl, combine Ritz crackers, parmesan cheese, and butter, and reserve for topping.",
            "In a large mixing bowl, add cream cheese and blend until smooth.",
            "Add remainder of ingredients and stir well.",
            "Transfer mixture to 8\" x 8\" baking dish and add topping. Bake 20-30 minutes or until bubbly.",
            "Allow to cool about 15 minutes before serving."
        ],
        "notes": [
            "Serve with tortilla chips, pita, or Ritz crackers, pita chips, Fritos scoops, etc.",
            "Great served warm or at room temperature."
        ],
        "tags": ["Appetizer", "Party"],
        "hands_on_time": "20",
        "total_time": "50",
        "date_added": "08/01/2020",
        "contributor": "Amber Tilford",
        "serves": "8 servings",
        "images": ["jalapenopopperdip.jpg"],
        "id": "jalapeno-popper-dip"
    },
    {
        "recipe_name": "Pulled Pork",
        "summary": "Barbecue pulled pork recipe for slow cooker or pressure cooker.",
        "ingredients": [
            "1 4lb pork shoulder",
            "1 tsp vegetable oil",
            "1 cup BBQ sauce",
            "&frac12; cup apple cider vinegar",
            "&frac12; cup chicken broth",
            "&frac14; cup brown sugar",
            "1 Tbs mustard",
            "1 Tbs Worcestershire sauce",
            "1 Tbs chili powder",
            "1 large white onion, diced",
            "2 cloves garlic, minced",
            "1&frac12; tsp dried thyme"
        ],
        "directions": [
            "Add vegetable oil to slow or pressure cooker.",
            "Add pork roast to cooker.",
            "Add wet ingredients.",
            "Stir in remainder of ingredients.",
            "If using slow cooker, cook on high for ~6 hours. If using pressure cooker, cook on high pressure for ~40 minutes.",
            "Remove pork, shred, and return to cooker.",
            "Slow cook on high for 30 minutes and serve."
        ],
        "notes": [
            "Serve on a toasted bun with coleslaw, or on a baked potato."
        ],
        "tags": ["Dinner", "BBQ"],
        "hands_on_time": "15",
        "total_time": "85",
        "date_added": "08/01/2020",
        "contributor": "Eric Tilford",
        "serves": "8 servings",
        "images": ["pulledpork.jpg"],
        "id": "pulled-pork"
    },
    {
        "recipe_name": "Meatloaf",
        "summary": "Classic meatloaf recipe.",
        "ingredients": [
            "2 lbs ground beef*",
            "2 eggs",
            "1 &frac12; cup plain breadcrumbs, more if needed",
            "1 white onion, diced",
            "&frac14; cup milk",
            "1 tsp salt",
            "1 tsp pepper",
            "1 Tbs Worcestershire sauce",
            "1 Tbs Dijon mustard",
            "1 Tbs tomato paste",
            "2 tsp minced garlic",
            "1 tsp garlic powder",
            "!Meatloaf Sauce:",
            "2 Tbs Worcestershire sauce",
            "1 cup ketchup",
            "4 Tbs brown sugar"
        ],
        "directions": [
            "In a medium bowl, combine the brown sugar, ketchup, and 2 Tbs Worcestershire sauce for the meatloaf sauce.",
            "In a large bowl, add ground beef and remainder of ingredients except breadcrumb, combine until well mixed.",
            "Fold in breadcrumb.",
            "Mold into football or loaf shape.",
            "Add to oiled meatloaf pan, leaving ~&frac12;\" around all edges for sauce.",
            "Make an impression in the top of the loaf.",
            "With &frac12; of the sauce, evenly cover top and sides.",
            "Place in a 375&deg;F preheated oven and bake for 45 minutes.",
            "Remove from oven, add remainder of sauce and return to oven.",
            "Cook an additional 20 minutes or until sauce is desired consistency.",
            "Remove from oven and allow to cool 10-15 minutes before serving."
        ],
        "notes": [
            "This recipe has been tested with an 80/20 ground beef, substitution may affect consistency.",
            "The ingredients are most easily combined by hand, we recommend using gloves.",
            "Optional: garnish with chopped parsley.",
            "Leftover tomato paste may be used as an addition for the meatloaf sauce."
        ],
        "tags": ["Dinner"],
        "hands_on_time": "25",
        "total_time": "90",
        "date_added": "07/26/2020",
        "contributor": "Amber Tilford",
        "serves": "8 servings",
        "images": ["meatloaf.jpg"],
        "id": "meatloaf"
    },
    {
        "recipe_name": "Greek Salad",
        "summary": "An awesome summer side.",
        "ingredients": [
            "1 package (1 pint?) cherry or grape tomatoes",
            "2 cucumbers, peeled/fluted and chopped",
            "1 red onion, diced",
            "~3oz kalamata olives, chopped",
            "4oz feta cheese",
            "4 Tbs extra virgin olive oil",
            "1&frac12; Tbs red wine vinegar",
            "&frac12; Tbs chopped fresh oregano",
            "&frac14; tsp salt",
            "&frac14; tsp pepper",
            "1 lemon"
        ],
        "directions": [
            "In a large mixing bowl, add tomatoes, cucumber, onion, and olives.",
            "In a separate bowl, add olive oil, vinegar, oregano, juice of lemon (lightly squeezed), salt, and pepper.",
            "Blend dressing until completely mixed.",
            "Add dressing to dry ingredients and mix.",
            "Chill for at least 2 hours, top with feta and serve."
        ],
        "notes": [
            "Optional: green bell pepper"
        ],
        "tags": ["Sides"],
        "hands_on_time": "20",
        "total_time": "140",
        "date_added": "07/05/2020",
        "contributor": "Eric Tilford",
        "serves": "1 quart",
        "images": ["greeksalad.jpg"],
        "id": "greek-salad"
    },
    {
        "recipe_name": "Pico de Gallo",
        "summary": "Beak of the rooster.",
        "ingredients": [
            "2 cups diced Roma tomatoes*",
            "&frac12; cup diced red onion",
            "&frac12; cup chopped cilantro",
            "1 jalapeño, diced",
            "2 tsp lime juice",
            "2 cloves garlic, minced",
            "&frac14; tsp salt",
            "&frac14; tsp pepper"
        ],
        "directions": [
            "Combine ingredients in a large bowl.",
            "Chill for at least 30 minutes and serve."
        ],
        "notes": [
            "*Roughly 4 or 5 Roma tomatoes."
        ],
        "tags": ["Sauce", "Tex-Mex"],
        "hands_on_time": "15",
        "total_time": "45",
        "date_added": "07/05/2020",
        "contributor": "Eric Tilford",
        "serves": "1 quart",
        "images": ["picodegallo.jpg"],
        "id": "pico-de-gallo"
    },
    {
        "recipe_name": "Pesto",
        "summary": "Classic basil pesto for use as a pasta sauce, dressing, or dip.",
        "ingredients": [
            "2 cups basil (packed)",
            "&frac12; cup parmesan cheese",
            "&frac12; cup extra virgin olive oil",
            "&frac13; cup pine nuts",
            "3 cloves garlic",
            "&frac14; tsp salt",
            "&frac14; tsp pepper"
        ],
        "directions": [
            "Combine ingredients in food processor.",
            "Blend to desired consistency, add additional oil if necessary.",
            "Chill at least 30 minutes and serve."
        ],
        "notes": [
            "Romano cheese can be substituted for parmesan.",
            "Walnuts or other nuts can be substituted for pine nuts.",
            "&frac18; tsp garlic powder can be substituted per clove of fresh garlic."
        ],
        "tags": ["Sauce", "Italian"],
        "hands_on_time": "15",
        "total_time": "45",
        "date_added": "07/05/2020",
        "contributor": "Eric Tilford",
        "serves": "1 pint",
        "images": ["pesto.jpg"],
        "id": "pesto"
    },
    {
        "recipe_name": "Dutch Oven Bread",
        "summary": "A simple, no-knead, 4-ingredient recipe for a delicious bread made in a Dutch Oven",
        "ingredients": [
            "3 cups all-purpose flour (plus more for shaping)",
            "2 tsp sea salt",
            "1 tsp active dry yeast",
            "1&frac12; cups warm water (~110-115&deg;F)"
        ],
        "directions": [
            "In a large bowl, whisk flour, salt, and yeast.",
            "Pour in water, stirring with a wooden spoon until a shaggy dough forms.",
            "Cover with plastic wrap and rest for 8-18 hours in a warm place.",
            "Preheat oven to 450&deg;F.",
            "Punch down dough and transfer to floured parchment.",
            "Make dough into a ball, cover with plastic wrap and rest for 30 minutes.",
            "Transfer dough to Dutch oven with cross-sections of parchment to aid with removal.",
            "Bake covered for about 45 minutes.",
            "Remove and bake an additional 10-15 minutes uncovered if required for browning.",
            "Using parchment, remove and place onto cooling rack.",
            "Allow to cool and cut into slices."
        ],
        "notes": [
            "This dough can be very sticky, so be liberal with your flour usage."
        ],
        "tags": ["Baking"],
        "hands_on_time": "20",
        "total_time": "500",
        "date_added": "07/04/2020",
        "contributor": "Eric Tilford",
        "serves": "8-10 servings",
        "images": ["dutchovenbread.jpg"],
        "id": "dutch-oven-bread"
    },
    {
        "recipe_name": "Gingerbread Loaf",
        "summary": "A rich, spiced holiday treat.",
        "ingredients": [
            "1 &frac12; cups all-purpose flour",
            "1 Tbs ground ginger",
            "&frac12; tsp baking soda",
            "1 tsp cinnamon",
            "&frac12; tsp salt",
            "&frac14; tsp allspice",
            "&frac14; tsp ground cloves",
            "&frac14; tsp nutmeg",
            "&frac12; cup buttermilk",
            "&frac12; tsp vanilla",
            "&frac12; cup butter (room temperature)",
            "&frac34; cup brown sugar",
            "&frac12; cup unsulphured molasses",
            "2 large eggs (room temperature)"
        ],
        "directions": [
            "Preheat oven to 350&deg;F.",
            "In a large mixing bowl, mix butter and sugar with electric mixer.",
            "Slowly incorporate remaining wet ingredients.",
            "Slowly incorporate remaining dry ingredients.",
            "Add mixture to a buttered, parchment-lined 8 &frac12;&quot; loaf pan.",
            "Place into oven on center rack and cook for ~45 minutes or until toothpick comes out clean.",
            "Using parchment paper, carefully remove and place onto cooling rack, allowing to cool before serving."
        ],
        "notes": [
            "Use Grandma's molasses for best flavor.",
            "This loaf is pretty spicy and can be finished with powdered sugar, whipped cream, or a glass of cold milk."
        ],
        "tags": ["Dessert", "Baking", "Holiday"],
        "hands_on_time": "25",
        "total_time": "70",
        "date_added": "07/04/2020",
        "contributor": "Amber Tilford",
        "serves": "8 slices",
        "images": ["gingerbreadloaf.jpg"],
        "id": "gingerbread-loaf"
    },
    {
        "recipe_name": "Coleslaw",
        "summary": "My personal slaw recipe.",
        "ingredients": [
            "6 cups shredded cabbage (~&frac12; head)",
            "1 cup shredded carrot",
            "&frac12; cup mayonnaise",
            "3-4 Tbs apple cider vinegar",
            "4 Tbs sugar",
            "&frac12; tsp salt",
            "&frac12; tsp pepper"
        ],
        "directions": [
            "Mix ingredients in large bowl.",
            "Chill at least 30 minutes and serve."
        ],
        "notes": [
            "Optional ingredients:",
            "Onion",
            "Scallions",
            "Celery seed",
            "Red cabbage"
        ],
        "tags": ["Sides", "BBQ"],
        "hands_on_time": "10",
        "total_time": "40",
        "date_added": "07/02/2020",
        "contributor": "Eric Tilford",
        "serves": "~2 quarts",
        "images": ["coleslaw.jpg"],
        "id": "coleslaw"
    },
    {
        "recipe_name": "Madeleines",
        "summary": "Petite French butter cakes that get their distinct shell design from a special pan.",
        "ingredients": [
            "2 large eggs",
            "1 tsp vanilla extract",
            "&frac23; cup sugar",
            "&frac12; tsp lemon zest",
            "1 pinch salt",
            "1 cup all-purpose flour",
            "10 Tbs unsalted butter, slightly cooled"
        ],
        "directions": [
            "Preheat oven to 375&deg;F.",
            "Flour and butter madeleine pan.",
            "In mixing bowl, beat eggs and sugar.",
            "Beat in vanilla, lemon, and salt.",
            "Add flour (beat until just blended).",
            "Slowly add butter (until just blended).",
            "Spoon 1 Tbs batter into each cavity.",
            "Bake ~9 minutes."
        ],
        "notes": [
            "Optional: finish with powdered sugar or dip in chocolate."
        ],
        "tags": ["Dessert", "Baking"],
        "hands_on_time": "15",
        "total_time": "25",
        "date_added": "07/03/2020",
        "contributor": "Eric & Amber Tilford",
        "serves": "2 dozen cakes",
        "images": ["madeleines.jpg"],
        "id": "madeleines"
    },
    {
        "recipe_name": "Blueberry Muffins",
        "summary": "The best blueberry muffin recipe, period.",
        "ingredients": [
            "&frac12; cup rolled oats",
            "&frac12; cup orange juice",
            "1 egg",
            "&frac12; cup vegetable oil",
            "&frac12; cup granulated sugar",
            "1 &frac12; cup all-purpose flour",
            "1 &frac14; tsp baking powder",
            "&frac12; tsp salt",
            "&frac12; tsp pure vanilla extract",
            "&frac14; tsp baking soda",
            "1 cup fresh blueberries",
            "!Topping:",
            "2 Tbs coarse sugar", 
            "&frac12; tsp cinnamon"
        ],
        "directions": [
            "In a large bowl, combine oats and orange juice and let stand for 5 minutes.",
            "Whisk in egg, oil, sugar, and vanilla.",
            "In a separate bowl, stir together all dry ingredients.",
            "Combine wet and dry ingredients.",
            "Sprinkle 1 tsp flour on blueberries and gently toss. (This helps keep the blueberries from gathering at the bottom of the muffin). Gently fold in blueberries.",
            "Fill greased muffin tins &frac34; full. Sprinkle cinnamon/sugar mixture evenly on top of muffins.",
            "Bake muffins in preheated oven at 375&deg;F for 20-25 minutes.",
            "Muffins are done when toothpick is inserted and comes out clean."
        ],
        "notes": [
            "Coarse sugar cane or sanding sugar are great options for the topping."
        ],
        "tags": ["Dessert", "Baking"],
        "hands_on_time": "15",
        "total_time": "40",
        "date_added": "07/03/2020",
        "contributor": "Amber Tilford",
        "serves": "12 muffins",
        "images": ["blueberrymuffins2.jpg"],
        "id": "blueberry-muffins"
    },
    {
        "recipe_name": "Red Beans w/ Sausage",
        "summary": "A Cajun red beans and rice recipe with sausage. Recipe for slow / pressure cooker.",
        "ingredients": [
            "1 lb red beans",
            "1 Tbs olive oil",
            "1 lb Andouille sausage",
            "1 yellow onion, chopped",
            "1 green bell pepper, chopped",
            "1 jalape&ntilde;o, diced",
            "2 celery ribs, chopped",
            "4 tsp garlic powder",
            "2 &frac12; tsp smoked paprika",
            "2 &frac12; tsp dried thyme",
            "&frac18;-&frac14; tsp cayenne pepper",
            "&frac14; tsp ground cumin",
            "1 tsp salt / pepper",
            "6 cups chicken broth",
            "rice"
        ],
        "directions": [
            "Rinse, soak and sort beans (preferably overnight).",
            "If using slow cooker, heat oil in a skillet on medium-high. If using pressure cooker, heat oil in pressure cooker on saut&eacute;e setting.",
            "Brown sausage and remove.",
            "Add onion, peppers, celery, and cook until softened.",
            "If slow cooker, transfer to slow cooker.",
            "Add sausage, beans, seasonings, and broth.",
            "If slow cooker, cook covered on low 8-10 hours. If pressure cooker, cook on high pressure 30 minutes.",
            "Remove 2 cups beans, mash, and return."
        ],
        "notes": [
            "Serve with rice, finish with scallions or parsley."
        ],
        "tags": ["Dinner"],
        "hands_on_time": "20",
        "total_time": "60",
        "date_added": "07/03/2020",
        "contributor": "Eric Tilford",
        "serves": "5-6 servings",
        "images": ["redbeans.jpg"],
        "id": "red-beans-sausage"
    },
    {
        "recipe_name": "Yellow Chicken Curry",
        "summary": "A Thai Curry recipe inspired by Bistro 38 in OKC. Recipe for slow / pressure cooker.",
        "ingredients": [
            "2 lb chicken breast*",
            "1 yellow onion, roughly chopped",
            "~1 lb potatoes, peeled / chopped*",
            "4-5 carrots, chopped",
            "1.5 (13.5 oz) cans coconut milk",
            "3 Tbs brown sugar",
            "4-5 cloves garlic, chopped",
            "&frac12; tsp ground ginger",
            "&frac12; tsp turmeric",
            "2 tsp curry powder",
            "&frac12; tsp coriander",
            "2 tsp salt",
            "2 tsp crushed red pepper",
            "cilantro, scallions, and/or lime to finish"
        ],
        "directions": [
            "In slow / pressure cooker, add vegetables and chicken.",
            "In a bowl (or in coconut milk can), mix coconut milk and spices, add to slow cooker.",
            "If slow cooker, cook on low ~4 hours or on high ~2.5 hours. If pressure cooker, cook on high pressure 40 minutes.",
            "Remove chicken, chop, and return to cooker.",
            "Slow cook on high 30 minutes.",
            "Serve with rice, finish with scallions / cilantro / lime."
        ],
        "notes": [
            "*We like to use cilantro-lime marinated chicken breast from Aldi which comes in a 1.5 lb size.",
            "Sweet potatoes can be substituted for potatoes."
        ],
        "tags": ["Thai", "Dinner"],
        "hands_on_time": "25",
        "total_time": "95",
        "date_added": "06/28/2020",
        "contributor": "Eric Tilford",
        "serves": "4-5 servings",
        "images": ["yellowcurry.jpg"],
        "id": "yellow-curry"
    },
    {
        "recipe_name": "Mexican Shredded Chicken",
        "summary": "Inspired by taco trucks for use in tacos / bowls / nachos. Recipe for slow / pressure cooker or Dutch oven.",
        "ingredients": [
            "2 lbs (3 large) chicken breast*",
            "1 (10 oz) can Rotel",
            "1 cup chicken broth",
            "1 yellow onion, chopped",
            "4 cloves garlic, chopped",
            "&frac14;-&frac12; tsp cayenne pepper",
            "1 tsp cumin",
            "1 tsp coriander",
            "1 tsp Mexican chili powder",
            "&frac12; tsp salt",
            "&frac12; tsp pepper"
        ],
        "directions": [
            "Saut&eacute;e onion and garlic until soft.",
            "Drain Rotel.",
            "Add everything to pot.",
            "If Dutch oven, cook for ~1 hour 15 minutes @ 375&deg;F. If slow cooker, cook on low ~8 hours. If pressure cooker, cook on high pressure 40 minutes.",
            "Remove chicken, shred, and return to pot.",
            "If Dutch oven, return to oven and cook 20-30 minutes. If slow / pressure cooker, slow cook on high for 30 minutes.",
            "Serve with taco accoutrements."
        ],
        "notes": [
            "*We like to use cilantro-lime marinated chicken breast from Aldi which comes in a 1.5 lb size."
        ],
        "tags": ["Tex-Mex", "Dinner"],
        "hands_on_time": "20",
        "total_time": "90",
        "date_added": "06/30/2020",
        "contributor": "Justin Tilford",
        "serves": "4-5 servings",
        "images": ["mexicanChicken.jpg"],
        "id": "mexican-chicken"
    },
    {
        "recipe_name": "Tom Kha Gai",
        "summary": "Thai Chicken Mushroom soup inspired by Bistro 38 in OKC. Recipe for slow / pressure cooker.",
        "ingredients": [
            "2 lbs (3 large) chicken breast*",
            "1 lg. yellow onion",
            "8 oz sliced mushrooms",
            "2 (13.5 oz) cans coconut milk",
            "1 tsp ground ginger",
            "1 tsp garlic powder",
            "1 &frac12; tsp salt",
            "4 Tbs brown sugar",
            "1 &frac12; tsp crushed red pepper",
            "Juice of &frac14;-&frac12; lime",
            "Scallions or cilantro to finish"
        ],
        "directions": [
            "In slow / pressure cooker, add vegetables and chicken.",
            "In a bowl (or in coconut milk can), mix coconut milk and spices, add to slow cooker.",
            "If slow cooker, cook on low ~4 hours or on high ~2.5 hours. If pressure cooker, cook on high pressure 40 minutes.",
            "Remove chicken, chop, and return to cooker.",
            "Slow cook on high 30 minutes.",
            "Serve with rice (optional), finish with scallions / cilantro."
        ],
        "notes": [
            "*We like to use cilantro-lime marinated chicken breast from Aldi which comes in a 1.5 lb size."
        ],
        "tags": ["Thai", "Dinner"],
        "hands_on_time": "20",
        "total_time": "90",
        "date_added": "06/30/2020",
        "contributor": "Eric Tilford",
        "serves": "4-5 servings",
        "images": ["tomkha.jpg"],
        "id": "tom-kha-gai"
    }
]
