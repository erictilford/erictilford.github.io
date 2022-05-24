function moonPhaseInfo(moon){
    let moontext = "";
    let moonimg = "";
    if (moon == 0 || moon == 1) {
        moontext = "New Moon";
        moonimg = "newmoon.png";
    } else if (moon > 0 && moon < 0.25) {
        moontext = "Waxing Crescent";
        moonimg = "waxingcrescent.png";
    } else if (moon == 0.25) {
        moontext = "First Quarter";
        moonimg = "firstquarter.png";
    } else if (moon > 0.25 && moon < 0.50) {
        moontext = "Waxing Gibbous";
        moonimg = "waxinggibbous.png";
    } else if (moon == 0.50) {
        moontext = "Full Moon";
        moonimg = "fullmoon.png";
    } else if (moon > 0.50 && moon < 0.75) {
        moontext = "Waning Gibbous";
        moonimg = "waninggibbous.png";
    } else if (moon == 0.75) {
        moontext = "Last Quarter";
        moonimg = "lastquarter.png";
    } else if (moon > 0.75 && moon < 1) {
        moontext = "Waning Crescent";
        moonimg = "waningcrescent.png";
    }
    return {
        "text" : moontext,
        "image" : moonimg
    }
}
/*
"0 and 1 are 'new moon', 0.25 is 'first quarter moon', 
0.5 is 'full moon' and 0.75 is 'last quarter moon'. The periods in 
between are called 'waxing crescent', 'waxing [gibbous]', 'waning [gibbous]', 
and 'waning crescent', respectively."
*/