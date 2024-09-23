function isLastDayOfMonth(date) {
    const today = date.getDate(); // Get the current day
    
    const nextDay = new Date(date); // Create a new date object for the next day
    nextDay.setDate(today + 1);
    
    return nextDay.getMonth() !== date.getMonth(); // Check if the next day is in a different month
}

let holidayYear = new Date().getFullYear();

function holidayIcon() { return 'fa-solid fa-gifts" style="color:#d577b3' } 

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function listHolidays(year){
    $("#holiday-body").html("");
    const leftArrow = '<i class="fa-solid fa-caret-left pointer" id="leftHolidayArrow"></i>'
    const rightArrow = '<i class="fa-solid fa-caret-right pointer" id="rightHolidayArrow"></i>'
    $("#holiday-title").html(leftArrow + " " + year + ' Holidays <i class="' + holidayIcon() + '"></i> ' + rightArrow);
    let date = new Date(year, 0, 1);
    let str = "";
    for (let i = 0; date.getFullYear() === year; i++) {
        if (date.getDate() == 1) {
            str += "<table class='holiday-table'><tbody>";
            str += "<tr><th colspan='2'>" + monthNames[date.getMonth()] + "</th></tr>";
        }
        let holidays = checkHoliday(date.getMonth() + 1, date.getDate(), date.getDay(), date.getFullYear());
        for (let i = 0; i < holidays.length; i++) {
            str += "<tr>"
            if (i == 0) {
                str += '<td style="text-align:right; padding: 0 10px">' + date.getDate() + '</td>';
            } else {
                str += "<td></td>";
            }
            str += '<td>' + holidays[i] + '</td></tr>';
        }
        if (isLastDayOfMonth(date)) { str += "</tbody></table>" }
        date.setDate(date.getDate() + 1);
    }
    $("#holiday-body").append(str);
    $("#leftHolidayArrow").click(function() {  
        holidayYear--;
        listHolidays(holidayYear);
    });
    $("#rightHolidayArrow").click(function() {  
        holidayYear++;
        listHolidays(holidayYear);
    });
}

function LoadHolidayButton(animSpeed) {
    //let daIcon = icon;
    //icon = 'fa-solid fa-calendar-days" style="color:darkcyan';
    $("#widget-list").append('<a id="holiday-button" class="pointer"><li><i class="fa-2x ' + holidayIcon() + '"></i><br>Holidays</li></a>');
    $("#close-holiday-button").click(function() { $("#holiday-panel").hide(animSpeed); });
    $("#holiday-button").click(function() {  
        $("#holiday-panel").toggle(animSpeed); 
        $('html,body').animate({
            scrollTop: $("#holiday-panel").offset().top
            });
    });
    $("#holiday-button").attr("title",  "Holiday List" );
}

function checkHoliday(month, day, dayOfWeek, year) {
    let holidays = [];
    for (let i = 0; i < holidayArray.length; i++) {
        let holidayName = "";
        let holidayNumberText = "";
        let holidayEmoji = "";
        // Standard and birthday/anni holidays
        if (holidayArray[i].type == "standard" || holidayArray[i].type == "birthday") {
            if (day == holidayArray[i].day_one && month == holidayArray[i].month) {
                if (!(holidayArray[i].year && year < holidayArray[i].year)) {
                    holidayName = holidayArray[i].holiday_name;
                } // only show bday type if year exists and is not in the past
            }
        // Day Name holidays
        } else if (holidayArray[i].type == "dayName") {
            // "Friday the 13th" style
            if (holidayArray[i].month == null && day == holidayArray[i].day_one && dayOfWeek == holidayArray[i].day) {
                holidayName = holidayArray[i].holiday_name;
            } 
            // everything else AKA day of week / date based
            else if (dayOfWeek == holidayArray[i].day && month == holidayArray[i].month && day >= holidayArray[i].day_one && day <= holidayArray[i].day_two) {
                holidayName = holidayArray[i].holiday_name;
            }
        // One-time holidays
        } else if (holidayArray[i].type == "oneTime") {
            if (day == holidayArray[i].day_one && month == holidayArray[i].month && year == holidayArray[i].year) {
                holidayName = holidayArray[i].holiday_name;
            }
        // Easter
        } else if (holidayArray[i].type == "easter") {
            holidayArray[i].dates.forEach(element => {
                if (day == element.day_one && month == element.month && year == element.year) {
                    holidayName = holidayArray[i].holiday_name;
                }   
            });
        }

        // Adding birthday/anni year #
        if (holidayArray[i].type == "birthday") {
            if (holidayName && holidayArray[i].year) {
                holidayNumberText = " #" + (year - holidayArray[i].year);
            }
        }
        
        // Adding Emoji
        if (holidayName && holidayArray[i].emoji) {
            holidayEmoji = " " + holidayArray[i].emoji;
        }
        
        if (holidayName) {
            holidays.push(holidayName + holidayNumberText + holidayEmoji);
        }

        if( isEquinoxOrSolstice(day, month, year) != null ) {
            holidays.push( isEquinoxOrSolstice(day, month, year) );
        }
    }
    return holidays;
}

