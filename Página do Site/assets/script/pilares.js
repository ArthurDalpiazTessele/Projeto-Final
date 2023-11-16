
async function dadoAsync(){
    var resposta = await fetch("https://vksmkbdz.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22pilares%22%5D%7B%0A+++%22pilar%22%3A+pilar%2C%0A+%7D",{
        method: "GET"
    });
    var minharesposta = await resposta.json();
    console.log(minharesposta.result[0]);
    var descricao = document.querySelector('p.descricao')
    descricao.innerText = `${minharesposta.result[0].descricao}`
    var ol = document.querySelector("ol");
    
    minharesposta.result[0].listaPilar.forEach((element, index) => {
        
        var item = document.createElement(`li`)
        item.classList.add(index)
        item.innerText = `${minharesposta.result[0].listaPilar[index]}`
        ol.appendChild(item)
    });
    
}
dadoAsync();
