const kmtot = +prompt ("Quanti chilometri avete intenzione di percorrere?");
var price;

if (typeof kmtot === 'number' && !Number.isNaN(kmtot)) {

console.log('✅ value is a number');
price = kmtot * 0.21;
console.log("Prezzo attuale: €", price);

} else {

  console.log('⛔️ value is NOT a number');
  alert("Valore inserito non valido, la preghiamo di ricaricare la pagina e riprovare!")

}

const anni = +prompt ("Quanti anni ha il passeggero?");

if (typeof anni === 'number' && !Number.isNaN(anni)) {

    console.log('✅ value is a number');

    if (anni < 18) {
        console.log('Il passeggero è minorenne, si applica sconto!');
        price = (price * 80 / 100).toFixed(2);     //arrotondare il risultato ai decimali
        console.log("Prezzo finale: €", price);
  
        } else if (anni >= 65) {
            console.log('Il passeggero è Over65, si applica sconto!');
            price = (price * 60 / 100).toFixed(2);
            console.log("Prezzo finale: €", price);
      
            } else {
                console.log('Il passeggero non ha diritto ad alcuno sconto.');
                console.log("Prezzo finale: €", price);
            }
    
    } else {
    
      console.log('⛔️ value is NOT a number');
      alert("Valore inserito non valido, la preghiamo di ricaricare la pagina e riprovare!")
    
    }