const kmtot = +prompt ("Quanti chilometri avete intenzione di percorrere?");
var price;

if (typeof kmtot === 'number' && !Number.isNaN(kmtot) && kmtot > 0) {

console.log('✅ value is a number');
document.getElementById('my_km').innerHTML = 
` Il passeggero percorrerà ${kmtot} km. `;

price = kmtot * 0.21;
console.log("Prezzo attuale: €", price);

} else {

    console.log('⛔️ value is NOT a number');
    alert("Valore inserito non valido, la preghiamo di ricaricare la pagina e riprovare!");
    location.reload(true);

}

const anni = +prompt ("Quanti anni ha il passeggero?");

if (typeof anni === 'number' && !Number.isNaN(anni) && anni > 0) {

    console.log('✅ value is a number');

    if (anni < 18) {
        console.log('Il passeggero è minorenne, si applica sconto!');
        price = (price * 80 / 100).toFixed(2);     //arrotondare il risultato ai decimali
        console.log("Prezzo finale: €", price);

        document.getElementById('my_coupon').innerHTML = 
        "Il passeggero ha diritto allo sconto Under18 del 20%!";

        document.getElementById('price').innerHTML = 
        ` Il prezzo finale è ${price} €. `;
        
  
        } else if (anni >= 65) {
            console.log('Il passeggero è Over65, si applica sconto!');
            price = (price * 60 / 100).toFixed(2);
            console.log("Prezzo finale: €", price);

            document.getElementById('my_coupon').innerHTML = 
            "Il passeggero ha diritto allo sconto Over65 del 40%!";

            document.getElementById('price').innerHTML = 
            ` Il prezzo finale è ${price} €. `;
      
            } else {
                console.log('Il passeggero non ha diritto ad alcuno sconto.');
                console.log("Prezzo finale: €", price);

                document.getElementById('price').innerHTML = 
                ` Il prezzo finale è ${price} €. `;
            }
    
    } else {
    
        console.log('⛔️ value is NOT a number');
        alert("Valore inserito non valido, la preghiamo di ricaricare la pagina e riprovare!");
        location.reload(true);
    
    }