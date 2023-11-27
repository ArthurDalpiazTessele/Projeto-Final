async function dadoAsync(){
    var resposta = await fetch("https://vksmkbdz.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22objetivo%22%5D%7B%0A+++%22DescricaoDoObjetivo%22%3A+DescricaoDoObjetivo%2C%0A+%7D",{
        method: "GET"
    });

    var minharesposta = await resposta.json();
    console.log(minharesposta.result[0]);
    console.log(minharesposta.result[0].DescricaoDoObjetivo);

    var descricao = document.querySelector('div.ConteudoObjetivoTextoConteudo')
    descricao.innerText = `${minharesposta.result[0].DescricaoDoObjetivo}`

    var divConteudoObjetivoTextoLista = document.querySelector('div.ConteudoObjetivoTextoLista')

    minharesposta.result[0].itens.forEach((element, index) => {
        var item = document.createElement('div')
        item.classList.add('ConteudoObjetivoTextoListaItem')
        
        var bolinha = document.createElement('div')
        bolinha.classList.add('bolinha')
        
        var texto = document.createElement('div')
        texto.classList.add('ConteudoObjetivoTextoListaItemTopicos')
        texto.innerText = `${minharesposta.result[0].itens[index]}`
        
        divConteudoObjetivoTextoLista.appendChild(item)
        item.appendChild(bolinha)
        item.appendChild(texto)
    });
}
dadoAsync();