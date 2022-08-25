let img = document.getElementsByTagName('img')[0]
        let agora = new Date()
        let HoraDia = agora.getHours()

        document.getElementById('lblhora').innerText = `Agora são ${HoraDia} horas`

        if (HoraDia < 12 && HoraDia >= 0){
            img.src = "./img/manhã.webp"
            document.body.style.background = "#6767ff"
            document.getElementById('lblTitulo').style.color = "white"
            document.getElementById('lblRodape').style.color = "white"
        }else if (HoraDia <= 18){
            img.src = "./img/tarde.webp"
            document.body.style.background = "#ff9d2c"
        }else{
            img.src = "./img/noite.jpg"
            document.getElementById('lblTitulo').style.color = "white"
            document.getElementById('lblRodape').style.color = "white"
            document.body.style.background = "#0b1257"
        }