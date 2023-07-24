const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".area-mensaje");
const desencriptado = document.querySelector(".desencriptado");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    document.getElementById("img-muñeco").style.display = "none";
    document.getElementById("titulo-mensaje").style.display = "none";
    document.getElementById("parrafo-mensaje").style.display = "none";
    textArea.value = "";
    desencriptado.style.display = "flex";
}

function btnDesencriptar() {
    if (textArea.value != "") {
        const textoEncriptado = desencriptar(textArea.value);
        mensaje.value = textoEncriptado;
        document.getElementById("img-muñeco").style.display = "none";
        document.getElementById("titulo-mensaje").style.display = "none";
        document.getElementById("parrafo-mensaje").style.display = "none";
        textArea.value = "";
        desencriptado.style.display = "flex";
    }

}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto Copiado");
    document.getElementById("img-muñeco").style.display = "flex";
    document.getElementById("titulo-mensaje").style.display = "flex";
    document.getElementById("parrafo-mensaje").style.display = "flex";
    desencriptado.style.display = "none";
}