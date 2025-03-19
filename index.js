
document.getElementById("mysub").onclick = function(){

    // Meu erro foi ter colocado as variáveis fora da função.
    let pi = 3.14159;

    // Vai converter para numero o que coloquei na "caixa de entrada"
    let raio = document.getElementById("myraio").value;
    raio = Number(raio);

    // Então, ele vai fazer a conta depois de checar as variaveis converter o valor de entrada
    let result = 2 * pi * raio;

    //Depois de ter convertido o valor de entrada
    document.getElementById("resultado").textContent = result.toFixed(2);

}

document.getElementById("submeter").onclick = function(){

    let x = document.getElementById("porcento").value;
    x = Number(x);

    let y = document.getElementById("valor").value;
    y = Number(y);

    let resultado = (x/100) * y;

    document.getElementById("result").textContent = resultado.toFixed(2);
}

document.getElementById("sub").onclick = function(){

    let x = document.getElementById("desconto").value;
    x = Number(x);

    let y = document.getElementById("value").value;
    y = Number(y);

    let equacao = (1 - x/100) * y;

    document.getElementById("res").textContent = equacao.toFixed(2);

}