const holidayArray = [
    // NORMAL HOLIDAYS
    //////////////////
    {
        "holiday_name": "New Year's Day",
        "month": 1,
        "day_one": 1,
        "day_two": null,
        "day": null,
        "emoji": "&#128197;",
        "type": "standard"
    },
    {
        "holiday_name": "Groundhog Day",
        "month": 2,
        "day_one": 2,
        "day_two": null,
        "day": null,
        "emoji": "&#128063;&#65039;",
        "type": "standard"
    },
    {
        "holiday_name": "Valentine's Day",
        "month": 2,
        "day_one": 14,
        "day_two": null,
        "day": null,
        "emoji": "&hearts;",
        "type": "standard"
    },
    {
        "holiday_name": "Leap Day",
        "month": 2,
        "day_one": 29,
        "day_two": null,
        "day": null,
        "emoji": "&#x1F438;",
        "type": "standard"
    },
    {
        "holiday_name": "Mario Day",
        "month": 3,
        "day_one": 10,
        "day_two": null,
        "day": null,
        "emoji": null,
        "type": "standard"
    },
    {
        "holiday_name": "311 Day",
        "month": 3,
        "day_one": 11,
        "day_two": null,
        "day": null,
        "emoji": null,
        "type": "standard"
    },
    {
        "holiday_name": "&Pi; Day",
        "month": 3,
        "day_one": 14,
        "day_two": null,
        "day": null,
        "emoji": null,
        "type": "standard"
    },
    {
        "holiday_name": "St. Patrick's Day",
        "month": 3,
        "day_one": 17,
        "day_two": null,
        "day": null,
        "emoji": "&#127808;",
        "type": "standard"
    },
    {
        "holiday_name": "April Fools' Day",
        "month": 4,
        "day_one": 1,
        "day_two": null,
        "day": null,
        "emoji": "&#127183;",
        "type": "standard"
    },
    /*
    {
        "holiday_name": "4:20",
        "month": 4,
        "day_one": 20,
        "day_two": null,
        "day": null,
        "emoji": "&#127807;"
    },
    */
    {
        "holiday_name": "Tax Day",
        "month": 4,
        "day_one": 15,
        "day_two": null,
        "day": null,
        "emoji": "&#x1F4B8;",
        "type": "standard"
    },
    {
        "holiday_name": "Earth Day",
        "month": 4,
        "day_one": 22,
        "day_two": null,
        "day": null,
        "emoji": "&#127758;",
        "type": "standard"
    },
    {
        "holiday_name": "Star Wars Day",
        "month": 5,
        "day_one": 4,
        "day_two": null,
        "day": null,
        "emoji": "&#10024;",
        "type": "standard"
    },
    {
        "holiday_name": "Cinco de Mayo",
        "month": 5,
        "day_one": 5,
        "day_two": null,
        "day": null,
        "emoji": "&#127790;",
        "type": "standard"
    },
    {
        "holiday_name": "Flag Day",
        "month": 6,
        "day_one": 14,
        "day_two": null,
        "day": null,
        "emoji": "&#127988;&#8205;&#9760;&#65039;",
        "type": "standard"
    },
    {
        "holiday_name": "Juneteenth",
        "month": 6,
        "day_one": 19,
        "day_two": null,
        "day": null,
        "emoji": "&#9994;&#127999;",
        "type": "standard"
    },
    {
        "holiday_name": "July 4<sup>th</sup>",
        "month": 7,
        "day_one": 4,
        "day_two": null,
        "day": null,
        "emoji": "&#127878;",
        "type": "standard"
    },
    {
        "holiday_name": "Bastille Day",
        "month": 7,
        "day_one": 14,
        "day_two": null,
        "day": null,
        "emoji": "	&#129366;",
        "type": "standard"
    },
    {
        "holiday_name": "Lori Bday",
        "month": 9,
        "day_one": 8,
        "day_two": null,
        "day": null,
        "emoji": "&#x1F485;",
        "type": "standard"
    },
    {
        "holiday_name": "Halloween",
        "month": 10,
        "day_one": 31,
        "day_two": null,
        "day": null,
        "emoji": "&#127875;",
        "type": "standard"
    },
    {
        "holiday_name": "Veterans' Day",
        "month": 11,
        "day_one": 11,
        "day_two": null,
        "day": null,
        "emoji": "&#127894;&#65039;",
        "type": "standard"
    },
    {
        "holiday_name": "Christmas Eve",
        "month": 12,
        "day_one": 24,
        "day_two": null,
        "day": null,
        "emoji": "&#127877;&#127995;",
        "type": "standard"
    },
    {
        "holiday_name": "Christmas Day",
        "month": 12,
        "day_one": 25,
        "day_two": null,
        "day": null,
        "emoji": "&#127876;",
        "type": "standard"
    },
    {
        "holiday_name": "New Year's Eve",
        "month": 12,
        "day_one": 31,
        "day_two": null,
        "day": null,
        "emoji": "&#129346;",
        "type": "standard"
    },

    // DAY / DAY NAME HOLIDAYS
    //////////////////////////
    {
        "holiday_name": "MLK Day", // Third Monday in Jan.
        "month": 1,
        "day_one": 15,
        "day_two": 21,
        "day": 1,
        "emoji": null,
        "type": "dayName"
        
    },
    {
        "holiday_name": "Presidents' Day", // Third Monday in Feb.
        "month": 2,
        "day_one": 15,
        "day_two": 21,
        "day": 1,
        "emoji": null,
        "type": "dayName"
    },
    {
        "holiday_name": "DST Begins", // Second Sunday in March
        "month": 3,
        "day_one": 8,
        "day_two": 14,
        "day": 0,
        "emoji": "&#9193;",
        "type": "dayName"
    },
    {
        "holiday_name": "Mothers' Day", // Second Sunday in May
        "month": 5,
        "day_one": 8,
        "day_two": 14,
        "day": 0,
        "emoji": "&#128144;",
        "type": "dayName"
    },
    {
        "holiday_name": "Memorial Day", // Last Monday in May
        "month": 5,
        "day_one": 25,
        "day_two": 31,
        "day": 1,
        "emoji": "&#128367;&#65039;",
        "type": "dayName"
    },
    {
        "holiday_name": "Fathers' Day", // Third Sunday in June
        "month": 6,
        "day_one": 15,
        "day_two": 21,
        "day": 0,
        "emoji": "&#128104;",
        "type": "dayName"
    },
    {
        "holiday_name": "Labor Day", // First Monday in Sep.
        "month": 9,
        "day_one": 1,
        "day_two": 7,
        "day": 1,
        "emoji": "&#127970;",
        "type": "dayName"
    },
    {
        "holiday_name": "Grandparents Day", // Sunday after Labor Day
        "month": 9,
        "day_one": 7,
        "day_two": 13,
        "day": 0,
        "emoji": "	&#128117;",
        "type": "dayName"
    },
    {
        "holiday_name": "Indigenous People's Day", // Second Monday in Oct. / F Columbus
        "month": 10,
        "day_one": 8,
        "day_two": 14,
        "day": 1,
        "emoji": "",
        "type": "dayName"
    },
    {
        "holiday_name": "DST Ends", // First Sunday in Nov.
        "month": 11,
        "day_one": 1,
        "day_two": 7,
        "day": 0,
        "emoji": "&#9194;",
        "type": "dayName"
    },
    {
        "holiday_name": "Thanksgiving", // Fourth Thursday in Nov.
        "month": 11,
        "day_one": 22,
        "day_two": 28,
        "day": 4,
        "emoji": "&#129411;",
        "type": "dayName"
    },
    {
        "holiday_name": "Friday the 13<sup>th</sup>",
        "month": null,
        "day_one": 13,
        "day_two": null,
        "day": 5,
        "emoji": "&#128298;",
        "type": "dayName"
    },
    {
        "holiday_name": "Thursday the 20<sup>th</sup>",
        "month": null,
        "day_one": 20,
        "day_two": null,
        "day": 4,
        "emoji": "&#127908;",
        "type": "dayName"
    },
    // BIRTHDAYS
    ////////////
    {
        "holiday_name": "Dad",
        "month": 1,
        "day_one": 19,
        "day_two": null,
        "day": null,
        "year": 1957,
        "emoji": "&#127874;",
        "type": "birthday"
    },
    {
        "holiday_name": "Xavier",
        "month": 2,
        "day_one": 16,
        "day_two": null,
        "day": null,
        "year": 2022,
        "emoji": "&#129473;",
        "type": "birthday"
    },
    {
        "holiday_name": "Christina",
        "month": 3,
        "day_one": 8,
        "day_two": null,
        "day": null,
        "year": 1988,
        "emoji": "&#129473;",
        "type": "birthday"
    },
    {
        "holiday_name": "Debbie",
        "month": 9,
        "day_one": 13,
        "day_two": null,
        "day": null,
        "emoji": "&#127874;",
        "type": "birthday"
    },
    {
        "holiday_name": "Charli",
        "month": 5,
        "day_one": 11,
        "day_two": null,
        "day": null,
        "year": 2018,
        "emoji": "&#129473;",
        "type": "birthday"
    },
    {
        "holiday_name": "Anniversary",
        "month": 5,
        "day_one": 15,
        "day_two": null,
        "day": null,
        "year": 2020,
        "emoji": "&hearts;",
        "type": "birthday"
    },
    {
        "holiday_name": "Ian",
        "month": 6,
        "day_one": 6,
        "day_two": null,
        "day": null,
        "year": 2024,
        "emoji": "&#129473;",
        "type": "birthday"
    },
    {
        "holiday_name": "Otto",
        "month": 10,
        "day_one": 6,
        "day_two": null,
        "day": null,
        "year": 2020,
        "emoji": "&#x1F9B4;",
        "type": "birthday"
    },
    {
        "holiday_name": "Evan",
        "month": 11,
        "day_one": 8,
        "day_two": null,
        "day": null,
        "year": 1992,
        "emoji": "&#x1F46E;&#x200D;&#x2642;&#xFE0F;",
        "type": "birthday"
    },
    {
        "holiday_name": "Adam",
        "month": 11,
        "day_one": 9,
        "day_two": null,
        "day": null,
        "year": 1989,
        "emoji": "&#127874;",
        "type": "birthday"
    },
    {
        "holiday_name": "Cal",
        "month": 12,
        "day_one": 8,
        "day_two": null,
        "day": null,
        "year": 1987,
        "emoji": "&#x1F3BC;",
        "type": "birthday"
    },
    {
        "holiday_name": "Tim",
        "month": 12,
        "day_one": 3,
        "day_two": null,
        "day": null,
        "year": 1987,
        "emoji": "&#128104;&#127995;&#8205;&#9992;&#65039;",
        "type": "birthday"
    },
    {
        "holiday_name": "Amber",
        "month": 12,
        "day_one": 31,
        "day_two": null,
        "day": null,
        "year": 1984,
        "emoji": "	&#127856;",
        "type": "birthday"
    },
    {
        "holiday_name": "ET",
        "month": 7,
        "day_one": 17,
        "day_two": null,
        "day": null,
        "year": 1987,
        "emoji": "&#127874;",
        "type": "birthday"
    },
    {
        "holiday_name": "JT",
        "month": 7,
        "day_one": 17,
        "day_two": null,
        "day": null,
        "year": 1987,
        "emoji": "&#127874;",
        "type": "birthday"
    },
    {
        "holiday_name": "Evie",
        "month": 3,
        "day_one": 5,
        "day_two": null,
        "day": null,
        "year": 2022,
        "emoji": "&#127856;",
        "type": "birthday"
    },
    /*
    {
        "holiday_name": "John Doe",
        "month": 6,
        "day_one": 3,
        "day_two": null,
        "day": null,
        "year": 2005,
        "emoji": "	&#127856;"
    },
    */
    // ONE-TIME HOLIDAYS
    ////////////////////
    {
        "holiday_name": "Survivor 47",
        "month": 9,
        "day_one": 19,
        "day_two": null,
        "day": null,
        "year": 2024,
        "emoji": "&#x1F3DD;&#xFE0F;",
        "type": "oneTime"
    },
    {
        "holiday_name": "Terry ",
        "month": 9,
        "day_one": 24,
        "day_two": null,
        "day": null,
        "year": 2024,
        "emoji": "&#x1F9E2;",
        "type": "oneTime"
    },
    {
        "holiday_name": "SMB Wonder",
        "month": 10,
        "day_one": 20,
        "day_two": null,
        "day": null,
        "year": 2023,
        "emoji": "&#11088;",
        "type": "oneTime"
    },
    {
        "holiday_name": "Mario RPG",
        "month": 11,
        "day_one": 17,
        "day_two": null,
        "day": null,
        "year": 2023,
        "emoji": "&#128176;",
        "type": "oneTime"
    },
    {
        "holiday_name": "Cabin Ladz",
        "month": 11,
        "day_one": 10,
        "day_two": null,
        "day": null,
        "year": 2023,
        "emoji": "&#x1F3D5;&#xFE0F;",
        "type": "oneTime"
    },

    // EASTER
    {
        "holiday_name": "Easter",
        "dates": [
            {"month": 3, "day_one": 31, "year": 2024},
            {"month": 4, "day_one": 20, "year": 2025},
            {"month": 4, "day_one": 5, "year": 2026},
            {"month": 3, "day_one": 28, "year": 2027},
            {"month": 4, "day_one": 16, "year": 2028},
            {"month": 4, "day_one": 1, "year": 2029},
            {"month": 4, "day_one": 21, "year": 2030},
            {"month": 4, "day_one": 13, "year": 2031},
            {"month": 3, "day_one": 28, "year": 2032},
            {"month": 4, "day_one": 17, "year": 2033},
            {"month": 4, "day_one": 9, "year": 2034},
            {"month": 3, "day_one": 25, "year": 2035},
            {"month": 4, "day_one": 13, "year": 2036},
            {"month": 4, "day_one": 5, "year": 2037},
            {"month": 4, "day_one": 25, "year": 2038},
            {"month": 4, "day_one": 10, "year": 2039},
            {"month": 4, "day_one": 1, "year": 2040},
            {"month": 4, "day_one": 21, "year": 2041},
            {"month": 4, "day_one": 6, "year": 2042},
            {"month": 3, "day_one": 29, "year": 2043},
            {"month": 4, "day_one": 17, "year": 2044},
        ],
        "emoji": "&#x1F423;",
        "type": "easter"
    }

]

listHolidays(holidayYear); 