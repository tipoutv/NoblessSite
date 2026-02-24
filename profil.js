// récupérer artiste dans URL
const params = new URLSearchParams(window.location.search);
const artist = params.get("artist");

// base de données artistes
const artists = {

    brocent: {
        name: "Brocent",
        role: "Président",
        img: "image.jpg",
        spotify: "https://spotify.com",
        youtube: "https://youtube.com",
        instagram: "https://instagram.com",
        tiktok: "https://tiktok.com"
    },

    xtiloup: {
        name: "Xtiloup",
        role: "Administrateur",
        img: "image.jpg",
        spotify: "https://spotify.com",
        youtube: "https://youtube.com",
        instagram: "https://instagram.com",
        tiktok: "https://tiktok.com"
    }

};

// charger données
const data = artists[artist];

if(data){

document.getElementById("artistName").textContent = data.name;
document.getElementById("artistRole").textContent = data.role;
document.getElementById("artistImg").src = data.img;

document.getElementById("spotify").href = data.spotify;
document.getElementById("youtube").href = data.youtube;
document.getElementById("instagram").href = data.instagram;
document.getElementById("tiktok").href = data.tiktok;

}