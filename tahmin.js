
let hak1  = +prompt("Kaç hak kullanmak istersiniz:")
let hak = Number(hak1)
let tahmin = Math.floor(Math.random() * 101)
let can = hak
let sayac1 = 0
let sayac = Number(sayac1)
while(hak > 0){
    let sayi = +prompt("0-100 arasında sayı giriniz:")
// let hak1  = +prompt("Kaç hak kullanmak istersiniz:")
// let hak = Number(hak1) 

sayac ++
// console.log(sayac);
hak --
// console.log(hak);
// console.log(sayi);
// console.log(sayac);
// console.log(tahmin);
if(sayi < 0 || sayi > 100){
    alert("0-100 aralığında sayı girmelisiniz.");
}else{
     if( sayi === tahmin) {
            console.log("Tebrikler", sayac,".", "seferde bildiniz.","Doğru Sayı:", tahmin  ,"Puanınız",(100-((100/can)*(sayac-1))));
            break
        }
    else if(sayi < tahmin){
            alert("Daha büyük değer giriniz:");
          
        }else if(sayi > tahmin){
            alert("Daha küçük değer giriniz:");     
        }
    }
}