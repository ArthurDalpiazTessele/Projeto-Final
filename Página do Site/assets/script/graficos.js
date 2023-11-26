async function dadoAsync(){
    var resposta = await fetch("https://vksmkbdz.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22graficos%22%5D%7B%0A+++%22grafico%22%3A+grafico%2C%0A+++%22descricao%22%3Adescricao%2C%0A+++%22grafico2%22%3Agrafico2%2C%0A+++%22descricao2%22%3Adescricao2%2C%0A+++%22grafico3%22%3Agrafico3%2C%0A+++%22descricao3%22%3Adescricao3%2C%0A+%7D",{
        method: "GET"
    });

    var minharesposta = await resposta.json();
    console.log(minharesposta.result[0]);

    var g1 = document.querySelector('img#g1');
    g1.src = minharesposta.result[0].grafico; 
    var Fig1 = document.querySelector('div.Figura1');
    Fig1.innerText = `${minharesposta.result[0].descricao}`

    var g2 = document.querySelector('img#g2');
    g2.src = minharesposta.result[0].grafico2;
    var Fig2 = document.querySelector('div.Figura2');
    Fig2.innerText = `${minharesposta.result[0].descricao2}`

    var g3 = document.querySelector('img#g3');
    g3.src = minharesposta.result[0].grafico3; 
    var Fig3 = document.querySelector('div.Figura3');
    Fig3.innerText = `${minharesposta.result[0].descricao3}`
}
dadoAsync();