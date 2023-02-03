var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if(hora >= 19 && hora < 24){
    console.log('Boa noite')
} else{
    if(hora >= 12 && hora < 19){
    console.log('Boa tarde!')
    } else if(hora >= 6){
    console.log('Bom dia!')
    } else {
        console.log('Boa madrugada!')
    }
}