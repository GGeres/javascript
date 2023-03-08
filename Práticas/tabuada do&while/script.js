function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value == 0){
        window.alert('Por favor, digite um número!')
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        do{
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }while(c <= 10)
    }

}