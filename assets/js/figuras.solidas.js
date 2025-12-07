/**
 * Volumen del Cubo
 */

function volumenCubo(){
    const l = parseFloat(document.getElementById("ladoCubo").value);
    const vol = Math.pow(l, 3);
    document.getElementById("resCubo").innerHTML = "Volumen: " + vol;
}

/**
 * Volumen del Paralelepipedo
 */

function volumenParalelepipedo(){
const l = parseFloat(document.getElementById("largoP").value);
const b = parseFloat(document.getElementById("anchoP").value);
const h = parseFloat(document.getElementById("altoP").value);

const vol =  l * b * h;
document.getElementById("resParalelepipedo").innerHTML = "Volumen: " + vol;
}

/**
 * Volumen del Cilindro
 */

function volumenCilindro(){
    const r = parseFloat(document.getElementById("radioCil").value);
    const h = parseFloat(document.getElementById("alturaCil").value);

    const vol = Math.PI * Math.pow(r,2) * h;
    document.getElementById("resCilindro").innerHTML = "Volumen: " + vol;
}

/**
 * Volumen de la Esfera
 */

function volumenEsfera(){
    const r = parseFloat(document.getElementById("radioEsf").value);

    const vol = (4/3) * Math.PI * Math.pow(r,3);

    document.getElementById("resEsfera").innerHTML = "Volumen = " + vol;
}

/**
 * Volumen del Cono
 */

function volumenCono(){
    const r = parseFloat(document.getElementById("radioCono").value);
    const h = parseFloat(document.getElementById("alturaCono").value)

    const vol = (1/3) * Math.PI * Math.pow(r,2) * h;
    document.getElementById("resCono").innerHTML = "Volumen = " + vol;
}