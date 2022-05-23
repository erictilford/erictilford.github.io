var config = {
    WEATHER_API_KEY : 'bc038703ed9fdf90453fa1cf0930896d'
}
const links = [
    {
        "title" : "Toonami Aftermath",
        "url" : "https://www.toonamiaftermath.com",
        "icon" : '<i class="fa-solid fa-2x fa-meteor" style="color:mediumaquamarine"></i>',
        "target" : "#video-list"
    },
    {
        "title" : "Twitch",
        "url" : "https://www.twitch.tv/directory/following/live",
        "icon" : '<i class="fa-brands fa-2x fa-twitch" style="color:#a970ff"></i>',
        "target" : "#video-list"
    },
    {
        "title" : "YouTube",
        "url" : "https://www.youtube.com",
        "icon" : '<i class="fa-brands fa-2x fa-youtube" style="color:red;"></i>',
        "target" : "#video-list"
    },
    {
        "title" : "Netflix",
        "url" : "https://www.netflix.com",
        "icon" : '<i class="fa-solid fa-2x fa-n" style="color:#e50914"></i>',
        "target" : "#video-list"
    },
    {
        "title" : "Disney+",
        "url" : "https://www.disneyplus.com/en-gb/home",
        "icon" : '<i class="fa-solid fa-2x fa-hat-wizard" style="color:steelblue"></i>',
        "target" : "#video-list"
    },
    {
        "title" : "Prime Video",
        "url" : "https://www.amazon.com/gp/video/storefront",
        "icon" : '<i class="fa-brands fa-2x fa-amazon" style="color:#00a8e1;"></i>',
        "target" : "#video-list"
    },
    {
        "title" : "Gmail",
        "url" : "https://mail.google.com/mail/u/0/#inbox",
        "icon" : '<i class="fa-solid fa-2x fa-envelope" style="color:#ea4335"></i>',
        "target" : "#tools-list"
    },
    {
        "title" : "Google Drive",
        "url" : "https://drive.google.com/drive/my-drive",
        "icon" : '<i class="fa-brands fa-2x fa-google-drive" style="color:#fbbc04"></i>',
        "target" : "#tools-list"
    },
    {
        "title" : "Reddit",
        "url" : "https://old.reddit.com",
        "icon" : '<i class="fa-brands fa-2x fa-reddit" style="color:orangered"></i>',
        "target" : "#tools-list"
    },
    {
        "title" : "Recipe Book",
        "url" : "https://erictilford.github.io/recipebook",
        "icon" : '<i class="fa-solid fa-2x fa-book-skull" style="color:cornflowerblue"></i>',
        "target" : "#tools-list"
    },
    {
        "title" : "Wordle",
        "url" : "https://www.nytimes.com/games/wordle/index.html",
        "icon" : '<i class="fa-solid fa-2x fa-w" style="color:#69a662"></i>',
        "target" : "#tools-list"
    }
]

// To get wallpaper list:
// - command prompt
// - cd Documents\For My Records\erictilford.github.io\dashboard\assets\backgrounds
// - dir /b > print.txt
// - delete "print.txt" from output
// - https://onlinetexttools.com/split-text

const wallpapers = [
    "1211882520893.jpg",
    "1226553584928.jpg",
    "1LW20lR.jpg",
    "25730444331_dd6b185aee_o.jpg",
    "2brdfw42uhl11.png",
    "2IUCowX.jpg",
    "30c305mtgvsz.png",
    "3xh7jyI.jpg",
    "3z3ribznvcu31.jpg",
    "4Nd8fjU.jpg",
    "5hHQRHc.jpg",
    "5LIAR42.jpg",
    "6xCNmWa.jpg",
    "6zwch8y1q4nz.jpg",
    "77D8AqF.jpg",
    "7YfAFPd.jpg",
    "8380889887_e26d75fdda_k.jpg",
    "9Hz4ZTi.jpg",
    "An7CAJl.jpg",
    "awyfSWG.jpg",
    "bdlsikS.jpg",
    "bedmxswskfu11.png",
    "CUGGaiZ.jpg",
    "d2fd98f2a2dcb000de2c971a69879eff.jpg",
    "djh2i85.jpg",
    "DKC_by_Orioto.jpg",
    "fbW9ZfB.jpg",
    "fftacticswlpr06-1600x1200.jpg",
    "FnuVq.jpg",
    "FS446dT.jpg",
    "gD52hF4.jpg",
    "Green_Hill_Zone_by_Orioto.jpg",
    "GT7oIIL.jpg",
    "ID169.jpg",
    "kaamZIZ.jpg",
    "kcf4mtbjca231.jpg",
    "kCQTW0N.jpg",
    "Lava_Ballad_by_Orioto.jpg",
    "lxkpopzwbgq21.png",
    "mrOs9ZC.png",
    "nao5txxljprx.jpg",
    "nF1gFno.jpg",
    "nkVpI.jpg",
    "nlyhkbk5vdu11.png",
    "Orgrimmar__Horde_Territory_by_Osp.jpg",
    "OsnrH.jpg",
    "siusemgdr72y.jpg",
    "sXNLRVW.jpg",
    "T5fmI19.jpg",
    "tdbpcuqvpdp21.jpg",
    "tkHFTRK.jpg",
    "VQArV2Y.jpg",
    "VrgAl7e.jpg",
    "w3UdbY4.png",
    "wHBNl9i.jpg",
    "X2qDwdN.jpg",
    "xygoflg84kf21.png",
    "Yoshi__s_Playground_by_Orioto.jpg",
    "yx9dnimvii521.png",
    "ZbO9t.jpg",
    "zHhSxjn.jpg",
    "ZXI9C6X.jpg"
];