function mostraAlerta()
{
    alert("Você clicou no botão");
}

window.onload=function(){
    let botaoAlerta = document.getElementById("alerta");

    botaoAlerta.onclick = function () {
        mostraAlerta() ;
    };
}