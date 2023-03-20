function checkHoliday(month, day, dayOfWeek, year) {
    let holidays = [];
    for (let i = 0; i < holidayArray.length; i++) {
        let holidayName = "";
        let holidayNumberText = "";
        let holidayEmoji = "";
        // "normal" holidays
        if (holidayArray[i].day == null) {
            if (day == holidayArray[i].day_one && month == holidayArray[i].month) {
                holidayName = holidayArray[i].holiday_name
            }
            // "Friday the 13th"
        } else if (holidayArray[i].month == null) {
            if (day == holidayArray[i].day_one && dayOfWeek == holidayArray[i].day) {
                holidayName = holidayArray[i].holiday_name
            }
        } else { // everything else AKA day of week / date based
            if (dayOfWeek == holidayArray[i].day && month == holidayArray[i].month && day >= holidayArray[i].day_one && day <= holidayArray[i].day_two) {
                holidayName = holidayArray[i].holiday_name
            }
        }
        // emojis
        if (holidayName && holidayArray[i].emoji) {
            holidayEmoji = " " + holidayArray[i].emoji;
        }
        // anni / birthday years
        if (holidayName && holidayArray[i].year) {
            //console.log("current year = " + year);
            //console.log("holiday year = " + holidayArray[i].year);
            holidayNumberText = " #" + (year - holidayArray[i].year);
            //holidayEmoji = " " + holidayArray[i].emoji;
        }
        if (holidayName) {
            holidays.push(holidayName + holidayNumberText + holidayEmoji);
        }
    }
    return holidays;
}

