const scales = [""," thousand"," million"," billion"," trillion"," quadrillion"," quintillion"," sextillion"," septillion"," octillion"," nonillion"]
const conwayGuyNmsx = {
    deci:         0b1000, centi:        0b1001,
    viginti:      0b0110, ducenti:      0b1000,
    triginta:     0b1010, trecenti:     0b1010,
    quadraginta:  0b1010, quadringenti: 0b1010,
    quinquaginta: 0b1010, quingenti:    0b1010,
    sexaginta:    0b1000, sescenti:     0b1000,
    septuaginta:  0b1000, septingenti:  0b1000,
    octoginta:    0b0110, octingenti:   0b0101,
    nonaginta:    0b0000, nongenti:     0b0000
}
for(const h of ["","centillion","ducentillion","trecentillion","quadrigentillion","quingentillion","sescentillion","septingentillion","octingentillion","nongentillion"]) {
    for(const t of ["deci","viginti","triginta","quadraginta","quinquaginta","sexaginta","septuaginta","octoginta","nonaginta"]) {
        for(let u of ["","un","duo","tre","quattuor","quin","se","septe","octo","nove"]) {
            const x = conwayGuyNmsx[t||h]
            if(u === "tre") u += x&0b0011 ? "s" : ""
            else if(x & 0b0001 && u === "se") u += x&0b0010 ? "s" : "x"
            else if(x & 0b0100 && u === "septe" || u === "nove") u += x&0b1000 ? "n" : "m"

            scales.push(h === "" ? ` ${u}${t}${h}` : ` ${u}${t.slice(0, -1)}illion`)
        }
    }
}

export function int2short(num, trunc = 5) {
    if(num < 1_000) return num.toString()
    else if(num < 1_000_000) return `${num.toString().slice(0,-3)},${num.toString().slice(-3)}`

    const n = Math.floor((num.toString().length-1) / 3)
    return Number(num * 10n**BigInt(trunc) / 1000n**BigInt(n)) / 10**trunc + scales[n]
}
