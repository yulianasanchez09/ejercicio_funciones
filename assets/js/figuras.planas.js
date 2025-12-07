/**
 * Función del Triangulo
 */

function areaTriangulo(){
    let b = document.getElementById("baseTri").value;
    let h = document.getElementById("alturaTri").value;
    let resultado = (b * h) / 2;
    document.getElementById("resTriangulo").innerHTML = "Área = " + resultado;
}

/**
 * Función Paralelogramo
 */

function areaParalelogramo(){
    let b = document.getElementById("basePar").value;
    let h = document.getElementById("alturaPar").value;
    let resultado = b * h;
    document.getElementById("resParalelogramo").innerHTML = "Área = " + resultado;
}

/**
 * Función del Rectángulo
 */

function areaRectangulo(){
    let b = document.getElementById("baseRec").value;
    let a = document.getElementById("alturaRec").value;
    let resultado = b * a;
    document.getElementById("resRectangulo").innerHTML = "Área = " + resultado; 
}

/**
 * Función del Cuadrado
 */

function areaCuadrado(){
    let a = document.getElementById("alturaCua").value;
    let resultado = Math.pow (a, 2);
    document.getElementById("resCuadrado").innerHTML = "Área = " + resultado;
}

/**
 * Función del  Rombo
 */

function areaRombo(){
    let D = document.getElementById("diagMayor").value;
    let d = document.getElementById("diagMenor").value;
    let resultado = (D * d) / 2;
    document.getElementById("resRombo").innerHTML = "Área = " + resultado;
}

/**
 * Funcion de la Cometa
 */

function areaCometa(){
    let D = document.getElementById("diagMayor").value;
    let d = document.getElementById("diagMenor").value;
    let resultado = (D * d) / 2;
    document.getElementById("resCometa").innerHTML = "Área = " + resultado;
}

/**
 * Función del Trapecio
 */

function areaTrapecio(){
    let B = document.getElementById("baseMayor").value;
    let b = document.getElementById("baseMenor").value;
    let h = document.getElementById("alturaTrap").value;
    let resultado = ((parseFloat (B) + parseFloat (b)) * h) / 2;
    document.getElementById("resTrapecio").innerHTML = "Área = " + resultado;
}

/**
 * Función del Círculo
 */

function areaCirculo(){
    let r = document.getElementById("radioCir").value;

    let resultado = Math.PI * Math.pow(r, 2);
    document.getElementById("resCirculo").innerHTML = "Área = " + resultado.toFixed(2);
}