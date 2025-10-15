import { int2short } from "./numscale.js"
const $ = x => document.querySelector(x)

let alans = 0n
let clickMultiplier = 1n

const $alan = $("#alan")
const $alanCounter = $("#alan-counter")
const $damageIndicators = $("#damage-indicators")
$alan.onclick = (e) => {
    alans += clickMultiplier

    const rect = $damageIndicators.getBoundingClientRect()

    let dmg = document.createElement("div")
    dmg.classList.add("damage-indicator")
    dmg.textContent = "+" + clickMultiplier
    dmg.style.left = (e.screenX - rect.x) + "px"
    $damageIndicators.appendChild(dmg)
    setTimeout(() => dmg.remove(), 1000)
}

$("#reset-button").onclick = () => {
    alans = 0n
    clickMultiplier = 1n
}
$("#buy-button").onclick = () => {
    if(alans >= 100n) {
        alans -= 100n
        clickMultiplier += 1n
    }
    else {
        alert("Not enough alans!")
    }
}

function tick() {
    $alanCounter.innerHTML = int2short(alans).replace(" ", "<br/>") + " Alans"

    requestAnimationFrame(tick)
}
tick()