const holidayArray = [
    // NORMAL HOLIDAYS
    {
        "holiday_name": "New Year's Day",
        "month": 1,
        "day_one": 1,
        "day_two": null,
        "day": null,
        "emoji": "&#128197;"
    },
    {
        "holiday_name": "Groundhog Day",
        "month": 2,
        "day_one": 2,
        "day_two": null,
        "day": null,
        "emoji": "&#128063;&#65039;"
    },
    {
        "holiday_name": "Valentine's Day",
        "month": 2,
        "day_one": 14,
        "day_two": null,
        "day": null,
        "emoji": "&hearts;"
    },
    {
        "holiday_name": "&Pi; Day",
        "month": 3,
        "day_one": 14,
        "day_two": null,
        "day": null,
        "emoji": null
    },
    {
        "holiday_name": "St. Patrick's Day",
        "month": 3,
        "day_one": 17,
        "day_two": null,
        "day": null,
        "emoji": "&#127808;"
    },
    {
        "holiday_name": "April Fools' Day",
        "month": 4,
        "day_one": 1,
        "day_two": null,
        "day": null,
        "emoji": "&#127183;"
    },
    {
        "holiday_name": "4:20",
        "month": 4,
        "day_one": 20,
        "day_two": null,
        "day": null,
        "emoji": "&#127807;"
    },
    {
        "holiday_name": "Earth Day",
        "month": 4,
        "day_one": 22,
        "day_two": null,
        "day": null,
        "emoji": "&#127758;"
    },
    {
        "holiday_name": "Star Wars Day",
        "month": 5,
        "day_one": 4,
        "day_two": null,
        "day": null,
        "emoji": "&#10024;"
    },
    {
        "holiday_name": "Cinco de Mayo",
        "month": 5,
        "day_one": 5,
        "day_two": null,
        "day": null,
        "emoji": "&#127790;"
    },
    {
        "holiday_name": "Flag Day",
        "month": 6,
        "day_one": 14,
        "day_two": null,
        "day": null,
        "emoji": "&#127988;&#8205;&#9760;&#65039;"
    },
    {
        "holiday_name": "Juneteenth",
        "month": 6,
        "day_one": 19,
        "day_two": null,
        "day": null,
        "emoji": "&#9994;&#127999;"
    },
    {
        "holiday_name": "Independence Day",
        "month": 7,
        "day_one": 4,
        "day_two": null,
        "day": null,
        "emoji": "&#127878;"
    },
    {
        "holiday_name": "Bastille Day",
        "month": 7,
        "day_one": 14,
        "day_two": null,
        "day": null,
        "emoji": "	&#129366;"
    },
    {
        "holiday_name": "Halloween",
        "month": 10,
        "day_one": 31,
        "day_two": null,
        "day": null,
        "emoji": "&#127875;"
    },
    {
        "holiday_name": "Veterans' Day",
        "month": 11,
        "day_one": 11,
        "day_two": null,
        "day": null,
        "emoji": "&#127894;&#65039;"
    },
    {
        "holiday_name": "Christmas Eve",
        "month": 12,
        "day_one": 24,
        "day_two": null,
        "day": null,
        "emoji": "&#127877;&#127995;"
    },
    {
        "holiday_name": "Christmas Day",
        "month": 12,
        "day_one": 25,
        "day_two": null,
        "day": null,
        "emoji": "&#127876;"
    },
    {
        "holiday_name": "New Year's Eve",
        "month": 12,
        "day_one": 31,
        "day_two": null,
        "day": null,
        "emoji": "&#129346;"
    },
    // DAY / DAY NAME HOLIDAYS
    {
        "holiday_name": "MLK Day", // Third Monday in Jan.
        "month": 1,
        "day_one": 15,
        "day_two": 21,
        "day": 1,
        "emoji": null
    },
    {
        "holiday_name": "Presidents' Day", // Third Monday in Feb.
        "month": 2,
        "day_one": 15,
        "day_two": 21,
        "day": 1,
        "emoji": null
    },
    {
        "holiday_name": "Mothers' Day", // Second Sunday in May
        "month": 5,
        "day_one": 8,
        "day_two": 14,
        "day": 0,
        "emoji": "&#128144;"
    },
    {
        "holiday_name": "Memorial Day", // Last Monday in May
        "month": 5,
        "day_one": 25,
        "day_two": 31,
        "day": 1,
        "emoji": "&#128367;&#65039;"
    },
    {
        "holiday_name": "Fathers' Day", // Third Sunday in June
        "month": 6,
        "day_one": 15,
        "day_two": 21,
        "day": 0,
        "emoji": "&#128104;"
    },
    {
        "holiday_name": "Labor Day", // First Monday in Sep.
        "month": 9,
        "day_one": 1,
        "day_two": 7,
        "day": 1,
        "emoji": "&#127970;"
    },
    {
        "holiday_name": "Grandparents Day", // Sunday after Labor Day
        "month": 9,
        "day_one": 7,
        "day_two": 13,
        "day": 0,
        "emoji": "	&#128117;"
    },
    {
        "holiday_name": "Indigenous People's Day", // Second Monday in Oct. / F Columbus
        "month": 10,
        "day_one": 8,
        "day_two": 14,
        "day": 1,
        "emoji": "&#127993;"
    },
    {
        "holiday_name": "Thanksgiving", // Fourth Thursday in Nov.
        "month": 11,
        "day_one": 22,
        "day_two": 28,
        "day": 4,
        "emoji": "&#129411;"
    },
    {
        "holiday_name": "Friday the 13<sup>th</sup>",
        "month": null,
        "day_one": 13,
        "day_two": null,
        "day": 5,
        "emoji": "&#128298;"
    },
    {
        "holiday_name": "Thursday the 20<sup>th</sup>",
        "month": null,
        "day_one": 20,
        "day_two": null,
        "day": 4,
        "emoji": "&#127908;"
    },
    // BIRTHDAYS
    {
        "holiday_name": "Dad",
        "month": 1,
        "day_one": 19,
        "day_two": null,
        "day": null,
        "year": 1957,
        "emoji": "&#127874;"
    },
    {
        "holiday_name": "Xavier",
        "month": 2,
        "day_one": 16,
        "day_two": null,
        "day": null,
        "year": 2022,
        "emoji": "&#129473;"
    },
    {
        "holiday_name": "Christina",
        "month": 3,
        "day_one": 24,
        "day_two": null,
        "day": null,
        "year": 1988,
        "emoji": "&#129473;"
    },
    {
        "holiday_name": "Debbie",
        "month": 9,
        "day_one": 13,
        "day_two": null,
        "day": null,
        "emoji": "&#127874;"
    },
    {
        "holiday_name": "Charli",
        "month": 5,
        "day_one": 11,
        "day_two": null,
        "day": null,
        "year": 2018,
        "emoji": "&#129473;"
    },
    {
        "holiday_name": "Anniversary",
        "month": 5,
        "day_one": 15,
        "day_two": null,
        "day": null,
        "year": 2020,
        "emoji": "&hearts;"
    },
    {
        "holiday_name": "Adam",
        "month": 11,
        "day_one": 9,
        "day_two": null,
        "day": null,
        "year": 1989,
        "emoji": "&#127874;"
    },
    {
        "holiday_name": "Cal",
        "month": 12,
        "day_one": 8,
        "day_two": null,
        "day": null,
        "year": 1987,
        "emoji": "&#127874;"
    },
    {
        "holiday_name": "Tim",
        "month": 12,
        "day_one": 3,
        "day_two": null,
        "day": null,
        "year": 1987,
        "emoji": "&#128104;&#127995;&#8205;&#9992;&#65039;"
    },
    {
        "holiday_name": "Amber",
        "month": 12,
        "day_one": 31,
        "day_two": null,
        "day": null,
        "year": 1984,
        "emoji": "	&#127856;"
    },
    {
        "holiday_name": "ET",
        "month": 7,
        "day_one": 17,
        "day_two": null,
        "day": null,
        "year": 1987,
        "emoji": "&#127874;"
    },
    {
        "holiday_name": "JT",
        "month": 7,
        "day_one": 17,
        "day_two": null,
        "day": null,
        "year": 1987,
        "emoji": "&#127874;"
    },
    {
        "holiday_name": "Evie",
        "month": 3,
        "day_one": 5,
        "day_two": null,
        "day": null,
        "year": 2022,
        "emoji": "&#127856;"
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
]
//console.log(checkHoliday(3,14,1));