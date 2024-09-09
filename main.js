
let form = document.getElementById('formulario');
let btn = '<img src="images/apagar.png" alt="apagar" />';

let cont = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    addContato();
    atualizaTabela();
    contarContato();
});

function addContato(){
    let nome = document.getElementById("input-nome");
    let tel = document.getElementById("input-tel");

    cont.push(nome.value);

    let linha = '<tr>';
    linha += `<td id="ln-nome">${nome.value}</td>`;
    linha += `<td id="ln-tel">${tel.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    nome.value = '';
    tel.value = '';
}

function atualizaTabela(){
    let tabela = document.querySelector('tbody');
    tabela.innerHTML = linhas;
}

function contarContato(){
    contado = cont.length;

    document.getElementById('td-cont').innerHTML = contado;
}

let celular = document.getElementById("input-tel");

celular.addEventListener("input", function(){

    let limparValor = celular.value.replace(/\D/g, "").substring(0,11);

    let numerosArray = limparValor.split("");

    let numeroFormatado = "";

    if(numerosArray.length > 0){
        numeroFormatado += `(${numerosArray.slice(0,2).join("")})`;
    }

    if(numerosArray.length > 2){
        numeroFormatado += ` ${numerosArray.slice(2,7).join("")}`;
    }

    if(numerosArray.length > 7){
        numeroFormatado += `-${numerosArray.slice(7,11).join("")}`;
    }

    celular.value = numeroFormatado;
});