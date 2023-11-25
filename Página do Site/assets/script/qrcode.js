async function dadoAsync(){
    var resposta = await fetch("https://vksmkbdz.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22qrCode%22%5D%7B%0A+++%22qrCode%22%3A+qrCode.asset-%3Eurl%2C%0A+%7D",{
        method: "GET"
    });

    var minharesposta = await resposta.json();

    var qrCode = document.querySelector('img.ImgCapaCPA');
    qrCode.src = minharesposta.result[0].qrCode; 
}
dadoAsync();