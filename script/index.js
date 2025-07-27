function get_json() {
 let text_h1 = document.getElementById("value");
 fetch("https://raw.githubusercontent.com/henriquepb/populacao-brasil-api/main/populacao.json")
 .then(resposta => resposta.json())
 .then(dados => { document.getElementById("value").innerHTML = dados.populacao.valor.toLocaleString("pt-BR");});
 .catch(erro => console.error("Erro em carregar dados", erro));
}

get_json();
