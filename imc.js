const calcular = document.getElementById ('calcular');

function imc () {
    const nome = document.getElementById ('nome').value;
    const altura = +document.getElementById ('altura').value;
    const peso = +document.getElementById ('peso').value;
    const resultado = document.getElementById ('resultado');

    if (nome!== '' && altura !== '' && peso !== '' )}

    const valor IMC= (peso/(altura*altura)).toFixed (1);

    let classicacao = '';

    if (valor IMC < 18.5){
        classificacao = 'abaixo do peso.';
    }else if (valor IMC < 25) {
        classicacao = 'com peso ideal. Parabéns!';
    }else if (valor IMC < 30) {
        classificacao ='levemente acima do peso.';
    }else if (valor IMC < 35){
        classificado = 'com obesidade grau I.';
    }else if (valor IMC < 40){
        classificacao = 'com obesidade grau II';
    }else{
        classificacao = 'com obesidade grau III. Cuidado!';
    }
    resultado. textContent = '$ {nome} Seu IMC é $ {valorIMC} e você está $ {classificacao}';

    {else {
        resultado. textContent = 'Preencha todos os campos !!!';

    }
}

calcular. addEventListener ('click', imc);
