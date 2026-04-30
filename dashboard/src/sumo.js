function LoadSumo(animSpeed) {
    icon = 'fa-solid fa-torii-gate " style="color:#b10041';
    $("#sumo-title").append(' <i class=" ' + icon + '">');
    $("#widget-list").append('<a id="sumo-button" class="pointer"><li><i class="fa-2x ' + icon + '"></i><br>Sumo</li></a>');
    $("#close-sumo-button").click(function() { $("#sumo-panel").hide(animSpeed); });
    $("#sumo-button").click(function() {  
        $("#sumo-panel").toggle(animSpeed); 
        $('html,body').animate({
            scrollTop: $("#sumo-panel").offset().top
            });
    });
    $("#sumo-button").attr("title",  "Sumo" );  
}

const BASHO_MONTHS = [
    {
        "month": 1,
        "name": "January Tournament",
        "jp_name": "Hatsu Basho",
        "jp_name_kana": "初場所",
        "nickname": "New Year Basho"
    },
    {
        "month": 3,
        "name": "March Tournament",
        "jp_name": "Haru Basho",
        "jp_name_kana": "春場所",
        "nickname": "Spring Basho"
    },
    {
        "month": 5,
        "name": "May Tournament",
        "jp_name": "Natsu Basho",
        "jp_name_kana": "夏場所",
        "nickname": "Summer Basho"
    },
    {
        "month": 7,
        "name": "July Tournament",
        "jp_name": "Nagoya Basho",
        "jp_name_kana": "名古屋場所",
        "nickname": "Summer Basho"
    },
    {
        "month": 9,
        "name": "September Tournament",
        "jp_name": "Aki Basho",
        "jp_name_kana": "秋場所",
        "nickname": "Autumn Basho"
    },
    {
        "month": 11,
        "name": "November Tournament",
        "jp_name": "Kyushu Basho",
        "jp_name_kana": "九州場所",
        "nickname": "Autumn Basho"
    }
]

const BASHO_DATES = [
    { 
        "month": 1,
        "year": 2026,
        "first_day" : 11,
        "last_day" : 25,
        "venue": "Kokugikan",
    },
    { 
        "month": 3,
        "year": 2026,
        "first_day" : 8,
        "last_day" : 22,
        "venue": "EDION Arena Osaka (Osaka Prefectural Gymnasium)",
    },
    { 
        "month": 5,
        "year": 2026,
        "first_day" : 10,
        "last_day" : 24,
        "venue": "Kokugikan",
    },
    { 
        "month": 7,
        "year": 2026,
        "first_day" : 12,
        "last_day" : 26,
        "venue": "IG Arena",
    },
    { 
        "month": 9,
        "year": 2026,
        "first_day" : 13,
        "last_day" : 27,
        "venue": "Kokugikan",
    },
    { 
        "month": 11,
        "year": 2026,
        "first_day" : 8,
        "last_day" : 22,
        "venue": "Fukuoka Kokusai Center",
    },
    { 
        "month": 1,
        "year": 2027,
        "first_day" : 10,
        "last_day" : 24,
        "venue": "Kokugikan",
    },
    { 
        "month": 3,
        "year": 2027,
        "first_day" : 14,
        "last_day" : 28,
        "venue": "EDION Arena Osaka (Osaka Prefectural Gymnasium)",
    },
    { 
        "month": 5,
        "year": 2027,
        "first_day" : 9,
        "last_day" : 23,
        "venue": "Kokugikan",
    },
    { 
        "month": 7,
        "year": 2027,
        "first_day" : 11,
        "last_day" : 25,
        "venue": "IG Arena",
    },
    { 
        "month": 9,
        "year": 2027,
        "first_day" : 12,
        "last_day" : 26,
        "venue": "Kokugikan",
    },
    { 
        "month": 11,
        "year": 2027,
        "first_day" : 14,
        "last_day" : 28,
        "venue": "Fukuoka Kokusai Center",
    },
]

function getBashoID() {
    const now = new Date();
    
    // Check if we're currently in a basho
    for (const basho of BASHO_DATES) {
        const start = new Date(basho.year, basho.month - 1, basho.first_day);
        const end = new Date(basho.year, basho.month - 1, basho.last_day);
        
        if (now >= start && now <= end) {
            return `${basho.year}${String(basho.month).padStart(2, '0')}`;
        }
    }
    
    // Not in a basho, find the previous one
    let prevBasho = null;
    let maxDiff = -Infinity;
    
    for (const basho of BASHO_DATES) {
        const end = new Date(basho.year, basho.month - 1, basho.last_day);
        if (end < now) {
            const diff = now - end;
            if (diff > maxDiff) {
                maxDiff = diff;
                prevBasho = basho;
            }
        }
    }
    
    if (prevBasho) {
        return `${prevBasho.year}${String(prevBasho.month).padStart(2, '0')}`;
    }
    
    return null;
}

function setSumoText() {
    const now = new Date();
    
    // Check if we're currently in a basho
    for (const basho of BASHO_DATES) {
        const start = new Date(basho.year, basho.month - 1, basho.first_day);
        const end = new Date(basho.year, basho.month - 1, basho.last_day);
        
        if (now >= start && now <= end) {
            const dayOfBasho = Math.floor((now - start) / (1000 * 60 * 60 * 24)) + 1;
            const bashoInfo = BASHO_MONTHS.find(m => m.month === basho.month);
            $("#sumo-text").html(`Day ${dayOfBasho} of basho:<br>${bashoInfo.name} / ${bashoInfo.jp_name_kana}`);
            return;
        }
    }
    
    // Not in a basho, find next and display days until
    let nextBasho = null;
    let minDiff = Infinity;
    
    for (const basho of BASHO_DATES) {
        const start = new Date(basho.year, basho.month - 1, basho.first_day);
        if (start > now) {
            const diff = start - now;
            if (diff < minDiff) {
                minDiff = diff;
                nextBasho = basho;
            }
        }
    }
    
    if (nextBasho) {
        const daysUntil = Math.ceil(minDiff / (1000 * 60 * 60 * 24));
        const bashoInfo = BASHO_MONTHS.find(m => m.month === nextBasho.month);
        $("#sumo-text").html(`${daysUntil} days until next basho<br>Next basho: ${bashoInfo.name} / ${bashoInfo.jp_name_kana}`);
    } else {
        $("#sumo-text").text("No upcoming bashos found");
    }
}

setSumoText();

//TODO - make a big function called buildSumoPanel that calls setSumoText and also builds the rest of the panel with info about the current basho, etc.



