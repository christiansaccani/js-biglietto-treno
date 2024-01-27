const kmtot = +prompt ("Quanti chilometri avete intenzione di percorrere?");
var price;

if (typeof kmtot === 'number' && !Number.isNaN(kmtot)) {

console.log('✅ value is a number');
price = kmtot * 0.21;
console.log("Prezzo attuale: €", price);

} else {

  console.log('⛔️ value is NOT a number');
  alert("Valore inserito non valido, la prego di ricaricare la pagina e riprovare!")

}