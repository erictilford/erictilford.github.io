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
    yorikiri: "Frontal Force Out",
    oshidashi: "Frontal Push Out",
    hatakikomi: "Slap Down",
    hikiotoshi: "Pull Down",
    tsuppari: "Thrusting Attack",
    uwatenage: "Overarm Throw",
    shitatehineri: "Underarm Twist Down",
    kotenage: "Armbreaker Throw",
    "yori taoshi": "Force Out and Down",
    sotogake: "Outer Leg Trip",
    tsukiotoshi: "Thrust Down",
    kawazugake: "Hooking Back Inside Leg Trip",
    ashitori: "Leg Grab",
    katasukashi: "Under-Shoulder Swing Down",
    okuridashi: "Rear Push Out",
    uwatedashinage: "Overarm Pull Down",
    hikiwake: "Draw",
    ketaguri: "Inside Leg Trip",
    "kibisu gaeshi": "Heel Trip",
    sukuinage: "Scoop Throw",
    tsukidashi: "Thrust Out",
    abisetaoshi: "Backward Force Down",
    fusen: "Default",
    shitatenage: "Underarm Throw",
    oshitaoshi: "Push Down",
};

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
    html += `<div class="row">`;

    // Build yusho winners HTML
    if (basho && basho.yusho && basho.yusho.length > 0) {
        html += `<div style="padding: 0 10px 20px;">`;
        html += "<h5>Yusho Winners</h5>";
        basho.yusho.forEach((winner) => {
            html += `<div>${winner.type}: ${winner.shikonaEn}</div>`;
        });
        html += "<br>";
    }

    // Build special prizes HTML
    if (basho && basho.specialPrizes && basho.specialPrizes.length > 0) {
        html += "<h5>Special Prizes</h5>";
        basho.specialPrizes.forEach((prize) => {
            html += `<div>${prize.type}: ${prize.shikonaEn}</div>`;
        });
        html += "</div>";
        html += "<br>";
    }

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

                // --- CHANGE HERE ---
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
                // ------------------

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

                        html += `<tr><td>${r.shikonaEn}</td><td class="result-circle" style="letter-spacing: ${circleMargin};">${shapes}</td></tr>`;
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

    html += `</div>`; // Close row div
    $("#sumo-body").html(html);
}


function buildSumoPanel() {
    setSumoText();
    setSumoBody();
}

buildSumoPanel();

// TODO: Create Rikishi tooltip: Name, JPName, Rank (Head-to-Head records would be amazing but might be too much for now)

// TODO: Use Holidays as an example for formatting
// This uses column-count to determine an amount of columns
