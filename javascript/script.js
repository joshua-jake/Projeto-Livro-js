
    var userName;

    function greetUser () {
        alert("Olá, eu sou sua rocha de estimação");
    } 

    function touchRock () {
        if (userName) {
            alert("Eu gosto de atenção, "+ userName +". Obrigado");
        }
        else {
            userName = prompt("Qual o seu nome?", "Digite seu nome aqui.");
            if (userName) {
                alert("Bom conhecer você,"+ userName +".");
            }
            document.getElementById("rockImg").src ="images/rock_happy.png";
            setTimeout("document.getElementById('rockImg').src ='images/rock.png';",
                1*60*1000);


        }
    }





