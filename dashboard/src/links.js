const links = [
    {
        "title" : "Toonami",
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
        "url" : "https://www.amazon.com/Amazon-Video/b/?ie=UTF8&node=2858778011&ref_=nav_cs_prime_video",
        "icon" : '<i class="fa-brands fa-2x fa-amazon" style="color:#00a8e1;"></i>',
        "target" : "#video-list"
    },
    {
        "title" : "Multistre.am",
        "url" : "https://multistre.am/",
        "icon" : '<i class="fa-solid fa-2x fa-box fa-rotate-180" style="color:#1968aa;"></i>',
        "target" : "#video-list"
    },
    /*
    {
        "title" : "LazyGoat",
        "url" : "https://lazygoat.tv/collection/y2sk7-nrAgbzRVHhFZUsyMEpvJEd/",
        "icon" : '<i class="fa-solid fa-2x fa-table-cells-large" style="color:#FD5205;"></i>',
        "target" : "#video-list"
    },
    */
    {
        "title" : "Adult Swim",
        "url" : "https://www.adultswim.com/streams/",
        "icon" : '<i class="fa-solid fa-2x fa-water-ladder" style="color:#eeeeee;"></i>',
        "target" : "#video-list"
    },
    {
        "title" : "Crunchyroll",
        "url" : "https://www.crunchyroll.com/",
        "icon" : '<i class="fa-solid fa-2x fa-eye" style="color:#f47521;"></i>',
        "target" : "#video-list"
    },
    {
        "title" : "Gmail",
        "url" : "https://mail.google.com/mail/u/0/#inbox",
        "icon" : '<i class="fa-solid fa-2x fa-envelope" style="color:#ea4335"></i>',
        "target" : "#tools-list"
    },
    {
        "title" : "Drive",
        "url" : "https://drive.google.com/drive/my-drive",
        "icon" : '<i class="fa-brands fa-2x fa-google-drive" style="color:#fbbc04"></i>',
        "target" : "#tools-list"
    },
    {
        "title" : "Reddit",
        "url" : "https://old.reddit.com",
        "icon" : '<i class="fa-brands fa-2x fa-reddit-alien" style="color:orangered"></i>',
        "target" : "#tools-list"
    },
    {
        "title" : "Codepen",
        "url" : "https://codepen.io/",
        "icon" : '<i class="fa-brands fa-2x fa-codepen" style="color:#dddddd"></i>',
        "target" : "#tools-list"
    },
    /*{
        "title" : "Coolors",
        "url" : "https://coolors.co/generate",
        "icon" : '<i class="fa-solid fa-2x fa-swatchbook" style="color:lightseagreen"></i>',
        "target" : "#tools-list"
    },*/
    /*{
        "title" : "Pixlr X",
        "url" : "https://pixlr.com/x/",
        "icon" : '<i class="fa-solid fa-2x fa-palette" style="color:bisque"></i>',
        "target" : "#tools-list"
    },*/
    {
        "title" : "Codewars",
        "url" : "https://www.codewars.com/dashboard",
        "icon" : '<i class="fa-solid fa-2x fa-laptop-code" style="color:#b1361e"></i>',
        "target" : "#tools-list"
    },
    {
        "title" : "Duolingo",
        "url" : "https://www.duolingo.com/",
        "icon" : '<i class="fa-solid fa-2x fa-feather" style="color:#54ae43"></i>',
        "target" : "#tools-list"
    },
    {
        "title" : "Scryfall",
        "url" : "https://scryfall.com/",
        "icon" : '<i class="fa-solid fa-2x fa-id-card" style="color:#a04b9a"></i>',
        "target" : "#tools-list"
    },
    {
        "title" : "ChatGPT",
        "url" : "https://chat.openai.com/",
        "icon" : '<i class="fa-regular fa-2x fa-comments" style="color:#71a699"></i>',
        "target" : "#tools-list"
    },
    {
        "title" : "Font Awesome",
        "url" : "https://fontawesome.com/search?o=r&m=free",
        "icon" : '<i class="fa-solid fa-2x fa-font-awesome" style="color:#528dd7"></i>',
        "target" : "#tools-list"
    },
    {
        "title" : "Timeguessr",
        "url" : "https://timeguessr.com/",
        "icon" : '<i class="fa-solid fa-2x fa-map-location-dot" style="color:#db5049"></i>',
        "target" : "#tools-list"
    },
    {
        "title" : "Wordle",
        "url" : "https://www.nytimes.com/games/wordle/index.html",
        "icon" : '<i class="fa-solid fa-2x fa-w" style="color:#69a662"></i>',
        "target" : "#tools-list"
    },
    {
        "title" : "Connections",
        "url" : "https://www.nytimes.com/games/connections",
        "icon" : '<i class="fa-solid fa-2x fa-table-cells" style="color:#bc70c4"></i>',
        "target" : "#tools-list"
    },
    {
        "title" : "Mini-Cross",
        "url" : "https://www.nytimes.com/crosswords/game/mini",
        "icon" : '<i class="fa-solid fa-2x fa-puzzle-piece" style="color:#6493e6"></i>',
        "target" : "#tools-list"
    },
    {
        "title" : "Bandle",
        "url" : "https://bandle.app/daily",
        "icon" : '<i class="fa-solid fa-2x fa-guitar" style="color:#981520"></i>',
        "target" : "#tools-list"
    },
    {
        "title" : "Catfishing",
        "url" : "https://catfishing.net/",
        "icon" : '<i class="fa-solid fa-2x fa-fish-fins" style="color:#fbbf24"></i>',
        "target" : "#tools-list"
    },
    {
        "title" : "Scrandle",
        "url" : "https://scrandle.com/",
        "icon" : '<i class="fa-solid fa-2x fa-hotdog" style="color:#ce9864"></i>',
        "target" : "#tools-list"
    },
    // Audio
    {
        "title" : "NPR",
        "url" : "https://www.npr.org",
        "icon" : '<i class="fa-solid fa-2x fa-microphone-lines" style="color:lightslategray"></i>',
        "target" : "#video-list"
    },
    {
        "title" : "Classical",
        "url" : "https://theclassicalstation.org/listen/",
        "icon" : '<i class="fa-solid fa-2x fa-music" style="color:sandybrown"></i>',
        "target" : "#video-list"
    },
    {
        "title" : "Work Music",
        "url" : "https://www.youtube.com/playlist?list=PLWx-JvCYWQuE1BfLAhIaVMCK4GrVYRotC",
        "icon" : '<i class="fa-brands fa-2x fa-youtube-square" style="color:#cb0e0e"></i>',
        "target" : "#video-list"
    },
    // Projects
    {
        "title" : "Home",
        "url" : "https://erictilford.github.io",
        "icon" : '<i class="fa-solid fa-2x fa-house-chimney-user" style="color:lightblue"></i>',
        "target" : "#project-list"
    },
    {
        "title" : "Recipe Book",
        "url" : "https://erictilford.github.io/recipebook",
        "icon" : '<i class="fa-solid fa-2x fa-book-skull" style="color:cornflowerblue"></i>',
        "target" : "#project-list"
    },
    /*
    {
        "title" : "Wellness & Longevity",
        "url" : "https://wellnessok.com",
        "icon" : '<i class="fa-solid fa-2x fa-syringe" style="color:#85aeb5"></i>',
        "target" : "#project-list"
    },
    */
    {
        "title" : "Wordle Slackmojifier",
        "url" : "https://erictilford.github.io/wordle",
        "icon" : '<i class="fa-solid fa-2x fa-icons" style="color:orchid"></i>',
        "target" : "#project-list"
    },
    {
        "title" : "Github",
        "url" : "https://github.com/erictilford/erictilford.github.io",
        "icon" : '<i class="fa-brands fa-2x fa-github" style="color:slategray"></i>',
        "target" : "#project-list"
    },
]