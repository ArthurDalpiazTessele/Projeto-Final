
async function dadoAsync(){
    var resposta = await fetch("https://vksmkbdz.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22qrCode%22%5D%7B%0A+++%22qrCode%22%3A+qrCode%2C%0A+%7D",{
        method: "GET"
    });
    var minharesposta = await resposta.json();
    console.log(minharesposta.result[0].qrcode);
    var qrcode = document.querySelector('img.ImgCapaCPA');
    qrcode.src = minharesposta.result[0].qrcode; 

}
dadoAsync();
