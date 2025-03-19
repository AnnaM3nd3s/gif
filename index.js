
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