async function dadoAsync(){
    var resposta = await fetch("https://vksmkbdz.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22graficos%22%5D%7B%0A+++%22grafico%22%3A+grafico%2C%0A+++%22descricao%22%3Adescricao%2C%0A+++%22grafico2%22%3Agrafico2%2C%0A+++%22descricao2%22%3Adescricao2%2C%0A+++%22grafico3%22%3Agrafico3%2C%0A+++%22descricao3%22%3Adescricao3%2C%0A+%7D",{
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

    var Fig1 = document.querySelector('div.Figura1');
    var Fig2 = document.querySelector('div.Figura2');
    var Fig3 = document.querySelector('div.Figura3');

    Fig1.innerText = `${minharesposta.result[0].descricao}`
    Fig2.innerText = `${minharesposta.result[0].descricao2}`
    Fig3.innerText = `${minharesposta.result[0].descricao3}`
}
dadoAsync();
