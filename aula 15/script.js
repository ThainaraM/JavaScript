function verificar()  {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
     window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
     var fsex = document.getElementsByName('radsex')
     var idade = ano - Number(fano.value)
     var genero = ''
     var img = document.createElement('img')
     img.setAttribute('id', 'foto')
     if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >=0 && idade <10) {
           // Crianca 
           img.setAttribute('src', 'criancaM.jpg')
        } else if (idade <21) {
           // Jovem
           img.setAttribute('src', 'jovemM.jpg')
        } else if (idade <50) {
            // Adulto
            img.setAttribute('src', 'adultoM.jpg')
        } else {
            // Idoso
            img.setAttribute('src', 'idosoM.jpg')
        }
     } else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade >=0 && idade <10) {
            // Crianca 
            img.setAttribute('src', 'criancaF.jpg')
         } else if (idade <21) {
            // Jovem
            img.setAttribute('src', 'jovemF.jpg')
         } else if (idade <50) {
             // Adulto
             img.setAttribute('src', 'adultaF.jpg')
         } else {
             // Idoso
             img.setAttribute('src', 'idosaF.jpg')
         }
    }
     res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
     res.appendChild(img)
    }
}

