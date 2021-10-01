function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    var photo = document.getElementById("photo")
    
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        
       window.alert("[ERRO] Verifique as datas e tente novamente!")
      
    } else { 
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
            img.setAttribute("id","foto")

        if (fsex[0].checked) {
            genero = "homem"
            if(idade >= 0 && idade < 10){
                img.setAttribute("src", "bebemenino.png")
            } else if(idade < 21){
                img.setAttribute("src", "jovemhomem.png")
            } else if(idade < 50){
                img.setAttribute("src", "homemadulto.png")
            } else {
                img.setAttribute("src", "homemidoso.png")
            }
            } else if (fsex[1].checked){
                    genero = "mulher"
            if(idade >=0 && idade <10){
                    img.setAttribute("src", "bebemenina.png")
            } else if(idade < 21){
                    img.setAttribute("src", "jovemmulher.png")       
            } else if(idade < 50){
                    img.setAttribute("src", "mulheradulta.png")       
            } else{
                    img.setAttribute("src", "mulheridosa.png")    
               }
            }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)          
        }


}