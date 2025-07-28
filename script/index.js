function get_json() {
 fetch("https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current_weather=true")
 .then(resposta => resposta.json())
 .then(dados => { document.getElementById("value").innerHTML = dados.current_weather.temperature.toLocaleString("pt-BR");});
 .catch(erro => console.error("Erro em carregar dados", erro));
}

get_json();
