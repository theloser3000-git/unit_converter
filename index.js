// 1 meter = 3.281 feet 
// 1 litre = 0.264 gallon 
// 1 kilogram = 2.204 pound 

const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const cnVrt = document.getElementById("cnvrt")
const alerT = document.getElementById("alert")

cnVrt.addEventListener("click", function() {
    const num = Number(inputEl.value)
    if (num) {
        // if input -> not a number , num -> NaN , a falshy value ... that's it !!
        inputEl.value = ""
        alerT.textContent = ""
        render(num)
    } else {
        alerT.textContent = "Note: oh, man! come onn ... just numbers, please !! "
    }
})


function Length(param) {
    let inFeet = param * 3.281
    let inMeter = param / 3.281
    return [inFeet.toFixed(3), inMeter.toFixed(3)]
}

function Volume(param) {
    let inGallon = param * 0.264
    let inLitre = param / 0.264
    return [inGallon.toFixed(3), inLitre.toFixed(3)]
}

function Mass(param) {
    let inPound = param * 2.204
    let inKilo = param / 2.204
    return [inPound.toFixed(3), inKilo.toFixed(3)]
}

function render(num) {
    let lengths = Length(num)
    let volumes = Volume(num)
    let masses = Mass(num)
    lengthEl.textContent = `${num} meters = ${lengths[0]} feet | ${num} feet = ${lengths[1]} meters`
    volumeEl.textContent = `${num} litres = ${volumes[0]} gallons | ${num} gallons = ${volumes[1]} litres`
    massEl.textContent = `${num} kilos = ${masses[0]} pounds | ${num} pounds = ${masses[1]} kilos`

}
