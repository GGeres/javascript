
const jvelha = document.getElementsByClassName('velha')
let player = document.getElementsByName('Players')
let jog_X = 'X'
let jog_O = 'O'
let positions =[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
];

document.addEventListener("click", (event) =>{
    if(event.target.matches('.velha')){
    jogo(event.target.id);
    }
});
function jogo(id){
    const jvelha = document.getElementById(id);
    if(player[0].checked){
        id = jog_X
    } else{
        id = jog_O
    }
    jvelha.textContent = id
}







