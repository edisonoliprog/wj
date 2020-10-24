var i = 0
function animadoBotão(){
    bootbotao = setTimeout("animadoBotão()", 3000)
    i = i + 1
    if (i == 5)	{
        i = 1
    };
    if(i == 1){
        document.form_botao.animado.value = "* Clique aqui!! *";
    }
    if(i == 2){
        document.form_botao.animado.value = "* Parabens!! *";
    }
    if(i == 3){
        document.form_botao.animado.value = "Você ganhou R$15,00 de desconto";
    }
    if(i == 4){
        document.form_botao.animado.value = "Aproveite e use hoje mesmo!";
    }

}

function link(){
    if (botao == 1)
        {location.href="http://www.google.com.br"}
}

setTimeout("animadoBotão()", 1)
