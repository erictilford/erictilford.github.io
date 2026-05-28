function LoadSumo(animSpeed) {
    icon = 'fa-solid fa-torii-gate " style="color:#b10041';
    $("#sumo-title").append(' <i class=" ' + icon + '">');
    $("#widget-list").append(
        '<a id="sumo-button" class="pointer"><li><i class="fa-2x ' +
        icon +
        '"></i><br>Sumo</li></a>',
    );
    $("#close-sumo-button").click(function () {
        $("#sumo-panel").hide(animSpeed);
    });
    $("#sumo-button").click(function () {
        const $panel = $("#sumo-panel");
        const isOpen = $panel.is(":visible");

        if (isOpen) {
            // If it's already open, simply close it
            $panel.slideUp(animSpeed);
        } else {
            // If it's closed, shut all other central panels first, then open this one
            $(".center-panel").not($panel).slideUp(0); // Instantly hide other panels without animation (use animSpeed if you want them to animate)

            $panel.slideDown(animSpeed, function () {
                // Smooth scroll happens AFTER the open animation completes for accuracy
                $("html, body").animate(
                    {
                        scrollTop: $panel.offset().top,
                    },
                    animSpeed,
                );
            });
        }
    });

    $("#sumo-button").attr("title", "Sumo");
}

const BASHO_MONTHS = [
    {
        month: 1,
        name: "January Tournament",
        jp_name: "Hatsu Basho",
        jp_name_kana: "初場所",
        nickname: "New Year Basho",
    },
    {
        month: 3,
        name: "March Tournament",
        jp_name: "Haru Basho",
        jp_name_kana: "春場所",
        nickname: "Spring Basho",
    },
    {
        month: 5,
        name: "May Tournament",
        jp_name: "Natsu Basho",
        jp_name_kana: "夏場所",
        nickname: "Summer Basho",
    },
    {
        month: 7,
        name: "July Tournament",
        jp_name: "Nagoya Basho",
        jp_name_kana: "名古屋場所",
        nickname: "Summer Basho",
    },
    {
        month: 9,
        name: "September Tournament",
        jp_name: "Aki Basho",
        jp_name_kana: "秋場所",
        nickname: "Autumn Basho",
    },
    {
        month: 11,
        name: "November Tournament",
        jp_name: "Kyushu Basho",
        jp_name_kana: "九州場所",
        nickname: "Autumn Basho",
    },
];

const BASHO_DATES = [
    {
        month: 1,
        year: 2026,
        first_day: 11,
        last_day: 25,
        venue: "Kokugikan",
    },
    {
        month: 3,
        year: 2026,
        first_day: 8,
        last_day: 22,
        venue: "EDION Arena Osaka (Osaka Prefectural Gymnasium)",
    },
    {
        month: 5,
        year: 2026,
        first_day: 10,
        last_day: 24,
        venue: "Kokugikan",
    },
    {
        month: 7,
        year: 2026,
        first_day: 12,
        last_day: 26,
        venue: "IG Arena",
    },
    {
        month: 9,
        year: 2026,
        first_day: 13,
        last_day: 27,
        venue: "Kokugikan",
    },
    {
        month: 11,
        year: 2026,
        first_day: 8,
        last_day: 22,
        venue: "Fukuoka Kokusai Center",
    },
    {
        month: 1,
        year: 2027,
        first_day: 10,
        last_day: 24,
        venue: "Kokugikan",
    },
    {
        month: 3,
        year: 2027,
        first_day: 14,
        last_day: 28,
        venue: "EDION Arena Osaka (Osaka Prefectural Gymnasium)",
    },
    {
        month: 5,
        year: 2027,
        first_day: 9,
        last_day: 23,
        venue: "Kokugikan",
    },
    {
        month: 7,
        year: 2027,
        first_day: 11,
        last_day: 25,
        venue: "IG Arena",
    },
    {
        month: 9,
        year: 2027,
        first_day: 12,
        last_day: 26,
        venue: "Kokugikan",
    },
    {
        month: 11,
        year: 2027,
        first_day: 14,
        last_day: 28,
        venue: "Fukuoka Kokusai Center",
    },
];

