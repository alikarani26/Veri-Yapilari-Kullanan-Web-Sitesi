//Linked List ile Sepete Ürün Ekleme

    class Dugum {//elemanları temsil eden class
        constructor(isim, adet = 1){ //eğer adet verilmezse ilk defa sepete ekleneceği için 1 olur
            this.isim = isim;
            this.adet = adet;
            this.sonraki = null;
        }
    }

    class bagliListeSepet{
        constructor(){
            this.bas = null;//başlangıçta boş olması gerektiği için buraya null atadıık
        }

        ekle(urunIsmi){
            let gecici = this.bas; //geçici göstermemizi baştan başlattık
            while(gecici!==null){//listenin düğümlerini dolaşmak için döngüye aldık
                if(gecici.isim === urunIsmi){//eğer aynı üründen varsa adeti 1 artar
                    gecici.adet++;
                    return;
                }
                gecici = gecici.sonraki;//burada da sonraki düğüme geçer
            }

            const yeniDugum = new Dugum(urunIsmi);//burada yeni bir düğüm oluşturduk
            yeniDugum.sonraki = this.bas;//başına ekleme yapmak için
            this.bas = yeniDugum;//baştaki artık yeni düğüm oldu
    }

    temizle(){//temizlemek için düğümdeki başa null verdik(sepeti temizlemez ama düğümleri temizler)
        this.bas = null;
    }

    metinOlustur(){//sepet içine metin yazmak için
        let yazi = "";//burada boş bir yazı belirledik
        let gecici = this.bas;//geçici diye bir değişken tanımladık ve baştaki düğüme eşitedik

        while(gecici!==null){//geçici nul değilse döngüye girer
            yazi += `${gecici.isim} x${gecici.adet} <br>`;//ve yazıyı ismine ve adetine eşitler
            gecici = gecici.sonraki;//geçiciyi de bir sonrakine eşitler ve değiştirir
        }
        return yazi;//burada da yazıyı döndürür(yeni değeri)
    }
    }
    const sepet = new bagliListeSepet();//sepet oluşturduk

    function sepeteEkle(urunAdi) {//yukarıda tanımlanan şeyleri speetteki yazıya ekliyoruz
        sepet.ekle(urunAdi);
        sepetiYazdir();
    }

    function sepetiYazdir(){//burada ürüler kısmını gösterip metin oluşturarak ekleme yapıyoruz
        ürünler.innerHTML = sepet.metinOlustur();
    }

    function sepetTemizle(){//temizleme yapmak içinde sepet içini boşalttık ve sepeti tekrar yazdırdık
        sepet.temizle();//yukarıdaki fonksiyon
        sepetiYazdir();
    }

// Ürünlerin classlarını alıp click methodu ile fonksiyona ürün adı gönderdik

    ülkergofret[0].addEventListener("click", () => sepeteEkle("Ülker Gofret"));
    ülkerhalley[0].addEventListener("click", () => sepeteEkle("Ülker Halley"));
    ülkerrondo[0].addEventListener("click", () => sepeteEkle("Ülker Rondo"));
    etiburçak[0].addEventListener("click", () => sepeteEkle("Eti Burçak Coconut"));
    etipuf[0].addEventListener("click", () => sepeteEkle("Eti Puf Coconut"));
    biscolata[0].addEventListener("click", () => sepeteEkle("Biscolata Mood"));
    luppo[0].addEventListener("click", () => sepeteEkle("Luppo Red Velvet"));
    nesquikbar[0].addEventListener("click", () => sepeteEkle("Nesquik Bar"));
    süttozu[0].addEventListener("click", () => sepeteEkle("Nesquik Süt Tozu"));
    torku[0].addEventListener("click", () => sepeteEkle("Torku Bisküvi"));

    //Hash Table ile Ürün Arama
    // ürünlerin tüm divlerini aldık
    const tumUrunler = document.querySelectorAll('.product-item');

    // hash table için map oluşturduk
    let urunTablosu = new Map(); // hash table olarak map oluşturduk

    // ürünler tablosu için fonksiyon
    function urunTablosuOlustur() {
        // map içine girmek için foreach kullandık
        tumUrunler.forEach(div => {
            // büyük harf ve küçük harf sıkıntısı olmaması için to lower case aldık,
            // divlerin textlerini alarak ürün isimlerini belirledik
            const isim = div.querySelector('.product-name').textContent.trim().toLowerCase();
            
            // map içine set ile ürün adı + div elemanını gönderdik
            urunTablosu.set(isim, div);
        });
    }
    urunTablosuOlustur(); // ürün tablosu oluşturma işini yaptık


    // burada ürün arama kodlarını yazdık
    // NOT: kısmi arama yapabilmek için includes() kullandık
    function urunAra(aranan) {
        aranan = aranan.toLowerCase(); // aranan ürünün harf büyük küçüklüğüne bakmamak için to lower case kullandık
        
        let bulunanlar = []; // kısmi olarak bulunan ürünleri tutmak için array oluşturduk

        // map içindeki ürünlerde arama yapıyoruz
        urunTablosu.forEach((div, isim) => {
            // eğer ürün adı aranan kelimeyi içeriyorsa (kısmi arama)
            if (isim.includes(aranan)) {
                bulunanlar.push(div); // bulunan ürünü listeye ekledik
            }
        });

        return bulunanlar; // bulunan ürünleri geri döndürüyoruz
    }


//Arama Kutusu  

    // arama kutusu değişkeni
    const aramaInput = document.getElementById("aramaKutusu");

    // arama inputuna bir şey yazıldığında tetikleniyor
    aramaInput.addEventListener("input", () => {
        
        // aranan inputun yine büyük küçük harf sorunu olmasın diye to lower case attık
        const text = aramaInput.value.trim().toLowerCase();

        // arama yapıldıktan sonra önce tüm ürünleri gizledik
        tumUrunler.forEach(u => u.style.display = "none");

        // eğer arama kutusu aktif ve boş ise o zaman bu devreye girer
        if (!text) {
            // tüm ürünleri yeniden gösteriyoruz
            tumUrunler.forEach(u => u.style.display = "inline-block");
            return;
        }

        // hash tabledan arama yapıyoruz (kısmi arama)
        const bulunan = urunAra(text);

        // eğer sonuç varsa divleri gösteriyoruz
        bulunan.forEach(div => {
            div.style.display = "inline-block"; // sadece eşleşen ürünleri göster
        });
    });
