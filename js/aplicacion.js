//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");

function mostrarOcultarMenu(){
    if(menu_visible == false){
        menu.style.display = "block";
        menu_visible = true;
    }else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Oculto el menu una vez que seleccionamos una opcion
let links = document.querySelectorAll("nav a");

for(var i = 0; i < links.length; i++){
    links[i].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra en particular identificada por su id
let div = null;
function crearBarra(id_barra){
    for(i = 0; i<17; i++){
        div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//Selecciono todas las barras generales para luego manipularlas

let html = document.getElementById("html");
let javascript = document.getElementById("JavaScrip");
let php = document.getElementById("php");
let ilustrator = document.getElementById("ilustrator");

crearBarra(html);
crearBarra(javascript);
crearBarra(php);
crearBarra(ilustrator);

//Ilustracion de como se cargan las barritas
//Arranca en -1 por que no tiene ningun casillero pintado

let contador = [-1,-1,-1,-1,-1,-1];
let entro = false;

function cargarHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills >= 300 && entro == false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html,16,0,intervalHtml);
        },100);
        const intervalJavaScript = setInterval(function(){
            pintarBarra(javascript,11,1,intervalJavaScript);
        },100);
        const intervalIlustrator = setInterval(function(){
            pintarBarra(ilustrator,9,2,intervalIlustrator);
        },100);
        const intervalPhp = setInterval(function(){
            pintarBarra(php,14,3,intervalPhp);
        },100);
    }
}

//Cargo una barra en particular
let x;
function pintarBarra(id_barra,cantidad,indice,interval){
    contador[indice]++;
    x = contador[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = " #940253";
    }else{
        clearInterval(interval);
    }
}

//Determino cuando el scrolling del mouse para aplicar la animacion de la barra
window.onscroll = function(){
    cargarHabilidades();
}