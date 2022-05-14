function checkHoliday (month, day, dayOfWeek) {
    let holidays = [];
    for (let i = 0; i < holidayArray.length; i++){
        // "normal" holidays
        if (holidayArray[i].day == null) {
            if (day == holidayArray[i].day_one && month == holidayArray[i].month) {
                holidays.push(holidayArray[i].holiday_name);
            }
        // "day of week / date based"
        } else if (holidayArray[i].month == null) {
            if (day == holidayArray[i].day_one && dayOfWeek == holidayArray[i].day) {
                holidays.push(holidayArray[i].holiday_name);
            }
        }
    }
    return holidays;
}

const holidayArray = [
    {
        "holiday_name" : "Wedding Anniversary <3",
        "month" : 5,
        "day_one" : 15,
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
    {
        "holiday_name" : "Amber's Birthday",
        "month" : 12,
        "day_one" : 31,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "ET Birthday",
        "month" : 7,
        "day_one" : 17,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "Evie's Birthday!",
        "month" : 3,
        "day_one" : 5,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "Friday the 13<sup>th</sup>",
        "month" : null,
        "day_one" : 13,
        "day_two" : null,
        "day" : 5
    },
    {
        "holiday_name" : "Independence Day",
        "month" : 7,
        "day_one" : 4,
        "day_two" : null,
        "day" : null
    },
    {
        "holiday_name" : "Four Twenty",
        "month" : 4,
        "day_one" : 20,
        "day_two" : null,
        "day" : null
    },
]