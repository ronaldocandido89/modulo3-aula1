//document.write("Hello World");

//document.getElementById("container").innerHTML = "<h1> Hello World da esquerda</h1>";
//document.querySelector("#container").innerHTML = "<h2>Outra coisa</h2>";

//let paragrafo = document.createElement("p");
//paragrafo.append("Ibserudi com Append()");
//document.getElementById("container").appendChild(paragrafo);

for (let i =0; i <10; i++){
    console.log("Rodada: "+(i * 2));
}
function somar()
{
    let resultado = Number(valor1.value) + Number(valor2.value);
    document.getElementById("resultado").innerHTML = "<h4>Resultado é: "+resultado+"</h4>";
}

function subtrair()
{
    let resultado = Number(valor1.value) - Number(valor2.value);
    document.getElementById("resultado").innerHTML = "<h4>Resultado é:"+resultado+"</h4>";
}

function multiplicar()
{
    let resultado = Number(valor1.value) * Number(valor2.value);
    document.getElementById("resultado").innerHTML = "<h4>Resultado é:"+resultado+"</h4>";
}

function dividir()
{
    let resultado = Number(valor1.value) / Number(valor2.value);
    document.getElementById("resultado").innerHTML = "<h4>Resultado é:"+resultado+"</h4>";
}