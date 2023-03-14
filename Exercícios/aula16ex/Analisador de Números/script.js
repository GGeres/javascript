let num = document.getElementById('txtn')
let lista = document.getElementById('annum')
let res = document.getElementById('res')
let valores =[]

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inAnn(n, l){
    if(l.indexOf(Number(n)) != -1 && l.length>0){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inAnn(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let sum = 0
        for(let pos in valores){
            sum += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        let media = sum/tot

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p> Somando todos os valores temos ${sum}</p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media}</p>`
    }
}