let jogo = [X,O]
let px = document.getElementsByName('Players')
let po = document.getElementsByName('Players')

let nw = document.getElementById('NW')
let n = document.getElementById('N')
let ne = document.getElementById('NE')
let cw = document.getElementById('CW')
let c = document.getElementById('C')
let ce = document.getElementById('CE')
let sw = document.getElementById('SW')
let s = document.getElementById('S')
let se = document.getElementById('SE')

function acenderNW(){
    nw.style.background = 'yellow'
}
function apagarNW(){
    nw.style.background = 'lightgray'
}
function acenderN(){
    n.style.background = 'yellow'
}
function apagarN(){
    n.style.background = 'lightgray'
}
function acenderNE(){
    ne.style.background = 'yellow'
}
function apagarNE(){
    ne.style.background = 'lightgray'
}
function acenderCW(){
    cw.style.background = 'yellow'
}
function apagarCW(){
    cw.style.background = 'lightgray'
}
function acenderC(){
    c.style.background = 'yellow'
}
function apagarC(){
    c.style.background = 'lightgray'
}
function acenderCE(){
    ce.style.background = 'yellow'
}
function apagarCE(){
    ce.style.background = 'lightgray'
}
function acenderSW(){
    sw.style.background = 'yellow'
}
function apagarSW(){
    sw.style.background = 'lightgray'
}
function acenderS(){
    s.style.background = 'yellow'
}
function apagarS(){
    s.style.background = 'lightgray'
}
function acenderSE(){
    se.style.background = 'yellow'
}
function apagarSE(){
    se.style.background = 'lightgray'
}


if(px[0].checked){
    jogo = 'X'
    nw.innerText = `${jogo}`
}else{
    jogo = 'O'
    nw.innerText = `${jogo}`

}