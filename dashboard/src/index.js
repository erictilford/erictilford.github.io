window.addEventListener('DOMContentLoaded', mainFunction);

function mainFunction() {
    //$(document).ready(function(){
    
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

    // DATE
    const d = new Date();
    const month = d.getMonth()+1;
    const monthNames = ["January", "February", "March", "April", "May", "June",
     "July", "August", "September", "October", "November", "December"
    ];
    const monthLong = monthNames[month - 1];
    const day = d.getDate();
    const output = monthLong + " " + day + ", " + d.getFullYear();
    $("#date-text").text(output);
    
    // YYYY/MM/DD Format
    //var output = d.getFullYear() + '/' +
    //    ((''+month).length<2 ? '0' : '') + monthLong + '/' +
    //    ((''+day).length<2 ? '0' : '') + day;
}