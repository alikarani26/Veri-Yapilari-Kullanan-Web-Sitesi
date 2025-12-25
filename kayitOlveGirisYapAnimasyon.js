// Şifre Gösterme Kodları
const sifreGirisYap = document.getElementById("sifreGirisYap");
const sifreKayitOl = document.getElementById("sifre");
const sifreGöster = document.getElementById("sifreGoster");

sifreGoster.addEventListener("change", function () {
    const type = sifreGoster.checked ? "text" : "password";
    if (sifreGirisYap) sifreGirisYap.type = type;
    if (sifreKayitOl) sifreKayitOl.type = type;
});