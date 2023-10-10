console.log("Hola Mundo");

let $linkGithub = document.querySelector("#link-github");
console.log($linkGithub);

$linkGithub.href = "https://github.com/amauryxd/Practica3Local";
$linkGithub.target ="_blank";

let nombre = "amaury";

let $nombre = document.querySelector("#nombre");

$nombre.innerHTML = nombre;

let $btnLight = document.querySelector("#btn-light");
let $btnDark = document.querySelector("#btn-dark");

$btnLight.addEventListener("click", function(e){
    document.body.style.backgroundColor = "yellow";
    document.body.style.color = "black";
});

$btnDark.addEventListener("click", (e) => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
});

//repaso de AJAX y JSON
async function obtenerDatos(){
    let respuesta = await fetch("js/data.json");
    let datos = await respuesta.json();

    let $info = document.querySelector("#info")

    $info.innerHTML = 
    `
    <table>
    <tr>
    <td>nombre:</td>
    <td>${datos.nombre}</td>
    </tr>
    <tr>
    <td>Edad:</td>
    <td>${datos.edad}</td>
    </tr>
    <tr>
    <td>Es profesor:</td>
    <td>${datos.profesor}</td>
    </tr>
    <tr>
    <td>Materias:</td>
    <td>${datos.materias}</td>
    </tr>
    <tr>
    <td>Materias:</td>
    <td>${datos.contacto.cont1}</td>
    </tr>  
    <tr>
    <td>Materias:</td>
    <td>${datos.contacto.cont2}</td>
    </tr>  
    <tr>
    <td>Materias:</td>
    <td>${datos.contacto.cont3}</td>
    </tr>  
    </table>
    `

    console.log(datos);
}

obtenerDatos(); 