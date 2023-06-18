let lengthEl = document.getElementById("length-results-el")
let volumeEl = document.getElementById("volume-results-el")
let massEl = document.getElementById("mass-results-el")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function() {
    let unitsInput = document.getElementById("num-input")
    window.convertUnits(unitsInput.value)
})

const metersToFeet = 3.281
const feetToMeters = 1 / metersToFeet

const litersToGallons = 0.264
const gallonsToLiters = 1 / litersToGallons

const kilosToPounds = 2.204
const poundsToKilos = 1 / kilosToPounds

function convertLength(value) {
    const toFeet = limit3Decimals(value * metersToFeet)
    const toMeters = limit3Decimals(value * feetToMeters)
    let conversionString = ""
    
    if (value === "") {
        conversionString = `0 meters = 0 feet | 0 feet = 0 meters`
    } else if (value === 1) {
        conversionString = `${value} meter = ${toFeet} feet | ${value} foot = ${toMeters} meters`
    } else {
        conversionString = `${value} meters = ${toFeet} feet | ${value} feet = ${toMeters} meters`
    }
    
    window.lengthEl.innerText = conversionString
}

function convertVolume(value) {
    const toGallons = limit3Decimals(value * litersToGallons)
    const toLiters = limit3Decimals(value * gallonsToLiters)
    let conversionString = ""
    
    if (value === "") {
        conversionString = `0 liters = 0 gallons | 0 gallon = 0 liters`
    } else if (value === 1) {  
        conversionString = `${value} liter = ${toGallons} gallons | ${value} gallon = ${toLiters} liters`
    } else {
        conversionString = `${value} liters = ${toGallons} gallons | ${value} gallons = ${toLiters} liters`
    }
    window.volumeEl.innerText = conversionString
}

function convertMass(value) {
    const toPounds = limit3Decimals(value * kilosToPounds)
    const toKilos = limit3Decimals(value * poundsToKilos)
    let conversionString = ""
    
    if (value === "") {
        conversionString = `0 kilos = 0 pounds | 0 pounds = 0 pounds`
    } else if (value === 1) {
        conversionString = `${value} kilos = ${toPounds} pounds | ${value} pound = ${toKilos} Kilos`
    } else {
        conversionString = `${value} kilos = ${toPounds} pounds | ${value} pounds = ${toKilos} pounds`
    }
    
    window.massEl.innerText = conversionString
}

function convertUnits(value = 20) {
    convertLength(value)
    convertVolume(value)
    convertMass(value)
}

function limit3Decimals(value) {
    if (typeof value === 'number') {
        return value.toFixed(3)
    }
}

window.convertUnits(20)