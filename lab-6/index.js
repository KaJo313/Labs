const actualTemp = 50
const desiredTemp = 72
if (actualTemp < desiredTemp) {
    console.log ("Run heat")
}
    else {
        if (actualTemp > desiredTemp) {
            console.log ("Run A/C")
            }
        else {
            console.log ("Standby")
        }
    }

const tempCelsius = 10
const targetUnit = "F"
switch(targetUnit) {
    case "C":    /* Celsius */
        console.log(tempCelsius + " " + targetUnit)
        break;
    case "F":   /* Celsius to Farenheit */
        const tempFarenheit = tempCelsius * (9/5) + 32
        console.log(tempFarenheit + " " + targetUnit)
        break;
    case "K":   /* Celsius to Kelvin */
        const tempKelvin = tempCelsius + 273.15
        console.log(tempKelvin + " " + targetUnit)
        break;
    default:
        console.log("Please select C, F, or K")
        break;
}

