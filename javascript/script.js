function sorry(){
    var userName = prompt("Qual o seu nome?");

    if(userName) {
        alert("Prazer em conhecer Você, "+userName + ",");
        document.getElementById("rockImg").src ="images/rock_happy.png";
        document.getElementById("texto").innerHTML="Sorria você Também!";
   }
}