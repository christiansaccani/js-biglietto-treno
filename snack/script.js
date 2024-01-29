const option = prompt("celsius, media o cfs?");

if (option === "celsius") {

    const celsius = +prompt ("Fornisci un valore di gradi Celsius: ");

    if (typeof celsius === 'number' && !Number.isNaN(celsius)) {

        const fahr = celsius * 1.8 + 32;
        console.log('Il valore convertito in Fahrenheit è: ', fahr);
        document.getElementById('firstex').innerHTML = 
        ` ${celsius} gradi Celsius, corrisponde a ${fahr} gradi Fahrenheit. `;

    } else {

        console.log('⛔️ value is NOT a number');
        alert("Valore inserito non valido, riprovare!");
        location.reload(true);
    }
    

}



    