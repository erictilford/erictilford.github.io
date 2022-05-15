$(document).ready(function () {

	// WALLPAPERS
	let randomWallpaper = wallpapers[Math.floor(Math.random() * wallpapers.length)];
	document.body.style.backgroundImage = "url('assets/backgrounds/" + randomWallpaper + "')";

  // LINKS
  // videos
  for (let i = 0; i < links.video.length; i++){
    const link = links.video[i];
    const li = '<li>' + link.icon + '<br>' + link.title + '<br>' + link.url + '</li>';
    $("#video-list").append(li);
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

	const todayHolidays = checkHoliday(month, day, d.getDay());
	for (let i = 0; i < todayHolidays.length; i++) {
		$("#holiday-names").append("<h6>" + todayHolidays[i] + "</h6>");
	}

	// ZODIAC
	const zodiacSymbols = {
		"Capricorn": ["\u2651", "The Goat"],
		"Aquarius": ["\u2652", "The Water Bearer"],
		"Pisces": ["\u2653", "The Fish"],
		"Aries": ["\u2648", "The Ram"],
		"Taurus": ["\u2649", "The Bull"],
		"Gemini": ["\u264a", "The Twins"],
		"Cancer": ["\u264b", "The Crab"],
		"Leo": ["\u264c", "The Lion"],
		"Virgo": ["\u264d", "The Virgin"],
		"Libra": ["\u264e", "The Scales"],
		"Scorpio": ["\u264f", "The Scorpion"],
		"Sagittarius": ["\u2650", "The Archer"]
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

	// WEATHER
	// https://openweathermap.org/api/one-call-api
	const wKey = config.WEATHER_API_KEY;
	$.ajax({
		url: "https://api.openweathermap.org/data/2.5/onecall?lat=35.55&lon=-97.61&lang=en&units=imperial&appid=" + wKey,
		type: "GET",
		success: function (result) {
			console.log(result);
			function OneDec(x) { return Math.round(x * 10) / 10 }
			const temp = OneDec(result.current.temp);
			const currentIcon = result.current.weather[0].icon;
			$("#current-weather-icon").attr("src", "https://openweathermap.org/img/wn/" + currentIcon + ".png");
			$("#current-weather-icon").attr("title", result.current.weather[0].description);
			$("#current-weather-text").text(" " + temp + "°");

			const todayHighTemp = OneDec(result.daily[0].temp.max);
			const todayLowTemp = OneDec(result.daily[0].temp.min);
			const feelsLike = OneDec(result.current.feels_like);
			const s =  /* todayHighTemp + "° / " + todayLowTemp + "°*/" (Feels like " + feelsLike + "°)";
			$("#temp-text").text(s);

			for (let i = 0; i < result.daily.length; i++) {
				let dayName = "";
				if (i == 0) {
					dayName = "Today";
				} else {
					const thisDay = new Date(d);
					thisDay.setDate(thisDay.getDate() + i);
					const todayHolidays = checkHoliday(thisDay.getMonth() + 1, thisDay.getDate(), thisDay.getDay());
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
				const pop = "<td class='daily-temp precip'><i style='filter: opacity(" + (result.daily[i].pop) + ");' class='fa-solid fa-droplet'></i> " + OneDec(result.daily[i].pop * 100) + "%</td>";
				const row = "<tr>" + dayname + pop + icon + high + low + "</tr>";
				$("#weather-table").append(row);
			}

			const uvi = result.current.uvi;
			let uvtext = "";
			let uvcolor = "";
			let uvicon = "fa-sun";
			if (uvi == 0) { uvtext = "-"; uvcolor = "aliceblue"; uvicon = "fa-moon" }
			else if (uvi > 0 && uvi < 3) { uvtext = "Low"; uvcolor = "khaki" }
			else if (uvi >= 3 && uvi < 6) { uvtext = "Moderate"; uvcolor = "goldenrod" }
			else if (uvi >= 6 && uvi < 8) { uvtext = "High"; uvcolor = "orangered" }
			else if (uvi >= 8 && uvi < 11) { uvtext = "Very High"; uvcolor = "crimson" }
			else if (uvi >= 11) { uvtext = "Extreme"; uvcolor = "magenta" }

			$("#weather-extra-uv").html('<i class="fa-solid fa-lg ' + uvicon + ' weather-extra-icon" style="color:' + uvcolor + '"></i><br>UV Index<br>' + uvtext /*+ " | " + result.current.uvi */);
			$("#weather-extra-wind").html('<i class="fa-solid fa-lg fa-wind weather-extra-icon" style="color:lightsteelblue"></i><br>Wind<br>' + result.current.wind_speed + ' mph');
			$("#weather-extra-humidity").html('<i class="fa-solid fa-lg fa-droplet weather-extra-icon" style="color:cornflowerblue"></i><br>Humidity<br>' + result.current.humidity + '%');
		},
		error: function (error) {
			console.log(error);
		}
	});
	// YYYY/MM/DD Format
	//var output = d.getFullYear() + '/' +
	//    ((''+month).length<2 ? '0' : '') + monthLong + '/' +
	//    ((''+day).length<2 ? '0' : '') + day;
});