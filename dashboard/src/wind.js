function windDirectionName(wd) {
    if ( wd > 348.75 || wd <= 11.25) { return "S" }
    else if ( wd > 11.25 && wd <= 33.75) { return "SSW" }
    else if ( wd > 33.75 && wd <= 56.25) { return "SW" }
    else if ( wd > 56.25 && wd <= 78.75) { return "WSW" }
    else if ( wd > 78.75 && wd <= 101.25) { return "W" }
    else if ( wd > 101.25 && wd <= 123.75) { return "WNW" }
    else if ( wd > 123.75 && wd <= 146.25) { return "NW" }
    else if ( wd > 146.25 && wd <= 168.75) { return "NNW" }
    else if ( wd > 168.75 && wd <= 191.25) { return "N" }
    else if ( wd > 191.25 && wd <= 213.75) { return "NNE" }
    else if ( wd > 213.75 && wd <= 236.25) { return "NE" }
    else if ( wd > 236.25 && wd <= 258.75) { return "ENE" }
    else if ( wd > 258.75 && wd <= 281.25) { return "E" }
    else if ( wd > 281.25 && wd <= 303.75) { return "ESE" }
    else if ( wd > 303.75 && wd <= 326.25) { return "SE" }
    else if ( wd > 326.25 && wd <= 348.75) { return "SSE" }
}
// Wind direction values represent where the wind is coming from, which is
// why the names are opposite what you might assume.