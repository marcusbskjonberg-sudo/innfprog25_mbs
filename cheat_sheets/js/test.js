let fatherAge = 37;
let motherAge = 32;
let daughterAge = 7;
let sonAge = 2;
let navn = "test"

const averageAge = (fatherAge + motherAge + daughterAge + sonAge) / 4;

document.getElementById("utskrift").innerHTML = "Average age: " + averageAge;