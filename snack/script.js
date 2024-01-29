const option = prompt("celsius, media o cfs?");

if (option === "celsius") {

    const celsius = +prompt ("Fornisci un valore di gradi Celsius: ");

    if (typeof celsius === 'number' && !Number.isNaN(celsius)) {

        console.log('✅ Il valore inserito è: ', celsius);
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

else if (option === "media") {

    const a = +prompt ("Fornisci 3 valori di cui calcolare la media, primo: ");
    const b = +prompt ("Secondo: ");
    const c = +prompt ("Terzo: ");

    if (typeof a === 'number' && !Number.isNaN(a) && typeof b === 'number' && !Number.isNaN(b) && typeof c === 'number' && !Number.isNaN(c)) {

        console.log('✅ I valori inseriti sono: ', a, b, c);

        const sum = (a + b + c);
        const media = (sum / 3).toFixed(2);
        console.log('La media dei valori è: ', +media);

        document.getElementById('secondex').innerHTML = 
        ` La media dei valori ${a}, ${b}, ${c} è: ${media}`;

    } else {

        console.log('⛔️ value is NOT a number');
        alert("Valore inserito non valido, riprovare!");
        location.reload(true);
    }
    
}    

