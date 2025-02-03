$(document).ready(function () {

	// LOADING DOTS
	let loadingDotInterval;

	function startDotAnimation() {
		let dotCount = 0;
	
		loadingDotInterval = setInterval(function() {
			$('#dots').text('.'.repeat(dotCount));
			dotCount = (dotCount + 1) % 4;
		}, 1000);
	}

	function stopDotAnimation() {
		$('#dots').text("");
		clearInterval(loadingDotInterval);
	}
	startDotAnimation();

	// WALLPAPERS | config.js
	function setRandomWallpaper(){ 
		let randomWallpaper = wallpapers[Math.floor(Math.random() * wallpapers.length)];
		document.body.style.backgroundImage = "url('assets/backgrounds/" + randomWallpaper + "')";
		// $("#wallpaper-container").css("background-image", "url('assets/backgrounds/" + randomWallpaper + "')");  
    }
	setRandomWallpaper();

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
	$("#random-wallpaper-button").html('<i class="fa-regular fa-sm fa-image tray-icon pointer" style="color:lightblue"></i>');
    $("#random-wallpaper-button").click(function() { setRandomWallpaper() });
	$("#random-wallpaper-button").attr("title",  "Random Wallpaper" );

	// RECYCLING DAY
	function recyclingDay(){
		const origin = new Date("10/15/2023");
		let daysDifference = Math.floor((d.getTime() - origin.getTime()) / (1000 * 3600 * 24));
		let dayDiffRemainder = daysDifference % 14;
		const icon = '<i class="fa-solid fa-sm fa-recycle tray-icon trash-icon" style="color:#5cb209"></i>';
		if (dayDiffRemainder == 0){
			$("#recycling-symbol").html(icon);
			$("#recycling-symbol").attr("title",  "Recycling Day is tomorrow" );
		}
		else if (dayDiffRemainder == 1){
			$("#recycling-symbol").html(icon);
			$("#recycling-symbol").attr("title",  "Recycling Day is today" );
		}
		else if (dayDiffRemainder == 13){
			$("#recycling-symbol").html(icon);
			$("#recycling-symbol").attr("title",  "Recycling Day is Monday" );
		}
	}
	recyclingDay();

	// BIG TRASH DAY
	function bigTrashDay() {
		const today = new Date();
		const tomorrow = new Date(today);
		const DATomorrow = new Date(today);
		tomorrow.setDate(tomorrow.getDate() + 1);
		DATomorrow.setDate(tomorrow.getDate() + 2);
		const icon = '<i class="fa-solid fa-sm fa-dumpster tray-icon trash-icon" style="color:#a0bddb"></i>';
		if (tomorrow.getDay() === 1 && tomorrow.getDate() <= 7) { // If tomorrow is 1st Mon. of month
			$("#big-trash-icon").html(icon);
			$("#big-trash-icon").attr("title",  "Big Trash Day is tomorrow" );
		} else if (today.getDay() === 1 && today.getDate() <= 7) { // If today is...
			$("#big-trash-icon").html(icon);
			$("#big-trash-icon").attr("title",  "Big Trash Day is today" );
		} else if (DATomorrow.getDay() === 1 && DATomorrow.getDate() <= 7) { // If day after tomorrow is...
			$("#big-trash-icon").html(icon);
			$("#big-trash-icon").attr("title",  "Big Trash Day is Monday" );
		}	
	}
	bigTrashDay();

	// SMASH TOURNEY STATUS
	function smashTourney() {
		$("#smash-tourney").show();
		const origin = new Date("11/18/2022");
		let daysDifference = Math.floor((d.getTime() - origin.getTime()) / (1000 * 3600 * 24));
		let dayDiffRemainder = daysDifference % 4;

		if (dayDiffRemainder == 2 || dayDiffRemainder == 3) {
			$("#smash-tourney").html('<i class="fa-solid fa-sm fa-person-rays tray-icon" style="color:#ff7b4a"></i>');
			if (dayDiffRemainder == 2) {
				let twoDays = new Date();
				twoDays.setDate(d.getDate() + 2);
				$("#smash-tourney").attr("title", "1v1 tourney ends: \n" + dayNames[twoDays.getDay()] + " (2 days)");
			}
			else if (dayDiffRemainder == 3) {
				$("#smash-tourney").attr("title", "1v1 tourney ends: \nTomorrow");
			}
		} else if (dayDiffRemainder == 0 || dayDiffRemainder == 1) {
			$("#smash-tourney").html('<i class="fa-solid fa-sm fa-users-slash tray-icon" style="color:#146ebe"></i>');
			if (dayDiffRemainder == 0) {
				let twoDays = new Date();
				twoDays.setDate(d.getDate() + 2);
				$("#smash-tourney").attr("title", "Next 1v1 tourney: \n" + dayNames[twoDays.getDay()] + " (2 days)");
			}
			else if (dayDiffRemainder == 1) {
				$("#smash-tourney").attr("title", "Next 1v1 tourney: \nTomorrow");
			}
		}
	}
	//smashTourney();

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

	// LUNAR ZODIAC
	function setLunarIcon() {
		const lunarNewYearDates = holidayArray.find(holiday => holiday.holiday_name === "Lunar New Year")?.dates;
		for (let date of lunarNewYearDates) {
			const newYearDate = new Date(date.year, date.month - 1, date.day_one);
			if (newYearDate <= d) {
				recentLunar = date;
			} else {
				nextLunar = date;
				break;
			}
		}
		$("#lunar-symbol").html(recentLunar.emoji);
		const nextText = "\nNext: " + nextLunar.month + "/" + nextLunar.day_one + "/" + nextLunar.year + " (" + nextLunar.animal + ")";
		$("#lunar-symbol").attr("title", "Year of the " + recentLunar.animal + nextText );
	}
	setLunarIcon();

	// SETTINGS
	const settingsPanelAnimationSpeed = 300;

	icon = 'fa-solid fa-gear" style="color:lightgray';
	$("#settings-title").append(' <i class=" ' + icon + '">');

	$("#settings-button").html('<i class="pointer fa-sm tray-icon ' + icon + '"></i>');
    $("#settings-button").click(function() { 
		$("#settings-panel").toggle(settingsPanelAnimationSpeed); 
		$('html,body').animate({
			scrollTop: $("#dog-panel").offset().top
		});
	});
	$("#settings-button").attr("title",  "Settings" );

	$("#settings-apply-button").click(function() { SaveAndReload(); });

	$("#settings-close-button").click(function() { $("#settings-panel").hide(settingsPanelAnimationSpeed); });

	// updating hourly interval slider value
	$("#durationLabel").html($("#hourlyDurationSlider").val());
	$("#hourlyDurationSlider").on('input', function() {
        $("#durationLabel").html($(this).val());
    });

	var tempDisplay;

	function LoadSettings() {
		// JSON settings!
		defaultSettings = {
			location: "Oklahoma City",
			tempFormat: 1,
			rememberBreed : true,
			weatherAutoRefresh : false,
			weatherAutoRefreshDuration : 30,
			wallpaperAutoRefresh : false,
			wallpaperAutoRefreshDuration : 5,
			hourlyInterval: 2
		}

		settings = {};
		if (localStorage.getItem("settings")) { settings = JSON.parse(localStorage.getItem("settings")); }

		// weather location
		if (settings.location != null) { $("#locationInput").val(settings.location); } 
		else { $("#locationInput").val(defaultSettings.location); }
		// temp format
		if (settings.tempFormat != null) { tempDisplay = settings.tempFormat } 
		else { tempDisplay = defaultSettings.tempFormat }

		if (tempDisplay == 0) {
			$("#settings-button-temp-dec").removeClass("active");
			$("#settings-button-temp-nodec").addClass("active");
		} else if (tempDisplay == 1) {
			$("#settings-button-temp-dec").addClass("active");
			$("#settings-button-temp-nodec").removeClass("active");
		}
		// remember dog breed
		if (settings.rememberBreed != undefined) { $("#rememberBreedCheckbox").prop("checked", settings.rememberBreed) } 
		else { $("#rememberBreedCheckbox").prop("checked", defaultSettings.rememberBreed) }
		// weather auto refresh
		if (settings.weatherAutoRefresh != undefined) { $("#weatherAutoRefreshCheckox").prop("checked", settings.weatherAutoRefresh) } 
		else { $("#weatherAutoRefreshCheckox").prop("checked", defaultSettings.weatherAutoRefresh) }
		// -- duration
		if (settings.weatherAutoRefreshDuration != null) { $("#weatherRefreshDurationInput").val(settings.weatherAutoRefreshDuration); } 
		else { $("#weatherRefreshDurationInput").val(defaultSettings.weatherAutoRefreshDuration); }
		// wallpaper auto refresh
		if (settings.wallpaperAutoRefresh != undefined) { $("#wallpaperAutoRefreshCheckox").prop("checked", settings.wallpaperAutoRefresh) } 
		else { $("#wallpaperAutoRefreshCheckox").prop("checked", defaultSettings.wallpaperAutoRefresh) }
		// -- duration
		if (settings.wallpaperAutoRefreshDuration != null) { $("#wallpaperRefreshDurationInput").val(settings.wallpaperAutoRefreshDuration); } 
		else { $("#wallpaperRefreshDurationInput").val(defaultSettings.wallpaperAutoRefreshDuration); }
		// -- hourly interval
		if (settings.hourlyInterval != null) { 
			$("#hourlyDurationSlider").val(settings.hourlyInterval); 
			$("#durationLabel").html(settings.hourlyInterval);
		} else { 
			$("#hourlyDurationSlider").val(defaultSettings.hourlyInterval); 
			$("#durationLabel").html(defaultSettings.hourlyInterval);
		}

	}
	LoadSettings();

	function SaveSettings () {

		if ($("#settings-button-temp-nodec").hasClass("active")) { tempDisplay = 0; } 
		else if ($("#settings-button-temp-dec").hasClass("active")) { tempDisplay = 1; }
		
		const settings = {
			location: $("#locationInput").val(),
			tempFormat: tempDisplay,
			rememberBreed : $("#rememberBreedCheckbox").is(":checked"),
			weatherAutoRefresh : $("#weatherAutoRefreshCheckox").is(":checked"),
			weatherAutoRefreshDuration : $("#weatherRefreshDurationInput").val(),
			wallpaperAutoRefresh : $("#wallpaperAutoRefreshCheckox").is(":checked"),
			wallpaperAutoRefreshDuration : $("#wallpaperRefreshDurationInput").val(),
			hourlyInterval : $("#hourlyDurationSlider").val()
		}
		// localStorage only supports strings. Use JSON.stringify() and JSON.parse() for arrays.
		localStorage.setItem("settings", JSON.stringify(settings));
	}

	function SaveAndReload() {
		SaveSettings();
		LoadWeatherPanel($("#locationInput").val());
	}

	// wallpaper auto-refresher
	function autoRefreshWallpaper() { // update wallpaper on a duration
		// get settings
		// wallpaper auto refresh
		if (settings.wallpaperAutoRefresh != undefined) { wallpaperAutoRefresh = settings.wallpaperAutoRefresh } 
		else { wallpaperAutoRefresh = defaultSettings.wallpaperAutoRefresh }
		// -- duration
		if (settings.wallpaperAutoRefreshDuration != undefined) { wallpaperAutoRefreshDuration = settings.wallpaperAutoRefreshDuration } 
		else { wallpaperAutoRefreshDuration = defaultSettings.wallpaperAutoRefreshDuration }

		// refresh duration minimum - add validation and put this in the save setting function
		if (wallpaperAutoRefreshDuration < 1) { // 1 minute
			wallpaperAutoRefreshDuration = 1 
			 console.log("Error: Wallpaper Auto Refresh Rate Invalid.");
		}

		setTimeout(wallpaperRefresherSetup, 1000 * 60 * wallpaperAutoRefreshDuration);
		
		function wallpaperRefresherSetup() {
			if (wallpaperAutoRefresh) { 
				setRandomWallpaper();
				console.log("WALLPAPER REFRESHED!!!!!");
			}
			autoRefreshWallpaper();
		}
	}
	autoRefreshWallpaper();

	// ETTV | tv.js | 
	//LoadETTV(settingsPanelAnimationSpeed);

	// DOGS | https://dog.ceo/dog-api/ | dog.js | todo: fix "mix" bug, load dog on open option
	LoadDogAPI(settingsPanelAnimationSpeed);

	// Holiday List | holidays.js | 
	LoadHolidayButton(settingsPanelAnimationSpeed);

	// WEATHER | https://openweathermap.org/api/one-call-api
	LoadWeatherPanel($("#locationInput").val());
	
	$("#alert-icon-span").click(function() { $("#alert-panel").toggle(); });

	// weather auto-refresher
	function autoRefreshWeather() { // update weather on a duration
		// get settings
		// weather location
		if (settings.location != null) { weatherLocation = settings.location } 
		else { weatherLocation = defaultSettings.location }
		// weather auto refresh
		if (settings.weatherAutoRefresh != undefined) { weatherAutoRefresh = settings.weatherAutoRefresh } 
		else { weatherAutoRefresh = defaultSettings.weatherAutoRefresh }
		// -- duration
		if (settings.weatherAutoRefreshDuration != undefined) { weatherAutoRefreshDuration = settings.weatherAutoRefreshDuration } 
		else { weatherAutoRefreshDuration = defaultSettings.weatherAutoRefreshDuration }

		// prevent timing out the API (again) - add validation and put this in the save setting function
		if (weatherAutoRefreshDuration < 1) { // 1 minute
			weatherAutoRefreshDuration = 1 
			 console.log("Error: Weather Auto Refresh Rate Invalid.");
		}

		setTimeout(weatherRefresherSetup, 1000 * 60 * weatherAutoRefreshDuration);
		
		function weatherRefresherSetup() {
			if (weatherAutoRefresh) { LoadWeatherPanel(weatherLocation) };
			autoRefreshWeather();
		}
	}
	autoRefreshWeather();
	
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
					url: "https://api.openweathermap.org/data/3.0/onecall?lat=" + lat + "&lon=" + long + "&lang=en&units=imperial&appid=" + wKey,
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
							let alertColor = 'indianred';
							for (let i = 0; i < result.alerts.length; i ++){

								let name = result.alerts[i].event;
								let sender = '<u><br>' + result.alerts[i].sender_name + '</u>';
								let desc = '<br><span style="white-space:pre-wrap">' + result.alerts[i].description + "</span>";

								console.log(result.alerts[i].tags);
								console.log("(^add me as a custom alert icon");
								console.log(name);

								if (result.alerts[i].tags.includes("Snow/Ice") || name.includes("Winter Storm")) { icon = '<i class="fa-solid fa-snowflake"; style=color:' + alertColor + '></i>'; } 
								else if (result.alerts[i].tags.includes("Wind")) { icon = '<i class="fa-solid fa-wind"; style=color:' + alertColor + '></i>'; } 
								else if (result.alerts[i].tags.includes("Thunderstorm")) { icon = '<i class="fa-solid fa-cloud-bolt"; style=color:' + alertColor + '></i>'; } 
								else if (result.alerts[i].tags.includes("Tornado")) { icon = '<i class="fa-solid fa-tornado"; style=color:' + alertColor + '></i>'; } 
								else if (result.alerts[i].tags.includes("Extreme temperature value")) { icon = '<i class="fa-solid fa-temperature-full"; style=color:' + alertColor + '></i>'; }
								else if (name.includes("Air Quality")) { icon = '<i class="fa-solid fa-lungs"; style=color:' + alertColor + '></i>'; } 
								else if (name.includes("Flood")) { icon = '<i class="fa-solid fa-house-flood-water"; style=color:' + alertColor + '></i>'; } 
								else if (name.includes("Fog")) { icon = '<i class="fa-solid fa-smog"; style=color:' + alertColor + '></i>'; }
								else if (name.includes("Frost") || name.includes("Freeze")) { icon = '<i class="fa-solid fa-icicles"; style=color:' + alertColor + '></i>'; } 
								else if (name.includes("Heat Advisory") || name.includes("Excessive Heat")) { icon = '<i class="fa-solid fa-temperature-half"; style=color:' + alertColor + '></i>'; } 
								else { icon = '<i class="fa-solid fa-circle-exclamation"; style=color:' + alertColor + '></i>'; }

								alertIcons += icon;
								alertBody += "<span style='font-size:medium'>" + icon + " " + name + "</span>" + sender + desc;
						
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
						let columnQuantity = 6;
						let duration = parseInt($("#hourlyDurationSlider").val());
						let hourlyColumns = "";
						for (let i = duration; i < duration * (columnQuantity + 1); i += duration){
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
						let windSpeed = Math.round(result.current.wind_speed);
						if ( result.current.wind_gust != undefined ) { gust = "-" + Math.round(result.current.wind_gust); } 
						else { gust = ""; }
						$("#weather-extra-wind").html('<i class="fa-solid fa-lg fa-wind weather-extra-icon" style="color:lightsteelblue"></i><br>Wind Speed<br>' + windSpeed + gust + ' mph');
						
						// Humidity
						let humidity = result.current.humidity;
						$("#weather-extra-humidity").html('<i class="fa-solid fa-lg fa-droplet weather-extra-icon" style="color:cornflowerblue"></i><br>Humidity<br>' + humidity + '%');
						
						// Dewpoint
						let dewpoint = Math.round(result.current.dew_point);
						let dewpointColor = "";
						let dewpointIcon = "";
						let dewpointText = "";
						if (dewpoint < 60) { dewpointColor = "aliceblue"; dewpointIcon = "fa-temperature-empty"; dewpointText = "Pleasant"}
						else if (dewpoint >= 60 && dewpoint < 65) { dewpointColor = "khaki"; dewpointIcon = "fa-temperature-quarter"; dewpointText = "Sticky"}
						else if (dewpoint >= 65 && dewpoint < 70) { dewpointColor = "goldenrod"; dewpointIcon = "fa-temperature-half"; dewpointText = "Uncomfortable"}
						else if (dewpoint >= 70 && dewpoint < 75) { dewpointColor = "orangered"; dewpointIcon = "fa-temperature-three-quarters"; dewpointText = "Oppressive"}
						else if (dewpoint >= 75) { dewpointColor = "crimson"; dewpointIcon = "fa-temperature-full"; dewpointText = "Miserable"}
						$("#weather-extra-dewpoint").html('<i class="fa-solid fa-lg ' + dewpointIcon + ' weather-extra-icon" style="color:' + dewpointColor + '"></i><br>Dewpoint<br>' + dewpoint + "&deg; | " + dewpointText);

						// Moon phases | moon.js
						let moonPhase = result.daily[0].moon_phase;
						$("#weather-extra-moon").html('<img src="assets/moonphases/' + moonPhaseInfo(moonPhase).image + '"><br>Moon Phase<br>' + moonPhaseInfo(moonPhase).text);
						if ( moonPhaseInfo(moonPhase).text == "Full Moon" ){
							$("#weather-extra-moon img").addClass("moon-glow");
							$("#full-moon-icon").html('<img src="assets/moonphases/fullmoon.png" class="moon-glow" title="Full Moon">');
						}

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
								console.log("FAILED to load air pollution data.");
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

						stopDotAnimation();
					},
					error: function (error) {
						console.log(error);
						$("#temp-text").html("<p>Failed to Load Weather Data</p>");
						stopDotAnimation();
					}
				});
			},
			error: function (error) {
				console.log(error);
				$("#temp-text").html("<p>Failed to Load Location Data</p>");
				stopDotAnimation();
			}
		});
	}
});