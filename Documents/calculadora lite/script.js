//numero inicial, usuario irá digitar e ele ficara armazenado nessa variavel 
var n1 = prompt('digite um numero');
n1 = parseFloat(n1);

//chama a function TYPE para que o numero possa ser vizualizado na pagina
type()

//o que a função type faz?
//ele vai chamar a div output que está no html (por isso usamos o querySelector)
//e ao chamar a div ele ira armazená-la nessa variavel saida
//que por sua vez recebe o n1 que é o numero inicial.
//para que apareça na pagina utilizei o innerHTML ao inves do document.write
function type() {
    var saida = document.querySelector('#output');
    saida.innerHTML = n1;
}


//após acabar com a primeira etapa do codigo, chegamos no calculo.
//a function plus é responsável primeiro por pegar o n2 e armazenar o que o usuario digitou
// e logo depois fazer a variavel n1 se transformar na soma entre n1 + n2
//e logo embaixo chamo a função type para digitar na tela o novo resultado de n1 que é: n1 + n2
function plus() {
    var n2 = prompt('digite mais um numero')
    n2 = parseFloat(n2);

    n1 = n1 + n2;
    type();
}

function less() {
    var n2 = prompt('digite mais um numero')
    n2 = parseFloat(n2);

    n1 = n1 - n2;
    type();
}

function multi() {
    var n2 = prompt('digite mais um numero')
    n2 = parseFloat(n2);

    n1 = n1 * n2;
    type();
}

function divide() {
    var n2 = prompt('digite mais um numero')
    n2 = parseFloat(n2);

    n1 = n1 / n2;
    type();
}