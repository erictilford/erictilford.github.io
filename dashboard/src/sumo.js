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


function getBashoStatus() {
    const now = new Date();
    
    for (const basho of BASHO_DATES) {
        const start = new Date(basho.year, basho.month - 1, basho.first_day);
        const end = new Date(basho.year, basho.month - 1, basho.last_day);
        
        if (now >= start && now <= end) {
            const dayOfBasho = Math.floor((now - start) / (1000 * 60 * 60 * 24)) + 1;
            return `Currently in ${basho.month}/${basho.year} basho, day ${dayOfBasho}`;
        }
    }
    
    // Not in basho, find next
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
        return `Next basho starts in ${daysUntil} days (${nextBasho.month}/${nextBasho.first_day}/${nextBasho.year})`;
    } else {
        return "No upcoming bashos found";
    }
}

async function fetchBasho(bashoId) { // https://www.sumo-api.com/api-guide
  const url = `https://sumo-api.com/api/basho/${encodeURIComponent(bashoId)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Basho result:", data);
  } catch (error) {
    console.error("Failed to fetch basho:", error);
  }
}

// Replace with the actual bashoId you want (YYYYMM)
// fetchBasho(202603);

console.log(getBashoStatus());

$("#sumo-text").text(getBashoStatus());