function somar(){
    var n1 = document.getElementById('x')
    var n2 = document.getElementById('y')
    var res = document.getElementById('res')
    var x = Number(n1.value)
    var y = Number(n2.value)
    var z = x + y
    res.innerHTML = `<strong>${z}</strong>`
}

function subtrair(){
    var n1 = document.getElementById('x')
    var n2 = document.getElementById('y')
    var res = document.getElementById('res')
    var x = Number(n1.value)
    var y = Number(n2.value)
    var z = x - y
    res.innerHTML = `<strong>${z}</strong>`   
}

function multiplicar(){
    var n1 = document.getElementById('x')
    var n2 = document.getElementById('y')
    var res = document.getElementById('res')
    var x = Number(n1.value)
    var y = Number(n2.value)
    var z = x * y
    res.innerHTML = `<strong>${z}</strong>`
}

function dividir(){
    var n1 = document.getElementById('x')
    var n2 = document.getElementById('y')
    var res = document.getElementById('res')
    var x = Number(n1.value)
    var y = Number(n2.value)
    var z = x / y
    res.innerHTML = `<strong>${z}</strong>`
}
