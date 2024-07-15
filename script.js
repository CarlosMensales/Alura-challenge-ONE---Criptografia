function criptografar() {
    let msg = document.getElementById('texto_f').value
    let outputText = msg
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "uifat");

    exibirMensagem(outputText)
}

function descriptografar() {
    let msg = document.getElementById('texto_f').value
    let outputText = msg
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/uifat/g, "u");

    exibirMensagem(outputText)
}

function exibirMensagem(msg) {
    img = document.getElementById('img2')
    p = document.getElementById('p2')
    if(p && img) {
        img.remove()
        p.remove()    
    }
    h2 = document.getElementById('output')
    h2.textContent = msg
    let botao_copiar = document.getElementById('botao_copiar')
    botao_copiar.classList.add('botao_copiar')
    botao_copiar.style.display = 'inline'
    botao_copiar.addEventListener('click', copiarMensagem);
    
}

function copiarMensagem() {
    const h2 = document.getElementById('output');
    const mensagem = h2.textContent;
    navigator.clipboard.writeText(mensagem)
        .then(() => {
            alert('Mensagem copiada para a área de transferência');
        })
        .catch(err => {
            console.log('Erro ao copiar a mensagem: ' + err);
        });
}
