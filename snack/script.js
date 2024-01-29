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

else if (option === "cfs") {

    const user = prompt ("carta, forbice o sasso?")
    console.log('La scelta del giocatore è: ', user);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const computer = getRandomInt(1, 3);     // 1=carta, 2=forbice, 3=sasso;
    console.log('Il numero scelto del computer è: ', computer);
    
    if (user == "carta") {

        if (computer == 1) {

            console.log('Pareggio!');
            document.getElementById('thirdex').innerHTML = 
            ` Giocatore: ${user}, Computer: carta: Pareggio!`;

        } else if (computer == 2) {

            console.log('Sconfitta...');
            document.getElementById('thirdex').innerHTML = 
            ` Giocatore: ${user}, Computer: forbice: Sconfitta...`;

        } else {

            console.log('Vittoria!');
            document.getElementById('thirdex').innerHTML = 
            ` Giocatore: ${user}, Computer: sasso: Vittoria!`;
        }

    }   else if (user == "forbice") {

        if (computer == 1) {

            console.log('Vittoria!');
            document.getElementById('thirdex').innerHTML = 
            ` Giocatore: ${user}, Computer: carta: Vittoria!`;

        } else if (computer == 2) {

            console.log('Pareggio!');
            document.getElementById('thirdex').innerHTML = 
            ` Giocatore: ${user}, Computer: forbice: Pareggio!`;

        } else {

            console.log('Sconfitta...');
            document.getElementById('thirdex').innerHTML = 
            ` Giocatore: ${user}, Computer: sasso: Sconfitta...`;
        }

    }   else if (user == "sasso") {

        if (computer == 1) {

            console.log('Sconfitta...');
            document.getElementById('thirdex').innerHTML = 
            ` Giocatore: ${user}, Computer: carta: Sconfitta...`;

        } else if (computer == 2) {

            console.log('Vittoria!');
            document.getElementById('thirdex').innerHTML = 
            ` Giocatore: ${user}, Computer: forbice: Vittoria!`;

        } else {

            console.log('Pareggio!');
            document.getElementById('thirdex').innerHTML = 
            ` Giocatore: ${user}, Computer: sasso: Pareggio!`;
        }

    }   else {

        console.log('⛔️ value is NOT correct');
        alert("Valore inserito non valido, riprovare!");
        location.reload(true);
    }

}   else {

    console.log('⛔️ value is NOT correct');
    alert("Valore inserito non valido, riprovare!");
    location.reload(true);
}