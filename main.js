const form = document.getElementById('form-contato');
const numeroContato = document.getElementById('numero-contato');
const numero = [];

let linhas = '';
let somaDeContato = 0;

function verificaInputNumero(numeroContato) {
    const telefoneCompleto = numeroContato.split('');
    return telefoneCompleto.length <= 9;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nomeContato = document.getElementById('nome-contato');

    numero.push(numeroContato.value);

    let linha = '<tr>';
    linha += `<td>${nomeContato.value}</td>`;
    linha += `<td>${numeroContato.value }</td>`;
    linha += '</tr>';

    if (!verificaInputNumero(numeroContato.value)) {
        linhas += linha;
    }else {
        alert("O número de telefone deve conter 10 ou 11 dígitos.");
    }
    
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    nomeContato.value = '';
    numeroContato.value = '';

    atualizarContatosAdicionado();
});

function atualizarContatosAdicionado() {
    const numeroSalvo = calcularContatos();

    document.getElementById('contato-adicionado').innerHTML = numeroSalvo;

    console.log(somaDeContato);
}

function calcularContatos() {

    for (let i = 0; i = numero.length; i++) {
        return somaDeContato += numero[i];
    }

    return  somaDeContato / numero.length;

}

