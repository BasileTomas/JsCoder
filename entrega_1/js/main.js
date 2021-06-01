let nombre = prompt("Ingrese su nombre: ");
let edad = Number(prompt("Ingrese su edad"));

while (isNaN(edad)) {
    alert("Ingrese un numero como edad.")
    edad = Number(prompt("Ingrese su edad nuevamente."));
}


if (edad > 18 && nombre.toUpperCase() != "HOMERO") {
    alert("Bienvenido " + nombre + ", disfrute de la noche!");
} else if (nombre.toUpperCase() == "HOMERO") {
    alert("No se admiten Homeros.");
    alert("Homero Archundia entro porque no se admiten HomeroS.");
} else {
    alert("Vuelva a su casa pequeñe.");
}