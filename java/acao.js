window.onload = Inicio
const caminho = "./imagens/"
const prefix = "img"
const extensao = ".png"
var cont = 0
//var index = [1,2,3,4]

var lista=[
    {img:1, titulo:"Sistema a Granel"},
    {img:2, titulo:"Entregas"},
    {img:3, titulo:"Super Coffee"},
    {img:3, titulo:"Super Coffee"},
]

var titulo = document.querySelector("h2")
var botaoVoltar = document.getElementById("btnVoltar")
var botaoAvancar = document.getElementById("btnAvancar")
var moldura = document.getElementById("moldura")



function Inicio(){
    botaoVoltar.onclick = Voltar
    botaoAvancar.onclick = Avancar
    Atualizar()
    
}

function Avancar(){

    if(cont < lista.length-1){
        cont++
    }
    if(cont == lista.length-1){

      cont = 0
    }
    
    Atualizar()
}

function Voltar(){

    if(cont > 0){
        cont--
    }
    else {
        cont=lista.length-1;
    }
    
    Atualizar()
}
function Atualizar(){

    if(cont < lista.length){

    moldura.src = caminho+prefix+lista[cont].img+extensao
    titulo.innerHTML = lista[cont].titulo
    }
}