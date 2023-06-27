
$(document).ready(function () {

	// WALLPAPERS | config.js

	function setRandomWallpaper(){ 
		let randomWallpaper = wallpapers[Math.floor(Math.random() * wallpapers.length)];
		document.body.style.backgroundImage = "url('assets/backgrounds/" + randomWallpaper + "')";
    }
	setRandomWallpaper();

	/*
	$('#elem').fadeTo('slow', 0.3, function () {
		$(this).css('background-image', 'url(' + $img + ')');
	}).fadeTo('slow', 1);
	*/

	// LINKS | config.js
	for (let i = 0; i < links.length; i++) {
		const link = links[i];
		const li = '<a href=' + link.url + ' target="_self"><li>' + link.icon + '<br>' + link.title + '</li>';
		$(link.target).append(li);
	}

	// DATE
	const d = new Date();
	const month = d.getMonth() + 1;
	const monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];
	const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const monthLong = monthNames[month - 1];
	const day = d.getDate();
	const dayNameHeader = dayNames[d.getDay()];
	const dateOutput = dayNameHeader + ", " + monthLong + " " + day + ", " + d.getFullYear();
	$("#date-text").text(dateOutput);

	// Holidays | holidays.js
	const todayHolidays = checkHoliday(month, day, d.getDay(), d.getFullYear());
	for (let i = 0; i < todayHolidays.length; i++) {
		$("#holiday-names").append("<h6>" + todayHolidays[i] + "</h6>");
	}

	// TIME
	function prettyTime(newDate) {
		let freedomHours = newDate.getHours();
		let ampm = "AM";
		if (freedomHours > 12) {
			freedomHours -= 12;
			ampm = "PM";
		} else if (freedomHours == 0) {
			freedomHours = 12;
		}
		else if (freedomHours == 12) {
			ampm = "PM";
		}
		let minutes = newDate.getMinutes().toString().padStart(2, "0");
		let seconds = newDate.getSeconds().toString().padStart(2, "0");
		let time = freedomHours + ":" + minutes + /* ":" + seconds + */ " ";
		let hour = freedomHours;
		return {
			'hour': hour,
			'time': time,
			'ampm': ampm
		}
	}
	function updateClock() {
		let pt = prettyTime(new Date());
		$("#time-text").text(pt.time);
		$("#ampm-text").text(pt.ampm);
		setTimeout(updateClock, 1000 * 60);
	}
	updateClock();

	// RANDOM WALLPAPER BUTTON
	$("#random-wallpaper-button").html('<i class="fa-regular fa-sm fa-image tray-icon" style="color:lightblue"></i>');
    $("#random-wallpaper-button").click(function() { setRandomWallpaper() });
	$("#random-wallpaper-button").attr("title",  "Random Wallpaper" );

	/* This breaks the City Name input functionality
	$(document).on('keypress', function(e) {
		var code = e.keyCode || e.which;
		if (code == 119 ) { // W
		  setRandomWallpaper();
		}
	});
	*/

	// SMASH TOURNEY STATUS

	const origin = new Date("11/18/2022");
	let daysDifference = Math.floor((d.getTime() - origin.getTime()) / (1000 * 3600 * 24));
	let dayDiffRemainder = daysDifference % 4;

	if (dayDiffRemainder == 2 || dayDiffRemainder == 3) {
		$("#smash-tourney").html('<i class="fa-solid fa-sm fa-person-rays tray-icon" style="color:#ff7b4a"></i>');
		if (dayDiffRemainder == 2) {
			let twoDays =  new Date();
			twoDays.setDate(d.getDate() + 2);
			$("#smash-tourney").attr("title", "1v1 tourney ends: \n" + dayNames[twoDays.getDay()] + " (2 days)");
		}
		else if (dayDiffRemainder == 3) {
			$("#smash-tourney").attr("title",  "1v1 tourney ends: \nTomorrow" );
		}
		
	} 
	else if (dayDiffRemainder == 0 || dayDiffRemainder == 1) {

		$("#smash-tourney").html('<i class="fa-solid fa-sm fa-users-slash tray-icon" style="color:#146ebe"></i>');
		if (dayDiffRemainder == 0) {
			let twoDays =  new Date();
			twoDays.setDate(d.getDate() + 2);
			$("#smash-tourney").attr("title",  "Next 1v1 tourney: \n" + dayNames[twoDays.getDay()] + " (2 days)");
		}
		else if (dayDiffRemainder == 1) {
			$("#smash-tourney").attr("title",  "Next 1v1 tourney: \nTomorrow");
		}
	}

	// ZODIAC
	const zodiacSymbols = {
		"Capricorn": ["\u2651", "The Goat"], "Aquarius": ["\u2652", "The Water Bearer"], "Pisces": ["\u2653", "The Fish"],
		"Aries": ["\u2648", "The Ram"],"Taurus": ["\u2649", "The Bull"], "Gemini": ["\u264a", "The Twins"],
		"Cancer": ["\u264b", "The Crab"],"Leo": ["\u264c", "The Lion"], "Virgo": ["\u264d", "The Virgin"],
		"Libra": ["\u264e", "The Scales"],"Scorpio": ["\u264f", "The Scorpion"], "Sagittarius": ["\u2650", "The Archer"]
	};
	function zodiac(day, month) {
		var zodiac = ['', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'];
		var last_day = ['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
		return (day > last_day[month]) ? zodiac[month * 1 + 1] : zodiac[month];
	}
	const zSign = zodiacSymbols[zodiac(day, month)][0];
	const zTitle = zodiacSymbols[zodiac(day, month)][1];
	$("#zodiac-symbol").text(zSign);
	$("#zodiac-symbol").attr("title", zodiac(day, month) + ", " + zTitle);

	// SETTINGS
	const settingsPanelAnimationSpeed = 300;

	icon = 'fa-solid fa-gear" style="color:lightgray';
	$("#settings-title").append(' <i class=" ' + icon + '">');

	$("#settings-button").html('<i class=" fa-sm tray-icon ' + icon + '"></i>');
    $("#settings-button").click(function() { 
		$("#settings-panel").toggle(settingsPanelAnimationSpeed); 
		$('html,body').animate({
			scrollTop: $("#dog-panel").offset().top
		});
	});
	$("#settings-button").attr("title",  "Settings" );
	
	/* This breaks the City Name input functionality
	$(document).on('keypress', function(e) {
		var code = e.keyCode || e.which; //console.log(code);
		if (code == 115 ) { // S
			$("#settings-panel").toggle(settingsPanelAnimationSpeed);
		}
	});
	*/

	$("#settings-apply-button").click(function() { SaveAndReload(); });

	$("#settings-close-button").click(function() { $("#settings-panel").hide(settingsPanelAnimationSpeed); });
	
	var tempDisplay;
	function LoadSettings() {
		if (!localStorage.getItem("settings")) {
			settings = ["Oklahoma City", 1, true]; // defaults
		} else if (localStorage.getItem("settings")) {
			settings = JSON.parse(localStorage.getItem("settings"));
		}
		
		$("#locationInput").val(settings[0]);

		tempDisplay = settings[1];
		if (settings[1] == 0) {
			$("#settings-button-temp-dec").removeClass("active");
			$("#settings-button-temp-nodec").addClass("active");
		} else if (settings[1] == 1) {
			$("#settings-button-temp-dec").addClass("active");
			$("#settings-button-temp-nodec").removeClass("active");
		}
		
		if (settings[2] != undefined) { $("#rememberBreedCheckbox").prop("checked", settings[2]) } 
	}
	LoadSettings();

	function SaveSettings () {
		let location = $("#locationInput").val();

		if ($("#settings-button-temp-nodec").hasClass("active")) {
			tempDisplay = 0;
		} 
		else if ($("#settings-button-temp-dec").hasClass("active")) {
			tempDisplay = 1;
		}

		rememberBreed = $("#rememberBreedCheckbox").is(":checked");
		
		const settings = [location, tempDisplay, rememberBreed];
		// localStorage only supports strings. Use JSON.stringify() and JSON.parse() for arrays.
		localStorage.setItem("settings", JSON.stringify(settings));
	}

	function SaveAndReload() {
		SaveSettings();
		LoadWeatherPanel($("#locationInput").val());
	}

	function AccessSetting(position) {
		return settings[position];
	}

	/*
	function ValidateZip(){
		{
			var ex = /^[0-9]{5}$/;
			return ex.test($("#zipInput").val()); returns T/F
		}
	}
	*/

	// DOGS | https://dog.ceo/dog-api/ | dog.js | todo: fix "mix" bug, load dog on open option

	LoadDogAPI(settingsPanelAnimationSpeed);

	// WEATHER | https://openweathermap.org/api/one-call-api

	LoadWeatherPanel($("#locationInput").val());
	
	$("#alert-icon-span").click(function() { $("#alert-panel").toggle(); });
	
	function LoadWeatherPanel(cityName) {
		//const lKey = config.LOCATION_API_KEY;
		const wKey = config.WEATHER_API_KEY;
		const staticCity = "Oklahoma City";
		$.ajax({ // Get location data from City Name
			url: "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=5&appid=" + wKey,
			type: "GET",
			success: function (result) {
				let city = result[0].name;
				let state = result[0].state;
				let country = result[0].country;
				let lat = Math.round(result[0].lat * 100) / 100;
				let long = Math.round(result[0].lon * 100) / 100;

				$.ajax({
					url: "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&lang=en&units=imperial&appid=" + wKey,
					type: "GET",
					success: function (result) {

						function OneDec(x) { // rounds number (x) to (tempDisplay) decimal places
							y = 10 ** tempDisplay;
							return Math.round(x * y) / y;
						};

						// Current temp
						const temp = OneDec(result.current.temp);
						const currentIcon = result.current.weather[0].icon;
						$("#current-weather-icon").attr("src", "https://openweathermap.org/img/wn/" + currentIcon + ".png");
						$("#current-weather-icon").attr("title", result.current.weather[0].description);
						$("#current-weather-text").text(temp + "°");

						const todayHighTemp = OneDec(result.daily[0].temp.max);
						const todayLowTemp = OneDec(result.daily[0].temp.min);
						const feelsLike = OneDec(result.current.feels_like);
						const s =  /* todayHighTemp + "° / " + todayLowTemp + "°*/" (Feels like " + feelsLike + "°)";
						$("#temp-text").text(s);

						//Location text
						if (country == "US") {
							stateText = ", " + state;
							countryText = "";
						} else if (country != "US"){
							countryText = ", " + country;
							stateText = "";
						}
						$("#location-text").html('<i class="fa-sm fa-solid fa-location-dot"></i> ' + city + stateText + countryText /* + " " + zipCode */);

						// Last updated text
						let currentUTC = new Date(result.current.dt * 1000); // create a date from what the API provides
						let pt = prettyTime(currentUTC);
						$("#last-updated-text").text("Last Updated " + pt.time + pt.ampm);
						
						// Alerts
						if (result.alerts) {
							$("#alert-panel").show();
							let alertIcons = "";
							let alertBody = "";
							for (let i = 0; i < result.alerts.length; i ++){
								console.log(result.alerts[i].tags);
								console.log("(^add me as a custom alert icon");

								if (result.alerts[i].tags.includes("Snow/Ice")) { icon = '<i class="fa-solid fa-snowflake"; style=color:indianred></i>'; } 
								else if (result.alerts[i].tags.includes("Wind")) { icon = '<i class="fa-solid fa-wind"; style=color:indianred></i>'; } 
								else if (result.alerts[i].tags.includes("Thunderstorm")) { icon = '<i class="fa-solid fa-cloud-bolt"; style=color:indianred></i>'; } 
								else if (result.alerts[i].tags.includes("Tornado")) { icon = '<i class="fa-solid fa-tornado"; style=color:indianred></i>'; } 
								else if (result.alerts[i].tags.includes("Extreme temperature value")) { icon = '<i class="fa-solid fa-temperature-half"; style=color:indianred></i>'; } 
								else { icon = '<i class="fa-solid fa-circle-exclamation"; style=color:indianred></i>'; }

								let name = result.alerts[i].event;
								let sender = '<u><br>' + result.alerts[i].sender_name + '</u>';
								let desc = '<br><span style="white-space:pre-wrap">' + result.alerts[i].description + "</span>";
								
								alertIcons += icon;
								alertBody += "<span style='font-size:medium'>" + icon + " " + name + "</span>" /*+ sender*/ + desc;
						
								if (i < result.alerts.length - 1) {
									alertBody += "<br><br>";
									alertIcons += " ";
								}
							}
							$("#alert-icon-span").show();
							$("#alert-icon-span").html(alertIcons);
							$("#alert-window").html(alertBody);
							$("#alert-panel").hide();
						} else {
							$("#alert-window").html("");
							$("#alert-panel").hide();
							$("#alert-icon-span").hide();
						}

						// Hourly
						let hourlyColumns = "";
						for (let i = 3; i < 18; i += 3){
							let hourlyUTC = new Date(result.hourly[i].dt * 1000);
							let pt = prettyTime(hourlyUTC);
							let time = pt.hour + " " + pt.ampm;
							let icon = "<img class='weather-icon' src='https://openweathermap.org/img/wn/" + result.hourly[i].weather[0].icon + ".png' title='" + result.hourly[i].weather[0].description + "'></img>";
							let pop = "";
							if (result.hourly[i].pop != 0) {
								pop = "<i style='filter: opacity(" + (result.hourly[i].pop) + ");' class='fa-solid fa-droplet'></i> " + OneDec(result.hourly[i].pop * 100) + "%";
							}
							let temp = OneDec(result.hourly[i].temp) + "°";
							hourlyColumns += "<td>" + time + "<br>" + icon + "<br>" + temp + "<br>" + pop + "</td>"; 
						}
						$("#weather-hourly-table").html("<tr>" + hourlyColumns + "</tr>");
						
						// 8-day Forecast
						$("#weather-table").html("");
						for (let i = 0; i < result.daily.length; i++) {
							let dayName = "";
							if (i == 0) {
								dayName = "Today";
							} else {
								const thisDay = new Date(d);
								thisDay.setDate(thisDay.getDate() + i);
								const todayHolidays = checkHoliday(thisDay.getMonth() + 1, thisDay.getDate(), thisDay.getDay(), thisDay.getFullYear());
								if (todayHolidays.length != 0) {
									dayName = todayHolidays[0];
								} else {
									let j = i;
									if (d.getDay() + i > 6) { j -= 7; }
									dayName = dayNames[d.getDay() + j];
								}
							}
							const dayname = "<td class='day-name' valign='center'>" + dayName + "</td>";
							const icon = "<td class='weather-icon-column'><img class='weather-icon' src='https://openweathermap.org/img/wn/" + result.daily[i].weather[0].icon + ".png' title='" + result.daily[i].weather[0].description + "'></td>";
							const high = "<td class='daily-temp'>" + OneDec(result.daily[i].temp.max) + "°</td>";
							const low = "<td class='daily-temp'>" + OneDec(result.daily[i].temp.min) + "°</td>";
							let pop = "";
							if (result.daily[i].pop == 0) {
								pop = "<td class='precip'></td>";
							} else {
								pop = "<td class='precip'><i style='filter: opacity(" + (result.daily[i].pop) + ");' class='fa-solid fa-droplet'></i> " + OneDec(result.daily[i].pop * 100) + "%</td>";
							}
							const row = "<tr>" + dayname + pop + icon + high + low + "</tr>";
							$("#weather-table").append(row);
						}
						
						// UV index
						const uvi = result.current.uvi;
						let uvtext = "";
						let uvcolor = "";
						let uvicon = "fa-sun";
						if (uvi == 0) { uvcolor = "aliceblue"; uvicon = "fa-moon" }
						else if (uvi > 0 && uvi < 3) { uvtext = "Low | "; uvcolor = "khaki" }
						else if (uvi >= 3 && uvi < 6) { uvtext = "Moderate | "; uvcolor = "goldenrod" }
						else if (uvi >= 6 && uvi < 8) { uvtext = "High | "; uvcolor = "orangered" }
						else if (uvi >= 8 && uvi < 11) { uvtext = "Very High | "; uvcolor = "crimson" }
						else if (uvi >= 11) { uvtext = "Extreme | "; uvcolor = "magenta" }

						$("#weather-extra-uv").html('<i class="fa-solid fa-lg ' + uvicon + ' weather-extra-icon" style="color:' + uvcolor + '"></i><br>UV Index<br>' + uvtext + result.current.uvi);
						
						// Wind speed / gust
						if ( result.current.wind_gust != undefined ) { gust = "-" + result.current.wind_gust; } 
						else { gust = ""; }
						$("#weather-extra-wind").html('<i class="fa-solid fa-lg fa-wind weather-extra-icon" style="color:lightsteelblue"></i><br>Wind Speed<br>' + result.current.wind_speed + gust + ' mph');
						
						// Humidity / Dewpoint
						let humidity = result.current.humidity;
						let dewpoint = result.current.dewpoint;
						$("#weather-extra-humidity").html('<i class="fa-solid fa-lg fa-droplet weather-extra-icon" style="color:cornflowerblue"></i><br>Humidity<br>' + result.current.humidity + '%');
						console.log(dewpoint);

						// Moon phases | moon.js
						let moonPhase = result.daily[0].moon_phase;
						$("#weather-extra-moon").html('<img src="assets/moonphases/' + moonPhaseInfo(moonPhase).image + '"><br>Moon Phase<br>' + moonPhaseInfo(moonPhase).text);

						// Wind direction | wind.js
						let windDeg = result.current.wind_deg;
						let windDirectionString = '<div id="wind-deg-icon" style="margin-bottom:10px"><i class="fa-solid fa-lg fa-arrow-down-long weather-extra-icon" style="color:mediumslateblue; padding-bottom:0"></i></div>Wind Direction<br>';
						$("#weather-extra-direction").html(windDirectionString  + windDirectionName(windDeg) + " | " + windDeg + "&deg; ");
						$("#wind-deg-icon").css("transform","rotate(" + windDeg + "deg)");
						
						// Air pressure
						let pressure = result.current.pressure;
						let pressureName = "";
						if (pressure > 1022.689) { pressureName = "High" }
						else if (pressure <= 1022.689 && pressure > 1009.144) { pressureName = "Normal"}
						else if (pressure <= 1009.144) { pressureName = "Low"}
						$("#weather-extra-pressure").html('<i class="fa-solid fa-lg fa-gauge weather-extra-icon" style="color:burlywood"></i><br>Air Pressure<br>' + pressureName + ' | ' + pressure + " hPa");

						// Air quality | https://openweathermap.org/api/air-pollution
						$.ajax({
							url: "https://api.openweathermap.org/data/2.5/air_pollution?lat=" + lat + "&lon=" + long + "&lang=en&units=imperial&appid=" + wKey,
							type: "GET",
							success: function (result) {
								let aqi = result.list[0].main.aqi;
								let aqicon = "fa-lungs";
								if (aqi == 1) { aqtext = "Good | "; aqcolor = "#eff5ff" }
								else if (aqi == 2) { aqtext = "Fair | "; aqcolor = "#b8d4ff" }
								else if (aqi == 3) { aqtext = "Moderate | "; aqcolor = "#82b3aa" } 
								else if (aqi == 4) { aqtext = "Poor | "; aqcolor = "#cfa07f" }
								else if (aqi == 5) { aqtext = "Very Poor | "; aqcolor = "#bc7bc1" }

								$("#weather-extra-aqi").html('<i class="fa-solid fa-lg ' + aqicon + ' weather-extra-icon" style="color:' + aqcolor + '"></i><br>Air Quality<br>' + aqtext + aqi);
								
								let com = result.list[0].components;
								let title = "CO : " + com.co + "\nNO : " + com.no + "\nNO2 : " + com.no2 + "\nO3 : " + com.o3 + "\nSO2 : " + com.so2 + "\nPM2.5 : " + com.pm2_5 + "\nPM10 : " + com.pm10 + "\nNH3 : " + com.nh3;
								$("#weather-extra-aqi").attr("title",  title);
							},
							error: function (error) {
								console.log(error);
							}
						});

						// Pollen | https://www.getambee.com/api-documentation??

						// Cloudiness
						let clouds = result.current.clouds;
						let cloudIcon = "fa-solid fa-lg fa-smog";
						$("#weather-extra-clouds").html('<i style="filter: opacity(' + (clouds / 100) + ');" class="' + cloudIcon + ' weather-extra-icon" style="color:aliceblue"></i><br>Cloudiness<br>' + clouds + '%');

						// Sunrise / Sunset
						let sunrise = new Date(result.current.sunrise * 1000); // create a date from what the API provides
						let sunset = new Date(result.current.sunset * 1000); 
						let riseSetText = prettyTime(sunrise).time + " " + prettyTime(sunrise).ampm + ' | ' + prettyTime(sunset).time + " " + prettyTime(sunset).ampm;
						let riseSetIcon = "fa-solid fa-clock";
						$("#weather-extra-sun").html('<i class="fa-lg ' + riseSetIcon + ' weather-extra-icon" style="color:lightgoldenrodyellow"></i><br>Sunrise | Sunset<br>' + riseSetText);

					},
					error: function (error) {
						console.log(error);
						$("#temp-text").html("<p>Failed to Load Weather Data</p>");
					}
				});
			},
			error: function (error) {
				console.log(error);
				$("#temp-text").html("<p>Failed to Load Location Data</p>");
			}
			
		});
	}
	 
	
});

// YYYY/MM/DD Format
	//var output = d.getFullYear() + '/' +
	//    ((''+month).length<2 ? '0' : '') + monthLong + '/' +
	//    ((''+day).length<2 ? '0' : '') + day;