const KIMARITE_NAMES = {
    "abisetaoshi": "Backward Force Down",
    "amaminage": "Armless Two-Handed Throw",
    "ashitori": "Leg Grab",
    "chongake": "Pulling Heel Hook",
    "fusen": "Default",
    "gasshohineri": "Clasped-Hand Twist Down",
    "hatakikomi": "Slap Down",
    "hikiotoshi": "Pull Down",
    "hikkake": "Arm Grabbing Force Out",
    "hikiwake": "Draw",
    "ipponzeoi": "One-Arm Over-Shoulder Throw",
    "isamiashi": "Forward Step Out",
    "izori": "Backwards Body Drop",
    "kainahineri": "Two-Arm Twist Down",
    "kakezori": "Hooking Backwards Body Drop",
    "katasukashi": "Under-Shoulder Swing Down",
    "kawazugake": "Hooking Back Inside Leg Trip",
    "kekaeshi": "Minor Inner Foot Sweep",
    "ketaguri": "Inside Leg Trip",
    "kibisu gaeshi": "Heel Trip",
    "kimedashi": "Armbar Force Out",
    "kimetaoshi": "Armbar Force Down",
    "kirikaeshi": "Twisting Backward Knee Trip",
    "komatasukui": "Over-Thigh Scooping Body Drop",
    "koshikudake": "Inadvertent Collapse",
    "koshinage": "Hip Throw",
    "kotenage": "Armbreaker Throw",
    "kozumatori": "Ankle Pick",
    "kubihineri": "Neck Twist Down",
    "kubinage": "Neck Throw",
    "mitokorozeme": "Triple Attack Force Out",
    "mizukukuri": "Water-Clutching Throw",
    "nichonage": "Two-Leg Body Drop",
    "nimaigeri": "Ankle Kicking Twist Down",
    "okuridashi": "Rear Push Out",
    "okurigake": "Rear Leg Trip",
    "okurihikiotoshi": "Rear Pull Down",
    "okurinage": "Rear Throw",
    "okuritaoshi": "Rear Push Down",
    "okuritsuridashi": "Rear Lift Out",
    "okuritsuriotoshi": "Rear Lifting Body Slam",
    "omata": "Thigh Scooping Body Drop",
    "oshidashi": "Frontal Push Out",
    "oshitaoshi": "Push Down",
    "sabaori": "Forward Tree-Breaking Crush",
    "sakatottari": "Counter Armlock Throw",
    "shitatehineri": "Underarm Twist Down",
    "shitatenage": "Underarm Throw",
    "shumokuzori": "Bell-Hammer Backwards Body Drop",
    "sokubiotoshi": "Head Chop Down",
    "sotogake": "Outer Leg Trip",
    "sotokomata": "Over-Thigh Scooping Body Drop",
    "sotomuso": "Outer Thigh Twist Down",
    "sototasukizori": "Outer Reverse Backwards Body Drop",
    "sukuinage": "Scoop Throw",
    "susoharai": "Rear Foot Sweep",
    "susotori": "Toe Pick",
    "tasukizori": "Reverse Backwards Body Drop",
    "tottari": "Armlock Throw",
    "tsukidashi": "Thrust Out",
    "tsukihiza": "Knee Touch Down",
    "tsukitaoshi": "Thrust Down",
    "tsukite": "Hand Touch Down",
    "tsukiotoshi": "Thrust Down",
    "tsuradashi": "Rear-Facing Force Out",
    "tsuridashi": "Frontal Lift Out",
    "tsuriotoshi": "Frontal Lifting Body Slam",
    "tsuppari": "Thrusting Attack",
    "tsutaezori": "Under-Arm Forward Body Drop",
    "tsumatori": "Rear Ankle Pick",
    "uchiweri": "Inner Foot Sweep",
    "uchigake": "Inner Leg Trip",
    "uchimuso": "Inner Thigh Twist Down",
    "udekimenage": "Armbar Throw",
    "ushiroromtare": "Backward Lean Out",
    "utchari": "Backward Pivot Throw",
    "uwatedashinage": "Overarm Pull Down",
    "uwatehineri": "Overarm Twist Down",
    "uwatenage": "Overarm Throw",
    "waridashi": "Upper-Arm Force Out",
    "watashikomi": "Thigh Grabbing Push Down",
    "yobimodoshi": "Pulling Body Slam",
    "yori taoshi": "Force Out and Down",
    "yorikiri": "Frontal Force Out",
    "zubaneri": "Head-Pivot Twist Down"

};

