function contar(){
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('pass')
    let res = document.getElementById('res')

    if(passo.value.length == 0||ini.value.length == 0||fim.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
        window.alert('[ERRO] Faltam dados!')
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            //contagem crescente
            for(var c=i;c <= f;c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }else{
            //contagem regressiva
            for(var c = i;c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}