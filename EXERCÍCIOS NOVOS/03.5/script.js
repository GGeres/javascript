
let jvelha = document.getElementsByClassName('velha')
let valores;
let player = document.getElementsByName('Players')
let simb = ''
let X = document.getElementById('PX')
let O = document.getElementById('PO')
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

function jog(p){
    if(p = X){
        return 'X'
    } else if(p = O){
        return 'O'
    }
}
if(player[0]){
    p = X
}else{
    p = O
}