const SPECIAL_PRIZES = [
    {
        type: "Shukun-sho",
        pretty: "Shukun-shō",
        description: "Awarded to a wrestler who defeats a Yokozuna (Grand Champion) or Ōzeki (Champion) during the tournament, often playing a decisive role in the championship race.",
        name: "Outstanding Performance Prize",
        jp_name: "殊勲賞"
    },
    {
        type: "Kanto-sho",
        pretty: "Kantō-shō",
        description: "Awarded to a wrestler who fights tenaciously, gives their absolute best in every bout, and fights through adversity. It is also very common for debutants in the top division who achieve double-digit wins to earn this prize.",
        name: "Fighting Spirit Prize",
        jp_name: "敢闘賞"
    },
    {
        type: "Gino-sho",
        pretty: "Ginō-shō",
        description: "Awarded to a wrestler who demonstrates the most skillful kimarite (winning techniques) or utilizes the widest variety of skillful moves.",
        name: "Technique Prize",
        jp_name: "技能賞"
    },
    {
        requirements: "What's Needed to Win\nTo be considered for a special prize, a wrestler must meet several strict conditions:\n• Rank Requirement: The wrestler must be ranked below Ōzeki (i.e., Sekiwake, Komusubi, or Maegashira).\n• Majority of Wins (Kachi-koshi): The wrestler must finish the 15-day tournament with a winning record (8 wins or more).\n• Panel Decision: Prize winners are chosen by a judging committee and members of the press covering the tournament.\n• Conditional Last Match: Some awards are conditional, meaning the wrestler may need to win their final match on Day 15 to secure the prize.\n• No Guarantees: These prizes do not have to be awarded if no one meets the criteria. Conversely, multiple wrestlers can win the exact same prize in a single tournament."
    }

];

