function criptografar(msg) {
    let outputText = msg
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "uifat");

    console.log(outputText)
}

function descriptografar(msg) {
    let outputText = msg
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/uifat/g, "u");

    console.log(outputText)
}
