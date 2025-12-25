// Animasyon ve Veri Yapılarından Ayrı Olan Kısımlar
    // Ürünlerin Değişkenleri
    const ülkergofret = document.getElementsByClassName("ulkerCikolata");
    const ülkerhalley = document.getElementsByClassName("halley");
    const ülkerrondo = document.getElementsByClassName("rondo");
    const etiburçak = document.getElementsByClassName("etiBurcak");
    const etipuf = document.getElementsByClassName("etiPuf");
    const biscolata = document.getElementsByClassName("mood");
    const luppo = document.getElementsByClassName("luppo");
    const nesquikbar = document.getElementsByClassName("bar");
    const süttozu = document.getElementsByClassName("toz");
    const torku = document.getElementsByClassName("torku");
    // Ürünlerin Değişkenleri SON
    // Sepet Açma Kapama
    const sepetKutusu1 = document.getElementById("sepetKutusu");
    const ürünler = document.getElementById("ürünler");

    function sepetKutusu(){
        if(sepetKutusu1.style.display == "block"){
            sepetKutusu1.style.display = "none";
        } else {
            sepetKutusu1.style.display = "block";
        }
    }
    // Sepet Açma Kapama SON
    // Arama Kutusu Animasyonları
    const aramaKutusu = document.getElementById("aramaKutusu");
    const aramaKutusuBuyutecImage = document.getElementById("buyutecImage");

    aramaKutusu.addEventListener("focus", () => {
        aramaKutusu.placeholder = "";
        aramaKutusuBuyutecImage.style.display = "none";
    });

    aramaKutusu.addEventListener("blur", () => {
        if (aramaKutusu.value.trim() === "") {
            aramaKutusu.placeholder = "Aramak İstediğin Ürünü Yaz";
            aramaKutusuBuyutecImage.style.display = "block";
        }
    });
    // Arama Kutusu Animasyonları SON

// Animasyon ve Veri Yapılarından Ayrı Olan Kısımlar SON 