function getBashoID() {
    const now = new Date();

    // Check if we're currently in a basho
    for (const basho of BASHO_DATES) {
        const start = new Date(basho.year, basho.month - 1, basho.first_day);
        const end = new Date(basho.year, basho.month - 1, basho.last_day);

        if (now >= start && now <= end) {
            return `${basho.year}${String(basho.month).padStart(2, "0")}`;
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
        return `${prevBasho.year}${String(prevBasho.month).padStart(2, "0")}`;
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
            const bashoInfo = BASHO_MONTHS.find((m) => m.month === basho.month);
            $("#sumo-text").html(
                `Day ${dayOfBasho} of basho:<br>${bashoInfo.name} / ${bashoInfo.jp_name_kana}`,
            );
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
        const bashoInfo = BASHO_MONTHS.find((m) => m.month === nextBasho.month);
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
    const basho = await getBasho(bashoID);

    let html = "";
    const year = bashoID.slice(0, 4);
    const month = parseInt(bashoID.slice(4, 6));
    const bashoInfo = BASHO_MONTHS.find((m) => m.month === month);

    html += `<h5 style="text-align:center">${bashoInfo.name} ${year}</h5>`;
    html += `<div class="row sumo-section">`;

    // Build yusho winners HTML
    if (basho && basho.yusho && basho.yusho.length > 0) {
        html += `<div style="padding: 0 10px;">`;
        html += "<h5>Yusho Winners</h5>";
        basho.yusho.forEach((winner) => {
            html += `<div>${winner.type}: ${winner.shikonaEn}</div>`;
        });
        html += `</div>`;
    }

    // Build special prizes HTML
    if (basho && basho.specialPrizes && basho.specialPrizes.length > 0) {
        html += `<div style="padding: 0 10px;">`;
        const specialPrizesRequirements = SPECIAL_PRIZES.find((p) => p.requirements)?.requirements || "No requirements available";
        html += `<h5><span title="${specialPrizesRequirements}" style="cursor: help;">Special Prizes</span></h5>`;
        basho.specialPrizes.forEach((prize) => {
            prizeInfo = SPECIAL_PRIZES.find((p) => p.type === prize.type);
            prizeName = prizeInfo?.name || prize.type;
            prizePretty = prizeInfo?.pretty || prize.type;
            prizeJpName = prizeInfo?.jp_name || prize.type;
            prizeDescription = prizeInfo?.description || "No description available";
            tooltipText = `${prizeName} / ${prizePretty} (${prizeJpName}):\n${prizeDescription}`;
            html += `<div><span title="${tooltipText}" style="cursor: help;">${prizeName}</span>: ${prize.shikonaEn}</div>`;
        });
        html += `</div>`;
    }

    html += `</div>`; // Close row div

    const division = "Makuuchi";
    const banzuke = await getBanzuke(bashoID, division);

    // Build Standings
    html += `<div style="text-align: center;">`;
    html += `<h5>${division} Standings</h5>`;

    if (banzuke && banzuke.east && banzuke.west) {
        const allRikishi = [...banzuke.east, ...banzuke.west];

        if (allRikishi.length > 0) {
            // Group strictly by number of wins (handles 0 wins safely)
            const groups = new Map();

            for (const r of allRikishi) {
                // Enforce integer fallback if wins value is missing or undefined
                const winCount = parseInt(r.wins, 10) || 0;

                // Calculate this individual rikishi's precise record string format
                const losses = parseInt(r.losses, 10) || 0;
                const absences = parseInt(r.absences, 10) || 0;
                r.computedRecordString = `${winCount}-${losses}${absences > 0 ? `-${absences}` : ""}`;

                if (!groups.has(winCount)) {
                    groups.set(winCount, []);
                }
                groups.get(winCount).push(r);
            }

            const circleMargin = "0.05em"; // Spacing between circles in the results column
            // Sort win counts descending (highest wins down to 0 wins)
            const sortedWins = Array.from(groups.keys()).sort((a, b) => b - a);

            for (const win of sortedWins) {
                const rikishiInGroup = groups.get(win);
                // Sort wrestlers inside this win tier by absences ascending (fewest first)
                // If absences are equal, sort by losses ascending (fewer losses first)
                rikishiInGroup.sort((a, b) => {
                    const absA = parseInt(a.absences, 10) || 0;
                    const absB = parseInt(b.absences, 10) || 0;
                    if (absA !== absB) {
                        return absA - absB;
                    }
                    return (parseInt(a.losses, 10) || 0) - (parseInt(b.losses, 10) || 0);
                });

                // Gather all distinct record strings within this win bracket (e.g. ['2-3', '2-2-1'])
                const uniqueRecordStrings = [
                    ...new Set(rikishiInGroup.map((r) => r.computedRecordString)),
                ];
                // Combine them into a single header string separated by a slash
                const headerLabel = uniqueRecordStrings.join(" / ");

                // Render one combined table for this specific win tier
                html += `<table class="holiday-table" style="display: inline-table; margin: 0 10px 10px;">`;
                html += `<tr><td colspan="2" style="text-align:center; font-weight:bold;">${headerLabel}</td></tr>`;

                // Render all matching wrestlers right underneath the combined header
                rikishiInGroup.forEach((r) => {
                    let shapes = "";
                    if (r.record && r.record.length > 0) {
                        r.record.forEach((match, index) => {
                            let shape = "";
                            let title = "";
                            if (match.result === "win" || match.result === "fusen win") {
                                shape = "●";
                            } else if (
                                match.result === "loss" ||
                                match.result === "fusen loss"
                            ) {
                                shape = "○";
                            } else if (match.result === "absent") {
                                shape = "–";
                            }

                            const RESULT = match.result.toUpperCase();
                            title = RESULT;

                            if (match.opponentShikonaEn || match.kimarite) {
                                const opponent = match.opponentShikonaEn
                                    ? match.opponentShikonaEn
                                    : "Unknown";
                                const kimarite = match.kimarite ? match.kimarite : "Unknown";
                                const kimariteEn = KIMARITE_NAMES[kimarite] || "Unknown";
                                const Kimarite =
                                    kimarite.charAt(0).toUpperCase() + kimarite.slice(1);
                                title = `${title}\nDay ${index + 1}\nvs. ${opponent}\n${Kimarite} (${kimariteEn})`;
                            }
                            shapes += `<span title="${title}" style="cursor: help;">${shape}</span>`;
                        });
                        
                        shikonaTitle = r.shikonaEn + " (" + r.shikonaJp + ")\nRank: " + r.rank + "\nRecord: " + r.computedRecordString;
                        shikonaSpan = `<span title="${shikonaTitle}" style="cursor: help;">${r.shikonaEn}</span>`;

                        html += `<tr><td>${shikonaSpan}</td><td class="result-circle" style="letter-spacing: ${circleMargin};">${shapes}</td></tr>`;
                    }
                });

                html += `</table>`;
            }
        } else {
            html += "<div>No standings data available</div>";
        }
    } else {
        html += "<div>No banzuke data available</div>";
    }

    html += `</div>`; // Close standings div
    $("#sumo-body").html(html);
}


function buildSumoPanel() {
    setSumoText();
    setSumoBody();
}

buildSumoPanel();

// TODO: Head-to-head records in tooltip?

// TODO: Measurements in tooltip??

// TODO: Space out Standings similarly to Yusho Winners / Special Prizes section
