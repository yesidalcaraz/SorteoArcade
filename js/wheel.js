var names = ["Juana", "Karen", "Elena", "Joana", "Rodrigo", "Marilyn", "Santiago", "Victor", "Hanan", "Diana", "Jaime", "Yesid", "Aliona", "Esther", "Belen", "Magdalena", "Daniel", "Ernesto", "Laura", "Maria", "Maelly", "Yeison", "Erick", "Gema"];

var numeros = Array();

var x = Object.keys(localStorage)
for (var g = 0; g < x.length; g++) {
    numeros[g] = x[g];
}

function reiniciar() {

    location.reload();
    localStorage.clear();
}
function numeroAleatorio() {
    if (numeros.length == 24) {
       /* alert("Ya han sido seleccionadas todas las píldoras");*/
    } else {

        var nuevoNumero = 24;
        while (nuevoNumero == 24) {
            nuevoNumero = Math.floor(Math.random() * 24);
            for (var i = 0; i < numeros.length; i++) {
                if (numeros[i] == nuevoNumero) {
                    nuevoNumero = 24;
                    break;
                }
            }
        }

        //Equivalencia número con nombres
        numeros.push(nuevoNumero);
        localStorage.setItem(nuevoNumero, names[nuevoNumero])
        var x = Object.keys(localStorage)
        console.log(x.length)
        for (var g = 0; g < x.length; g++) {
            console.log(localStorage.getItem(x[g]))
        }


      document.getElementById("numero").innerHTML = names[nuevoNumero];

    }

}
