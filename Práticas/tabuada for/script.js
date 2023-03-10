function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value == 0){
        window.alert('Por favor, digite um número!')
    }else{
        tab.innerHTML = ''
        let n = Number(num.value)
        for(let c = 1; c<= 10;c++){
        let item = document.createElement('option')
        item.text = `${n} X ${c} = ${n*c}`
        tab.appendChild(item)
        }
    }
}
