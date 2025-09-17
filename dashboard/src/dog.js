function LoadDogAPI(animSpeed) {

    $.ajax({
		url: "https://dog.ceo/api/breeds/list/all",
		type: "GET",
		success: function (result) {
			icon = 'fa-solid fa-paw " style="color:lightblue';
			$("#random-dog-title").append(' <i class=" ' + icon + '">');
			$("#widget-list").append('<a id="dog-button" class="pointer"><li><i class="fa-md ' + icon + '"></i> Dog</li></a>');
			$("#close-dog-button").click(function() { $("#dog-panel").hide(animSpeed); });
			$("#dog-button").click(function() {  
                $("#dog-panel").toggle(animSpeed); 
                $('html,body').animate({
                    scrollTop: $("#dog-panel").offset().top
                 });
            });
			$("#dog-button").attr("title",  "Random Dog API" );

			for ( var j in result.message) { // Get breeds
				let name = j.charAt(0).toUpperCase() + j.slice(1); // capitalize
				$("#dog-breed-dropdown").append(' <option value="' + name + '">' + name + '</option>'); // add option
			}


			// load dog settings
			if (localStorage.getItem("dogSettings") && $("#rememberBreedCheckbox").is(":checked")) {
				dogSettings = JSON.parse(localStorage.getItem("dogSettings"));
				$("#dog-breed-dropdown option[value='" + dogSettings[0] + "']").attr('selected', 'selected');
				LoadSubBreeds();
				$("#dog-sub-breed-dropdown option[value='" + dogSettings[1] + "']").attr('selected', 'selected');
			}
			//

			$("#dog-breed-dropdown").change(function() { LoadSubBreeds(); });

			function LoadSubBreeds() { 
				$("#dog-sub-breed-dropdown").html("");
				breed = $('#dog-breed-dropdown').find(":selected").text();
				subBreeds = result.message[breed.toLowerCase()];
				
				if (breed == "All Breeds") {
					let name = "All Sub-breeds";
					$("#dog-sub-breed-dropdown").append(' <option value="All Sub-breeds"> ' + name + '</option>');
				} else {
					if (subBreeds.length > 1) {
						$("#dog-sub-breed-dropdown").append(' <option value="All Sub-breeds">All Sub-breeds (' + subBreeds.length + ')</option>');
						for ( var k in subBreeds ) { // Get sub-breeds
							subBreed = subBreeds[k]; 
							let name = subBreed.charAt(0).toUpperCase() + subBreed.slice(1);
							$("#dog-sub-breed-dropdown").append('<option value="' + name + '">' + name + '</option>');
						}
					} else if (subBreeds.length == 1) {
						subBreed = subBreeds[0];
						let name = subBreed.charAt(0).toUpperCase() + subBreed.slice(1);
						$("#dog-sub-breed-dropdown").append(' <option value="' + name + '"> ' + name + '</option>');
					} else if (subBreeds.length == 0) {
						let name = "No Sub-breeds"
						$("#dog-sub-breed-dropdown").append(' <option value="none"> ' + name + '</option>');
					}
				}
			}

			// button 
			$("#random-dog-button").click(function() { 
				breed = $('#dog-breed-dropdown').find(":selected").text();
				if (breed == "All Breeds") {
					str = "breeds/image/random";
				} else {
					subBreed = $('#dog-sub-breed-dropdown').find(":selected").text();
					if (subBreed.includes("All Sub-breeds") | subBreed.includes("No Sub-breeds")) {
						str = "breed/" + breed.toLowerCase() + "/images/random";
					} else {
						str = "breed/" + breed.toLowerCase() + "/" + subBreed.trim().toLowerCase() + "/images/random";
					}
				}
				$.ajax({
					url: "https://dog.ceo/api/" + str,
					type: "GET",
					crossDomain: true,
					dataType: 'json',
					success: function (result) {
						$("#random-dog-image").attr("src", result.message);
						$("#random-dog-image").show();
						// Get dog breed name
						let dogURL = new URL(result.message); // build URL from response
						let dogURLarray = dogURL.pathname.split("/"); // split pathname into array
						let dogNames = dogURLarray[2].split("-"); // split breed and sub-breed
						let breed = dogNames[0].charAt(0).toUpperCase() + dogNames[0].slice(1); // breed name
						if (dogNames[1] && breed != "Mix") { // sub-breed name, if available
							subBreed = dogNames[1].charAt(0).toUpperCase() + dogNames[1].slice(1); 
						} else {
							subBreed ="";
						} 
						if (breed == "Australian" | breed == "Finnish" ) { // for reverse-style breed names
							breedName = breed.trim() + " " + subBreed.trim();
						} 
						else if (breed == "Germanshepherd" ) { breedName = "German Shepherd"; } 
						else if (subBreed == "Germanlonghair" ) { breedName = "German Longhaired Pointer"; } 
						else if (breed == "Pembroke" ) { breedName = "Pembroke Welsh Corgi"; } 
						else if (breed == "Corgi" ) { breedName = "Cardigan Welsh Corgi"; } 
						else if (breed == "Mountain" ) { breedName = subBreed.trim() + " Mountain Dog"; } 
						else if (breed == "Stbernard" ) { breedName = "St. Bernard"; } 
						else if (breed == "Cotondetulear" ) { breedName = "Coton de Tulear"; } 
						else if (breed == "Entlebucher" ) { breedName = "Entlebucher Mountain Dog"; } 
						else if (breed == "Lhasa" ) { breedName = "Lhasa Apso"; } 
						else if (breed == "Mexicanhairless" ) { breedName = "Mexican Hairless (Xoloitzcuintle)"; } 
						else if (breed == "Tervuren" ) { breedName = "Belgian Tervuren"; } 
						else if (breed == "Waterdog" ) { breedName = subBreed.trim() + " Water Dog"; } 
						else if (breed == "African" ) { breedName = "African Wild Dog"; } 
						else if (breed == "Shiba" ) { breedName = "Shiba Inu"; } 
						else if (breed == "Appenzeller" ) { breedName = "Appenzeller Sennenhund"; } 
						else if (breed == "Airedale" ) { breedName = "Airedale Terrier"; } 
						else if (breed == "Bluetick" ) { breedName = "Bluetick Coonhound"; } 
						else if (breed == "Bouvier" ) { breedName = "Bouvier des Flandres"; } 
						else if (breed == "Bullterrier" ) { breedName = subBreed.trim() + " Bull Terrier"; } 
						else if (breed == "Cattledog" ) { breedName = subBreed.trim() + " Cattle Dog"; } 
						else if (breed == "Clumber" ) { breedName = "Clumber Spaniel"; }
						else if (breed == "Redbone" ) { breedName = "Redbone Coonhound"; }
						else if (breed == "Elkhound" ) { breedName = "Norwegian Elkhound"; }
						else if (breed == "Eskimo" ) { breedName = "American Eskimo Dog"; }
						else if (breed == "Groenendael" ) { breedName = "Groenendael (Belgian Sheepdog)"; }
						else if (breed == "Kelpie" ) { breedName = "Australian Kelpie"; }
						else if (breed == "Leonberg" ) { breedName = "Leonberger"; }
						else if (breed == "Malamute" ) { breedName = "Alaskan Malamute"; }
						else if (breed == "Malinois" ) { breedName = "Malinois (Belgian Shepherd)"; }
						else if (breed == "Ovcharka" ) { breedName = "Ovcharka (Caucasian Shepherd)"; }
						else if (breed == "Pekinese" ) { breedName = "Pekingese"; }
						else if (breed == "Pyrenees" ) { breedName = "Great Pyrenees"; }
                        else if (breed == "Terrier" && subBreed == "American" ) { breedName = "American Staffordshire Terrier"; } 
                        else if (breed == "Terrier" && subBreed == "Dandie" ) { breedName = "Dandie Dinmont Terrier"; } 
                        else if (breed == "Terrier" && subBreed == "Kerryblue" ) { breedName = "Kerry Blue Terrier"; } 
                        else if (breed == "Terrier" && subBreed == "Scottish" ) { breedName = "Scottish Terrier (Scottie)"; } 
                        else if (breed == "Terrier" && subBreed == "Toy" ) { breedName = "Toy Fox Terrier"; } 
                        else if (breed == "Terrier" && subBreed == "Westhighland" ) { breedName = "West Highland White Terrier (Westie)"; } 
                        else if (breed == "Terrier" && subBreed == "Wheaten" ) { breedName = "Soft-Coated Wheaten Terrier"; } 
                        else if (breed == "Terrier" && subBreed == "Yorkshire" ) { breedName = "Yorkshire Terrier (Yorkie)"; } 
                        else if (breed == "Hound" && subBreed == "Walker" ) { breedName = "Treeing Walker Coonhound"; } 
						else if (breed == "Sheepdog" && subBreed == "Shetland" ) { breedName = "Shetland Sheepdog (Sheltie)"; } 
						else {
							breedName = subBreed.trim() + " " + breed.trim();
						}
						//console.log(breedName);
						$("#dog-breed-name").html(breedName);

						// save dog breed
						if ($("#rememberBreedCheckbox").is(":checked")) {
							let dogSettings = [$('#dog-breed-dropdown').find(":selected").text().trim(), $('#dog-sub-breed-dropdown').find(":selected").text().trim()];
							localStorage.setItem("dogSettings", JSON.stringify(dogSettings));
						}
						//

					},
					error: function (error) {
						console.log(error);
					}
				});
			});
		},
		error: function (error) {
			console.log(error);
		}
	});

}

function GetSetting(position){
	return settings[position];
}