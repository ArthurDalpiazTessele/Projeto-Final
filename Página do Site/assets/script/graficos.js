
async function dadoAsync(){
    var resposta = await fetch("https://vksmkbdz.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22graficos%22%5D%7B%0A+++%22grafico%22%3A+grafico%2C%0A+++%22grafico2%22%3Agrafico2%2C%0A+++%22grafico3%22%3Agrafico3%2C%0A+%7D",{
        method: "GET"
    });
    var minharesposta = await resposta.json();
    console.log(minharesposta.result);
    var g1 = document.querySelector('img#g1');
    var g2 = document.querySelector('img#g2');
    var g3 = document.querySelector('img#g3');
    g1.src = minharesposta.result[0].graficosatisfacaobpk; 
    g2.src = minharesposta.result[0].graficosatisfacaocurso; 
    g3.src = minharesposta.result[0].graficosatisfacaoinfra; 
}
dadoAsync();
