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

const KIMARITE_NAMES = {
    "yorikiri": "Frontal Force Out",
    "oshidashi": "Frontal Push Out",
    "hatakikomi": "Slap Down",
    "hikiotoshi": "Pull Down",
    "tsuppari": "Thrusting Attack",
    "uwatenage": "Overarm Throw",
    "shitatehineri": "Underarm Twist Down",
    "kotenage": "Armbreaker Throw",
    "yori taoshi": "Force Out and Down",
    "sotogake": "Outer Leg Trip",
    "tsukiotoshi": "Thrust Down",
    "kawazugake": "Hooking Back Inside Leg Trip",
    "ashitori": "Leg Grab",
    "katasukashi": "Under-Shoulder Swing Down",
    "okuridashi": "Rear Push Out",
    "uwatedashinage": "Overarm Pull Down",
    "hikiwake": "Draw",
    "ketaguri": "Inside Leg Trip",
    "kibisu gaeshi": "Heel Trip",
    "sukuinage": "Scoop Throw",
    "tsukidashi": "Thrust Out",
    "abisetaoshi": "Backward Force Down",
    "fusen" : "Default"
}

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
    let minDiff = Infinity;
    
    for (const basho of BASHO_DATES) {
        const end = new Date(basho.year, basho.month - 1, basho.last_day);
        if (end < now) {
            const diff = now - end;
            if (diff < minDiff) {
                minDiff = diff;
                prevBasho = basho;
            }
        }
    }
    
    if (prevBasho) {
        return `${prevBasho.year}${String(prevBasho.month).padStart(2, '0')}`;
    }
    
    return null;
}

async function getBasho(bashoID) {
    const url = `https://sumo-api.com/api/basho/${encodeURIComponent(bashoID)}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Basho result:", data);
        return data;
    } catch (error) {
        console.error("Failed to fetch basho:", error);
    }
}

async function getBanzuke(bashoID, division) {
    const url = `https://sumo-api.com/api/basho/${encodeURIComponent(bashoID)}/banzuke/${encodeURIComponent(division)}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log(`${division} Banzuke:`, data);
        return data;
    } catch (error) {
        console.error("Failed to fetch banzuke:", error);
    }
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
        $("#sumo-text").html(`
            <strong style="font-size: 1.2em;">${daysUntil}</strong> days until next basho:<br>
            ${bashoInfo.name} / ${bashoInfo.jp_name_kana}<br>
        `);
    } else {
        $("#sumo-text").text("No upcoming bashos found");
    }
}

