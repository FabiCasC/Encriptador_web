function encriptarTexto() {
    let texto = document.getElementById("inputTexto").value.toLowerCase();
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    mostrarResultado(textoEncriptado);
    ocultarImagen();
}

function desencriptarTexto() {
    let textoEncriptado = document.getElementById("inputTexto").value.toLowerCase();
    let textoDesencriptado = textoEncriptado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(texto) {
    let output = document.getElementById("outputTexto");
    output.textContent = texto ? texto : "Ningún mensaje fue encontrado";
}

function ocultarImagen() {
    let imagen = document.querySelector(".imagen");
    if (imagen) imagen.style.display = "none";
}

function copiarTexto() {
    let textoParaCopiar = document.getElementById("outputTexto");
    let range = document.createRange();
    range.selectNode(textoParaCopiar);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    mostrarMensajeCopiado();
}

function mostrarMensajeCopiado() {
    let mensajeCopiado = document.getElementById("mensajeCopiado");
    mensajeCopiado.style.display = "inline";
    setTimeout(() => {
        mensajeCopiado.style.display = "none";
    }, 2000);
}


