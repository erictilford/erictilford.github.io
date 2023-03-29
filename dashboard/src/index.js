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
	$("#random-wallpaper-button").attr("title",  "Random Wallpaper (W)" );
	$(document).on('keypress', function(e) {
		var code = e.keyCode || e.which;
		if (code == 119 ) { // W
		  setRandomWallpaper();
		}
	});

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
	$("#settings-button").html('<i class="fa-solid fa-sm fa-gear tray-icon" style="color:lightgray"></i>');
    $("#settings-button").click(function() { $("#settings-panel").toggle(settingsPanelAnimationSpeed); });
	$("#settings-button").attr("title",  "Settings (S)" );
	
	$(document).on('keypress', function(e) {
		var code = e.keyCode || e.which; //console.log(code);
		if (code == 115 ) { // S
			$("#settings-panel").toggle(settingsPanelAnimationSpeed);
		}
	});

	$("#settings-apply-button").click(function() { ValidateAndSave(); });

	$("#settings-close-button").click(function() { $("#settings-panel").hide(settingsPanelAnimationSpeed); });
	
	var tempDisplay;
	function LoadSettings() {
		if (!localStorage.getItem("settings")) {
			settings = [73132, 1]; // defaults
		} else if (localStorage.getItem("settings")) {
			settings = JSON.parse(localStorage.getItem("settings"));
		}
		
		$("#zipInput").val(settings[0]);

		tempDisplay = settings[1];
		if (settings[1] == 0) {
			$("#settings-button-temp-dec").removeClass("active");
			$("#settings-button-temp-nodec").addClass("active");
		} else if (settings[1] == 1) {
			$("#settings-button-temp-dec").addClass("active");
			$("#settings-button-temp-nodec").removeClass("active");
		}
	}
	LoadSettings();

	function SaveSettings () {
		let zc = $("#zipInput").val();

		//var td;
		if ($("#settings-button-temp-nodec").hasClass("active")) {
			tempDisplay = 0;
		} 
		else if ($("#settings-button-temp-dec").hasClass("active")) {
			tempDisplay = 1;
		}
		
		const settings = [zc, tempDisplay];
		// localStorage only supports strings. Use JSON.stringify() and JSON.parse() for arrays.
		localStorage.setItem("settings", JSON.stringify(settings));
	}

	function ValidateAndSave() {
		if (ValidateZip() == false) {
			alert("ERROR: Zip Code must be a 5-digit number");
		} else {
			SaveSettings();
			LoadWeatherPanel($("#zipInput").val());
		}
	}

	function ValidateZip(){
		{
			var ex = /^[0-9]{5}$/;
			return ex.test($("#zipInput").val());
		}
	}

	// WEATHER
	// https://openweathermap.org/api/one-call-api
	LoadWeatherPanel($("#zipInput").val());
	
	function LoadWeatherPanel(zipCode) {
		const lKey = config.LOCATION_API_KEY;
		$.ajax({ // Get location data from Zip Code
			url: "https://thezipcodes.com/api/v1/search?zipCode=" + zipCode + "&countryCode=US&apiKey=" + lKey,
			type: "GET",
			success: function (result) {
				let city = result.location[0].city;
				let state = result.location[0].stateCode2;
				let lat = Math.round(result.location[0].latitude * 100) / 100;
				let long = Math.round(result.location[0].longitude * 100) / 100;

				const wKey = config.WEATHER_API_KEY;
				$.ajax({
					url: "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&lang=en&units=imperial&appid=" + wKey,
					type: "GET",
					success: function (result) {

						function OneDec(x) { // round to one decimal place
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

						// Last updated text
						let currentUTC = new Date(result.current.dt * 1000); // create a date from what the API provides
						let pt = prettyTime(currentUTC);
						$("#last-updated-text").text("Last Updated " + pt.time + pt.ampm);
						//Location text
						$("#location-text").html('<i class="fa-sm fa-solid fa-location-dot"></i> ' + city + ", " + state /* + " " + zipCode */);

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
						$("#weather-extra-wind").html('<i class="fa-solid fa-lg fa-wind weather-extra-icon" style="color:lightsteelblue"></i><br>Wind Speed<br>' + result.current.wind_speed + ' mph');
						$("#weather-extra-humidity").html('<i class="fa-solid fa-lg fa-droplet weather-extra-icon" style="color:cornflowerblue"></i><br>Humidity<br>' + result.current.humidity + '%');

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


	let zipCode = 73132;
	
	// YYYY/MM/DD Format
	//var output = d.getFullYear() + '/' +
	//    ((''+month).length<2 ? '0' : '') + monthLong + '/' +
	//    ((''+day).length<2 ? '0' : '') + day;
});

/*
// TODO 
// - Custom weather icons -- https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
// - Yesterday's weather
// - Alerts - https://openweathermap.org/api/one-call-api
// - Settings icon / menu -- Weather location, etc.
// - Random dog API
// - Holiday Wallpapers
// - Redo Wallpaper selection
// - One-time holidays
// - next full moon on tooltip
*/
