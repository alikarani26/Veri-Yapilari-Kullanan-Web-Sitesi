// Stack Yapısı ile Kayıt Alma ve Giriş Yapma
class Stack{ // Stack fonksiyonları için class açtık
    constructor(){//kaydetmek için items adında bir array açtık
        this.items = [];
    }

    push(eklenenOge){//ekleme
        this.items.push(eklenenOge);
    }

    pop(){//veri çekme
        if(this.isEmpty()){
            return null;
        }
        return this.items.pop();
    }

    isEmpty(){//boş mu diye kontrol etme
        return this.items.length === 0;
    }
}

const user = new Stack(); // user adında stack tanımladık

function kayitOl() {//kayıt ol sayfasndaki kodlar
    //değişkenler
    const sifre = document.getElementById("sifre").value;
    const eposta = document.getElementById("eposta").value;
    //local hafızaya kaydediyoruz ki verileri kontrol edebilelim
    localStorage.setItem("kullaniciSifre", sifre);
    localStorage.setItem("kullaniciEposta", eposta);
    // fonk doğru çalışırsa diye alert kontrolü
    alert("Kayıt Başarılı!");
    //giriş yapma sayfasına yönlendirme
    window.location.href = "girisYap.html";
}

function girisYap() {//giriş yap sayfasındaki kodlar
    //değişkenler
    const sifre = document.getElementById("sifreGirisYap").value;
    const eposta = document.getElementById("epostaGirisYap").value;
    //hafızadaki veriler(karşılaştırmak için)
    const sifreKontrol = localStorage.getItem("kullaniciSifre");
    const epostaKontrol = localStorage.getItem("kullaniciEposta");
    //uyum var mı diye kontrol
    if (sifre === sifreKontrol && eposta === epostaKontrol) {
        //eğer varsa alert ile debug ve ana sayfaya yönlendirme
        alert("E-Posta: " + eposta + ", Şifre: " + sifre);
        window.location.href = "anaSayfa.html";
    } else {//uyum yoksa uyarı verme
        alert("E-Posta veya Şifre Uyumsuz!");
    }
}
// Stack Yapısı ile Kayıt Alma ve Giriş Yapma SON