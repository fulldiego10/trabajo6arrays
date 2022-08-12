class autos {
    constructor(color, modelo, motor, transmision) {

        this.motor = motor;
        this.transmision = transmision;
        this.color = color;
        this.modelo = modelo;
    }
}


let autosExclusivos = [];

for (let i = 0; i < 3; i++) {

    let modelo = prompt("Elije el auto de tus sueños: Ferarri, porshe, lamborghini").toUpperCase();
    let color = prompt("Que color desea su auto: Rojo, Azul, Amarillo, ").toUpperCase();
    let motor = prompt("Que motor prefiere V6, V8, V10, V12").toUpperCase();
    let transmision = prompt("Caja Automatica, Manual, Secuencial").toUpperCase();


    autosExclusivos.push(new autos(color, modelo, motor, transmision));
}

console.table(autosExclusivos);

for (let autos of autosExclusivos) {
    document.write("<br>" + "Modelo elegido es: " + autos.modelo + "<br>");
    document.write("<br>" + "Color del vehiculo : " + autos.color + "<br>");
    document.write("Motor elegido : " + autos.motor + "<br>");
    document.write("El tipo de caja de cambios es : " + autos.transmision + "<br>");

}