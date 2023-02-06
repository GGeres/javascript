function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique seus dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement ('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gen = 'Homem'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'bebe_m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem_m.png')
            }else if (idade <50){
                img.setAttribute('src', 'adulto_m.png')
            } else {
                img.setAttribute('src','idoso_m.png')
            }
        } else{
            gen = 'Mulher'
            if (idade >=0 && idade <10){
                img.setAttribute('src','bebe_f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem_f.png')
            }else if (idade <50){
                img.setAttribute('src', 'adulto_f.png')
            } else {
                img.setAttribute('src', 'idoso_f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}