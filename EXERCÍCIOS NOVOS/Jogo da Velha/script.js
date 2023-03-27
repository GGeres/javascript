
const jvelha = document.getElementsByClassName('velha')
let checkTurn = true
let jog_X = 'X'
let jog_O = 'O'
let positions =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

document.addEventListener("click", (event) =>{
    if(event.target.matches('.velha')){
    jogo(event.target.id);
    }
});
function jogo(id){
    const jvelha = document.getElementById(id);
    turn = checkTurn ? jog_X : jog_O
    jvelha.textContent = turn
    jvelha.classList.add(turn)
    checkWinner(turn);
}

function checkWinner(turn){
    let venc = positions.some((comb) =>{
        return comb.every((index) => {
            return jvelha[index].classList.contains(turn)
        })
    })
    if(venc){
        encJogo(turn)
    }else if(checkEmpate()){
        encJogo()
    }else {
        checkTurn = !checkTurn
    }
}

function checkEmpate(){
    let x = 0
    let o = 0
    for(index in jvelha){
        if(!isNaN(index)){
        if (jvelha[index].classList.contains(jog_X)){
            x++
        }

        if(jvelha[index].classList.contains(jog_O)){
            o++
        }
    }
    }
    return x + o === 9 ? true: false
}

function encJogo(venc = null){
    if(venc) {
        window.alert('Vencedor: ' + venc)
    } else{
        window.alert('Deu Velha')
    }
}







