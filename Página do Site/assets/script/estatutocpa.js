async function dadoAsync(){
    var resposta = await fetch("https://vksmkbdz.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22estatutocpa%22%5D%7B%0A+++%22estatutoCpa%22%3A+estatutoCpa%2C%0A+++%22conteudoavaliado%22%3Aconteudoavaliado%2C%0A+++%22importanciaemavaliar%22%3Aimportanciaemavaliar%2C%0A+%7D",{
        method: "GET"
    });
    
    var minharesposta = await resposta.json();
    console.log(minharesposta.result[0]);

    var estatutoCPA = document.querySelector('p.comissaoCPA')
    estatutoCPA.innerText = `${minharesposta.result[0].estatutoCPA}`
    
    var conteudoAvaliado = document.querySelector('p.conteudoAvaliado')
    conteudoAvaliado.innerText = `${minharesposta.result[0].conteudoAvaliado}`

    var importanciaAvaliar = document.querySelector('p.ImportanciaDeAvaliar')
    importanciaAvaliar.innerText = `${minharesposta.result[0].importanciaAvaliar}`
}
dadoAsync();
