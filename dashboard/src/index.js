$(document).ready(function() {
    
    // WALLPAPERS
    const wallpapers = [
        "6zwch8y1q4nz.jpg",
        "38bbDQM.jpg",
        "d2fd98f2a2dcb000de2c971a69879eff.jpg",
        "kcf4mtbjca231.jpg",
        "lxkpopzwbgq21.png",
        "nao5txxljprx.jpg",
        "T5fmI19.jpg",
        "X2qDwdN.jpg",
        "xygoflg84kf21.png"
    ];
    let randomWallpaper = wallpapers[Math.floor(Math.random() * wallpapers.length)];
    document.body.style.backgroundImage = "url('assets/backgrounds/"+ randomWallpaper +"')";

    // DATE
    const d = new Date();
    const month = d.getMonth()+1;
    const monthNames = ["January", "February", "March", "April", "May", "June",
     "July", "August", "September", "October", "November", "December"
    ];
    const monthLong = monthNames[month - 1];
    const day = d.getDate();
    const dateOutput = monthLong + " " + day + ", " + d.getFullYear();
    $("#date-text").text(dateOutput);

    // ZODIAC
    const zodiacSymbols = {
        "Aries" : ["\u2648" , "The Ram"],
        "Gemini" : ["\u264a", "The Twins"],
        "Leo" : ["\u264c", "The Lion"],
        "Libra" : ["\u264e", "The Scales"],
        "Sagittarius" : ["\u2650", "The Archer"],
        "Aquarius" : ["\u2652", "The Water Bearer"],
        "Taurus" : ["\u2649", "The Bull"],
        "Cancer" : ["\u264b", "The Crab"],
        "Virgo" : ["\u264d", "The Virgin"],
        "Scorpio" : ["\u264f", "The Scorpion"],
        "Capricorn" : ["\u2651", "The Goat"],
        "Pisces" : ["\u2653", "The Fish"]
    };
    function zodiac(day, month){  
        var zodiac =['', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn']; 
        var last_day =['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19]; 
        return (day > last_day[month]) ? zodiac[month*1 + 1] : zodiac[month]; 
    } 
    const zSign = zodiacSymbols[zodiac(day, month)][0];
    const zTitle = zodiacSymbols[zodiac(day, month)][1];
    $("#zodiac-symbol").text(zSign);
    $("#zodiac-symbol").attr("title" , zodiac(day,month) + ", " + zTitle);
    
    // WEATHER
    // https://openweathermap.org/api/one-call-api
    const wKey = config.WEATHER_API_KEY;
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/onecall?lat=35.55&lon=-97.61&lang=en&units=imperial&appid=" + wKey,
        type: "GET",
        success: function(result) {
          console.log(result);
          function OneDec (x) { return Math.round(x * 10) / 10 }
          const temp =  OneDec(result.current.temp);
          const currentIcon = result.current.weather[0].icon;
          $("#current-weather-icon").attr("src", "https://openweathermap.org/img/wn/" + currentIcon + ".png");
		  $("#current-weather-icon").attr("title", result.current.weather[0].description);
          $("#current-weather-text").text(temp + "°");
          
          const todayHighTemp = OneDec(result.daily[0].temp.max);
          const todayLowTemp = OneDec(result.daily[0].temp.min);
          const feelsLike = OneDec(result.current.feels_like);
          const s =  todayHighTemp + "° / " + todayLowTemp + "° (Feels like " + feelsLike + "°)";
          $("#temp-text").text(s);
          
          const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
          for (let i = 0; i < result.daily.length; i++) {
            let dn = "";
            if (i == 0) {
                dn = "Today";
            } else {
                let j = i;
                if (d.getDay() + i > 6) { j-=7; }
                dn = dayNames[d.getDay() + j];
            }
            const dayName = "<div class='div-table-col day-name' style='float:left;'>" + dn + "</div>";
            const icon = "<div class='div-table-col'><img class='weather-icon' src='https://openweathermap.org/img/wn/" + result.daily[i].weather[0].icon + ".png' title='" + result.daily[i].weather[0].description + "'></div>";
            const high = "<div class='div-table-col daily-temp'>" + OneDec(result.daily[i].temp.max) + "°</div>";
            const low = "<div class='div-table-col daily-temp'>" + OneDec(result.daily[i].temp.min) + "°</div>";
            const row = "<div class='div-table-row'>" + dayName + low + high + icon + "</div>";
            $("#weather-table").append(row);

          }
        },
        error: function(error) {
          console.log(error);
        }
    });
    // YYYY/MM/DD Format
    //var output = d.getFullYear() + '/' +
    //    ((''+month).length<2 ? '0' : '') + monthLong + '/' +
    //    ((''+day).length<2 ? '0' : '') + day;
});