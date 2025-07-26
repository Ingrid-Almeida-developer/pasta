function main() {
 get_json();
}

function get_json() {
 let text_h1 = document.getElementById("value");
 fetch("https://raw.githubusercontent.com/henriquepb/populacao-brasil-api/main/populacao.json")
 .then(resposta => resposta.json())
 .then(dados => { text_h1.innerHTML = dados.populacao.valor.toLocaleString("pt-BR");});
 .catch(erro => console.error("Erro em carregar dados", erro));
}
