let name1 = document.getElementById('name')

function nome(){
    let n = String(name1.value)
    window.alert(`O nome completo é: "${n}" / ${n.length} letras`)
}