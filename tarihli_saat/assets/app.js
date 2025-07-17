// tarih : 
let date = new Date();
let yil = date.getFullYear();
let ay = date.getMonth() + 1;
let gun = date.getDate();

ay = (ay > 10) ? ay : "0" + ay;
gun = (gun > 10) ? gun : "0" + gun;

let gunler = ["pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
let gunismi = gunler[date.getDay()];

// swich case yöntemi : 
// switch(gunismi){
//     case 1:
//     gunismi=gunler[0];
//     break;
//     case 2:
//     gunismi=gunler[1];
//     break;
//     case 3:
//     gunismi=gunler[2];
//     break;
//     case 4:
//     gunismi=gunler[3];
//     break;
//     case 5:
//     gunismi=gunler[4];
//     break;
//     case 6:
//     gunismi=gunler[5];
//     break;
//     case 0:
//     gunismi=gunler[6];
//     break;
//     default:
//     alert("tarih yanlıŞ");
// }
let tarih = gun + "/" + ay + "/" + yil + " " + gunismi;

document.getElementById("tarih").innerHTML = tarih;

// zaman : 
function zamanlama() {
    let date = new Date();
    let saat = date.getHours();
    let dakika = date.getMinutes();
    let saniye = date.getSeconds();

    saat = (saat < 10) ? "0" + saat : saat;
    dakika = (dakika < 10) ? "0" + dakika : dakika;
    saniye = (saniye < 10) ? "0" + saniye : saniye;

    let zaman = saat + ":" + dakika + ":" + saniye;
    document.getElementById("zaman").innerHTML = zaman;
};

window.addEventListener("load", function () {
    zamanlama();
    setInterval(zamanlama, 1000);
})