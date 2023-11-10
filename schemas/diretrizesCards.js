// schemas/home.js
//schemaTypes.js

export default({
    name: 'diretrizcard',
    type: 'document',
    title: 'diretrizCard',
    fields:[
        {
          name: "Titulo",
          type: "string",
          title: "Título"
        },
        {
          name: "Diretriz",
          type: "text",
          title: "Diretriz"
        },
    ]
})