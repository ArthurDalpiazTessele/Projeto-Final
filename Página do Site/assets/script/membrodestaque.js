async function dadoAsync(){
    var resposta = await fetch("https://vksmkbdz.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22professor%22%5D%7B%0A+++%22nome%22%3A+nome%2C%0A+++%22cargo%22%3Acargo%2C%0A+++%22bio%22%3Abio%2C%0A+++%22imagem%22%3Aimagem%2C%0A+%7D",{
        method: "GET"
    });
    
    var minharesposta = await resposta.json();
    console.log(minharesposta.result[0]);

    var imagem = document.querySelector('img.destaque');
    imagem.src = `${minharesposta.result[0].imagem}`
    
    var h3 = document.querySelector("h3.destaque")
    h3.innerHTML=`${minharesposta.result[0].nome}<span>`

    var h4 = document.querySelector("h4.destaque")
    h4.innerText = `${minharesposta.result[0].cargo}`

    var texto = document.createElement("p");
    texto.innerText()
}
dadoAsync(); 