function checkHoliday (month, day, dayOfWeek) {
    let holidays = [];
    for (let i = 0; i < holidayArray.length; i++){
        // "normal" holidays
        if (holidayArray[i].day == null) {
            if (day == holidayArray[i].day_one && month == holidayArray[i].month) {
                holidays.push(holidayArray[i].holiday_name);
            }
        // "Friday the 13th"
        } else if (holidayArray[i].month == null) {
            if (day == holidayArray[i].day_one && dayOfWeek == holidayArray[i].day) {
                holidays.push(holidayArray[i].holiday_name);
            }
        } else { // everything else AKA day of week / date based
            if (dayOfWeek == holidayArray[i].day && month == holidayArray[i].month && day >= holidayArray[i].day_one && day <= holidayArray[i].day_two) {
                holidays.push(holidayArray[i].holiday_name);
            }
        }
    }
    return holidays;
}

const holidayArray = [
    // NORMAL HOLIDAYS
    {
        "holiday_name" : "New Year's Day",
        "month" : 1,
        "day_one" : 1,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "Groundhog Day",
        "month" : 2,
        "day_one" : 2,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "Valentine's Day &hearts;",
        "month" : 2,
        "day_one" : 14,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "&Pi; Day",
        "month" : 3,
        "day_one" : 14,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "St. Patrick's Day",
        "month" : 3,
        "day_one" : 17,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "April Fools' Day",
        "month" : 4,
        "day_one" : 1,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "4:20",
        "month" : 4,
        "day_one" : 20,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "Earth Day",
        "month" : 4,
        "day_one" : 22,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "Star Wars Day",
        "month" : 5,
        "day_one" : 4,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "Cinco de Mayo",
        "month" : 5,
        "day_one" : 5,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "Juneteenth",
        "month" : 6,
        "day_one" : 19,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "Independence Day",
        "month" : 7,
        "day_one" : 4,
        "day_two" : null,
        "day" : null
    },{
        "holiday_name" : "Halloween",
        "month" : 10,
        "day_one" : 31,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "Veterans' Day",
        "month" : 11,
        "day_one" : 11,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "Christmas Eve",
        "month" : 12,
        "day_one" : 24,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "Christmas Day",
        "month" : 12,
        "day_one" : 25,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "New Year's Eve",
        "month" : 12,
        "day_one" : 31,
        "day_two" : null,
        "day" : null
    },
    // DAY / DAY NAME HOLIDAYS
    {
        "holiday_name" : "Martin Luther King, Jr. Day", // Third Monday in Jan.
        "month" : 1,
        "day_one" : 15,
        "day_two" : 21,
        "day" : 1
    },
    {
        "holiday_name" : "Presidents' Day", // Third Monday in Feb.
        "month" : 2,
        "day_one" : 15,
        "day_two" : 21,
        "day" : 1
    },
    {
        "holiday_name" : "Mothers' Day", // Second Sunday in May
        "month" : 5,
        "day_one" : 8,
        "day_two" : 14,
        "day" : 0
    },
    {
        "holiday_name" : "Memorial Day", // Last Monday in May
        "month" : 5,
        "day_one" : 25,
        "day_two" : 31,
        "day" : 1
    },
    {
        "holiday_name" : "Fathers' Day", // Third Sunday in June
        "month" : 6,
        "day_one" : 15,
        "day_two" : 21,
        "day" : 0
    },
    {
        "holiday_name" : "Labor Day", // First Monday in Sep.
        "month" : 9,
        "day_one" : 1,
        "day_two" : 7,
        "day" : 1
    },
    {
        "holiday_name" : "Indigenous People's Day", // Second Monday in Oct. / F Columbus
        "month" : 10,
        "day_one" : 8,
        "day_two" : 14,
        "day" : 1
    },
    {
        "holiday_name" : "Thanksgiving Day", // Fourth Thursday in Nov.
        "month" : 11,
        "day_one" : 22,
        "day_two" : 28,
        "day" : 5
    },
    {
        "holiday_name" : "Friday the 13<sup>th</sup>",
        "month" : null,
        "day_one" : 13,
        "day_two" : null,
        "day" : 5
    },
    // BIRTHDAYS
    {
        "holiday_name" : "Dad's Birthday",
        "month" : 1,
        "day_one" : 19,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "Debbie's Birthday",
        "month" : 9,
        "day_one" : 13,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "Charli's Birthday",
        "month" : 5,
        "day_one" : 11,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "Anniversary &hearts;",
        "month" : 5,
        "day_one" : 15,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "Adam's Birthday",
        "month" : 11,
        "day_one" : 9,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "Cal's Birthday",
        "month" : 12,
        "day_one" : 8,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "Tim's Birthday",
        "month" : 12,
        "day_one" : 3,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "Amber's Birthday &hearts;",
        "month" : 12,
        "day_one" : 31,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "ET's Birthday",
        "month" : 7,
        "day_one" : 17,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "JT's Birthday",
        "month" : 7,
        "day_one" : 17,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "Evie's Birthday! &hearts;",
        "month" : 3,
        "day_one" : 5,
        "day_two" : null,
        "day" : null
    },
]
//console.log(checkHoliday(3,14,1));