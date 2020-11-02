document.addEventListener("DOMContentLoaded", () => {
    const nombre = document.getElementById("nombre");
    const apellidos = document.getElementById("apellidos");
    const fecha_n = document.getElementById("fecha_n");
    const direccion = document.getElementById("direccion");
    const codigoPostal = document.getElementById("codigoPostal");
    const provincia = document.getElementById("provincia");
    const municipio = document.getElementById("municipio");
    const nombre2 = document.getElementById("nombre2");
    const apellidos2 = document.getElementById("apellidos2");
    const fecha_n2 = document.getElementById("fecha_n2");
    const direccion2 = document.getElementById("direccion");
    const codigoPostal2 = document.getElementById("codigoPostal2");
    const provincia2 = document.getElementById("provincia2");
    const municipio2 = document.getElementById("municipio2");
    const paso1 = document.getElementById("paso1");
    const paso2 = document.getElementById("paso2");
    const paso3 = document.getElementById("paso3");
    const paso4 = document.getElementById("paso4");
    const backButton = document.getElementById("backButton");
    const nextButton = document.getElementById("nextButton");
    const confirmarButton = document.getElementById("confirmarButton");
    const endButton = document.getElementById("endButton");
})



function siguiente() {
    backButton.style.display = "block"
    paso1.style.display = "none";
    paso2.style.display = "flex";
    nextButton.setAttribute('onclick', 'next()');
}

function regreso1() {
    nextButton.setAttribute('onclick', 'siguiente()');
    backButton.style.display = "none";
    paso1.style.display = "block";
    paso2.style.display = "none";
}

const elementoFormulario = document.getElementsByName("dataForm");

function Get_FormElementsValue(name, surname, f_nac, location, cp, prov, mun) {
    this.name = name.value;
    this.surname = surname.value;
    this.f_nac = f_nac.value;
    this.location = location.value;
    this.cp = cp.value;
    this.prov = prov.value;
    this.mun = mun.value;
}

function next() {
    const elemNoValidados = [];
    for (var i = 0; i < elementoFormulario.length; i++) {
        if (elementoFormulario[i].value == "") {
            elemNoValidados.push(elementoFormulario[i]);
            const error = MensajeError();
            elementoFormulario[i].insertAdjacentElement('afterend', error);
        }
    }
    if (elemNoValidados.length == 0) {
        const form_value = new Get_FormElementsValue(nombre, apellidos, fecha_n, direccion, codigoPostal, provincia, municipio);

        nombre2.textContent = form_value.name;
        apellidos2.textContent = form_value.surname;
        fecha_n2.textContent = form_value.f_nac;
        direccion2.textContent = form_value.location;
        codigoPostal2.textContent = form_value.cp;
        provincia2.textContent = form_value.prov;
        municipio2.textContent = form_value.mun;

        backButton.setAttribute('onclick', 'regreso2()');
        nextButton.textContent = 'Confirmar';
        nextButton.setAttribute('onclick', 'Enviar()');
        paso1.style.display = "none";
        paso2.style.display = "none";
        paso3.style.display = "flex";
    }
}

function MensajeError() {
    const error = document.createElement('span');
    error.textContent = 'ERROR: Introduce datos válidos.';
    error.className = 'error';
    return error;
}


function regreso2() {
    backButton.setAttribute('onclick', 'regreso1()');
    nextButton.setAttribute('onclick', 'next()');
    paso1.style.display = "none";
    paso2.style.display = "flex";
    paso3.style.display = "none";
}

function Enviar() {
    backButton.setAttribute('onclick', 'regreso3()');
    nextButton.style.display = "none";
    paso1.style.display = "none";
    paso2.style.display = "none";
    paso3.style.display = "none";
    paso4.style.display = "flex";


    document.getElementById('endButton').setAttribute('onclick', "location.href='index.html'");
}

function regreso3() {
    backButton.setAttribute('onclick', 'regreso2()');
    nextButton.textContent = 'Siguiente';
    nextButton.style.display = "block";
    nextButton.setAttribute('onclick', 'Enviar()');
    paso1.style.display = "none";
    paso2.style.display = "none";
    paso3.style.display = "flex";
    paso4.style.display = "none";
}