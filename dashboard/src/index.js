//window.addEventListener('DOMContentLoaded', mainFunction);

//function mainFunction() {
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
    const zodiacSymbols = {
        "Aries" : "\u2648",
        "Gemini" : "\u264a",
        "Leo" : "\u264c",
        "Libra" : "\u264e",
        "Sagittarius" : "\u2650",
        "Aquarius" : "\u2652",
        "Taurus" : "\u2649",
        "Cancer" : "\u264b",
        "Virgo" : "\u264d",
        "Scorpio" : "\u264f",
        "Capricorn" : "\u2651",
        "Pisces" : "\u2653"
    };
    function zodiac(day, month){  
        var zodiac =['', 'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn']; 
        var last_day =['', 19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19]; 
        return (day > last_day[month]) ? zodiac[month*1 + 1] : zodiac[month]; 
    } 
    const zSign = zodiacSymbols[zodiac(day, month)];
    
    const output = monthLong + " " + day + ", " + d.getFullYear() + " "+ zSign;
    $("#date-text").text(output);
    
    // WEATHER
    // https://openweathermap.org/api/one-call-api
    const wKey = config.WEATHER_API_KEY;
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/onecall?lat=35.55&lon=-97.61&units=imperial&appid=" + wKey,
        type: "GET",
        success: function(result) {
          console.log(result);
          const temp = result.current.temp;
          const feelsLike = result.current.feels_like;
          const s = temp + "°F (Feels like " + feelsLike + "°F)";
          $("#temp-text").text(s);
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