async function dadoAsync(){
    var resposta = await fetch("https://vksmkbdz.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22diretrizcard%22%5D%7B%0A+++%22Titulo%22%3A+Titulo%2C%0A+++%22Diretriz%22%3ADiretriz%2C%0A+%7D",{
        method: "GET"
    });
    
    var minharesposta = await resposta.json();
    console.log(minharesposta.result[0]);

    var divtabsconteudo = document.querySelector('div.TabsConteudo')
    
    minharesposta.result.forEach((element, index) => {
        
        var divcard = document.createElement(`div`)
        divcard.classList.add("Card")
        
        var divnumerocard = document.createElement(`div`)
        divnumerocard.classList.add("NumeroCard")
        divnumerocard.innerText=`0${index+1}`
        
        var divtextocard = document.createElement(`div`)
        divtextocard.classList.add("TextoCard")
        divtextocard.style="text-align: justify"
        
        var divtextotitulocard = document.createElement(`div`)
        divtextotitulocard.classList.add("TextoTituloCard")
        divtextotitulocard.innerText=`${minharesposta.result[index].Titulo}`
        
        var divtextoconteudocard = document.createElement(`div`)
        divtextoconteudocard.classList.add("TextoConteudoCard")
        divtextoconteudocard.innerText=`${minharesposta.result[index].Diretriz}`
        
        divtabsconteudo.appendChild(divcard)
        divcard.appendChild(divnumerocard)
        divcard.appendChild(divtextocard)
        divtextocard.appendChild(divtextotitulocard)
        divtextocard.appendChild(divtextoconteudocard)
    });
}
dadoAsync();