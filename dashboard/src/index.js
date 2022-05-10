window.addEventListener('DOMContentLoaded', function (){
    
    // WALLPAPERS
    const wallpapers = [
        "6zwch8y1q4nz.jpg",
        "38bbDQM.jpg",
        "d2fd98f2a2dcb000de2c971a69879eff.jpg",
        "kcf4mtbjca231.jpg",
        "lxkpopzwbgq21.png",
        "nao5txxljprx.jpg",
        "T5fmI19.jpg",
        "X2qDwdN.jpg",
        "xygoflg84kf21.png"
    ];
    let randomWallpaper = wallpapers[Math.floor(Math.random() * wallpapers.length)];
    document.body.style.backgroundImage = "url('assets/backgrounds/"+ randomWallpaper +"')";
});