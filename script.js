const form = document.getElementById('form-agenda');
const contato = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabele();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if (contato.includes(inputNomeContato.value)) {
        alert(`O Contato: ${inputNomeContato.value} já foi inserido`);
    } else {
        contato.push(inputNomeContato.value);
        telefone.push(parseFloat(inputTelefoneContato.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }
    
    inputNomeContato.value = '';
    inputTelefoneContato.value = '';

}

function atualizaTabele() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}