async function setSumoBody() {
    const bashoID = getBashoID();
    // console.log(bashoID);
    const basho = await getBasho(bashoID);  // ← execution pauses here
    // ↓ This doesn't run until getBasho() completes and returns data
    // console.log("Basho data received:", basho);
    // console.log("Yusho:", basho.yusho);
    let html = "";

    // Add tournament title
    const year = bashoID.slice(0, 4);
    const month = parseInt(bashoID.slice(4, 6));
    const bashoInfo = BASHO_MONTHS.find(m => m.month === month);
    html += `<h5 style="text-align:center">${bashoInfo.name} ${year}</h5>`;

    html+= `<div class="row">`;
    // Build yusho winners HTML
    if (basho && basho.yusho && basho.yusho.length > 0) {
        html+= `<div style="padding: 0 10px 20px;">`;
        html+= '<h5>Yusho Winners</h5>';
        basho.yusho.forEach(winner => {
            html += `<div>${winner.type}: ${winner.shikonaEn}</div>`; // ${winner.shikonaJp}
        });
        html += "<br>";
    }
    
    // Build special prizes HTML
    if (basho && basho.specialPrizes && basho.specialPrizes.length > 0) {
        html += '<h5>Special Prizes</h5>';
        basho.specialPrizes.forEach(prize => {
            html += `<div>${prize.type}: ${prize.shikonaEn}</div>`; // ${prize.shikonaJp}
        });
        html += "</div>";
        html += "<br>";
    }

    // Outstanding Performance Prize (Shukun-shō - 殊勲賞):
    // Fighting Spirit Prize (Kantō-shō - 敢闘賞):
    // Technique Prize (Ginō-shō - 技能賞):

    const division = "Makuuchi";  // You can change this to "juryo", "makushita", etc. as needed
    const banzuke = await getBanzuke(bashoID, division);
    // console.log(`${division} Banzuke data received:`, banzuke);

    // Build Standings
    html += `<div style="text-align: center;">`; // Center the standings section>;
    html += `<h5>${division} Standings</h5>`;
    // PUT THIS IN CSS AND SHARE IT WITH THE WEATHER SCROLLBAR
    // html += `<div style="overflow-x: auto; scrollbar-width: thin; scrollbar-color: rgba(0, 0, 0, 0.3) transparent;">`; 
    // html += `<table style="border-collapse: collapse; border: none; color:white;">`;
    
    if (banzuke && banzuke.east && banzuke.west) {
        const allRikishi = [...banzuke.east, ...banzuke.west];
        if (allRikishi.length > 0) {
            // Sort all rikishi by wins desc, then losses asc
            allRikishi.sort((a, b) => {
                if (b.wins !== a.wins) return b.wins - a.wins;
                return a.losses - b.losses;
            });
            // Group by wins
            const groups = new Map();
            for (const r of allRikishi) {
                if (!groups.has(r.wins)) groups.set(r.wins, []);
                groups.get(r.wins).push(r);
            }
            // Get top win counts
            const topCount = 100;
            const circleMargin = '0.05em';  // Control spacing between circles
            const sortedWins = Array.from(groups.keys()).sort((a, b) => b - a).slice(0, topCount);
            for (const win of sortedWins) {
                const rikishi = groups.get(win);
                const bestLosses = rikishi[0].losses;
                const leaders = rikishi.filter(r => r.losses === bestLosses);
                const record = `${win}-${bestLosses}${leaders[0].absences > 0 ? `-${leaders[0].absences}` : ''}`;
                // html += `<tr><td><b>${record}</b></td><td></td></tr>`;
                html += `<table class="holiday-table" style="display: inline-table; margin: 0 10px 10px;">`; // Add table for each record group
                html += `<tr><td colspan="2" style="text-align:center; font-weight:bold; ">${record}</td></tr>`;
                // win/loss circles with tooltips
                leaders.forEach(r => {
                    let shapes = '';
                    if (r.record && r.record.length > 0) {
                        r.record.forEach((match, index) => {
                            let shape = '';
                            let title = '';
                            if (match.result === 'win' || match.result === 'fusen win') {
                                shape = '●';
                            } else if (match.result === 'loss' || match.result === 'fusen loss') {
                                shape = '○';
                            } else if (match.result === 'absent') {
                                shape = '–';
                            }
                            const RESULT = match.result.toUpperCase();
                            title = RESULT;
                            
                            if (match.opponentShikonaEn || match.kimarite) {
                                const opponent = match.opponentShikonaEn ? match.opponentShikonaEn : 'Unknown';
                                const kimarite = match.kimarite ? match.kimarite : 'Unknown';
                                const kimariteEn = KIMARITE_NAMES[kimarite] || "Unknown";
                                const Kimarite = kimarite.charAt(0).toUpperCase() + kimarite.slice(1);
                                title = `${title}\nDay ${index + 1}\nvs. ${opponent}\n${Kimarite} (${kimariteEn})`;
                            }
                            shapes += `<span title="${title}" style="cursor: help;">${shape}</span>`;
                        });
                        html += `<tr><td>${r.shikonaEn}</td><td class="result-circle" style="letter-spacing: ${circleMargin};">${shapes}</td></tr>`;
                    }
                });
            }
        } else {
            html += '<tr><td>No standings data available</td></tr>';
        }
    } else {
        html += '<tr><td>No banzuke data available</td></tr>';
    }
    
    html += `</div>`; // </table></div>

    $("#sumo-body").html(html);
}

function buildSumoPanel() {
    setSumoText();
    setSumoBody();
}

buildSumoPanel();

// TODO: Create Rikishi tooltip: Name, JPName, Rank (Head-to-Head records would be amazing but might be too much for now)

