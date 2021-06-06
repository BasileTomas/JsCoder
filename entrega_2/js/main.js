function validateForm() {
    let age = document.forms["myForm"]["age"].value;
    let name = document.forms["myForm"]["name"].value;

    if (!(isValidName(name))) {
        name = getValidName()
    };

    if (!(isValidAge(age))) {
        age = getValidAge()
    };

    if (!(isLegalAge(age)) || (age)) {
        alert("Lamentablemente no puede ingresar al Bar.")
    } else {
        alert("Bienvenido al Bar")
    };

}


/**
 * Check if Age is valid
 * @param  {Number} age The age number
 * @return {Boolean} Tells you whether the age is valid or not.
 */
function isValidAge(age) {
    return ((!(isNaN(age)) && (age !== "")) ? true : false);
};


/**
 * Check if legal age, older than 17 years
 * @param  {Number} age The age number
 * @return {Boolean} Tells you whether the age is valid or not.
 */
function isLegalAge(age) {
    return ((age >= 18) ? true : false);
};


/**
 * Check if Name is valid
 * @param  {String} name Name.
 * @return {Boolean} Tells you whether the name is valid or not.
 */
function isValidName(name) {
    return (!(hasNumber(name)))
};


/**
 * Check if Name has a number
 * @param  {String} myString Name.
 * @return {Boolean} Tells you whether the name is valid or not.
 */
function hasNumber(myString) {
    return /\d/.test(myString);
};


/**
 * Obtain new valid name
 * @return {String} A new valid name.
 */
function getValidName() {
    let newName = prompt("Ingrese un nombre valido sin numeros");
    while (!(isValidName(newName))) {
        newName = prompt("Ingrese un nombre valido, por favor...")
    }
    return newName
};


/**
 * Obtain new valid age
 * @return {Number} A new valid age.
 */
function getValidAge() {
    let newAge = prompt("Ingrese una edad valida.");
    while (!(isValidAge(newAge))) {
        newAge = prompt("Ingrese una edad valida, por favor...")
    }
    return newAge
};