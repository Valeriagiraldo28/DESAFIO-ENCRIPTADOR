// script.js
function encriptar(texto) {
    let textoEncriptado = texto.replace(/e/g, 'enter')
                               .replace(/i/g, 'imes')
                               .replace(/a/g, 'ai')
                               .replace(/o/g, 'ober')
                               .replace(/u/g, 'ufat');
    return textoEncriptado;
}

function desencriptar(texto) {
    let textoDesencriptado = texto.replace(/enter/g, 'e')
                                  .replace(/imes/g, 'i')
                                  .replace(/ai/g, 'a')
                                  .replace(/ober/g, 'o')
                                  .replace(/ufat/g, 'u');
    return textoDesencriptado;
}

function limpiarTexto() {
    let input = document.getElementById('inputTexto');
    input.value = input.value.toLowerCase().replace(/[^a-z\s]/g, '');
}

document.getElementById('btnEncriptar').onclick = function() {
    let texto = document.getElementById('inputTexto').value;
    document.getElementById('outputTexto').value = encriptar(texto);
};

document.getElementById('btnDesencriptar').onclick = function() {
    let texto = document.getElementById('inputTexto').value;
    document.getElementById('outputTexto').value = desencriptar(texto);
};

document.getElementById('btnCopiar').onclick = function() {
    let outputTexto = document.getElementById('outputTexto');
    outputTexto.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
};