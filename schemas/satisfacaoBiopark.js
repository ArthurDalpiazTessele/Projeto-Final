// schemas/home.js
//schemaTypes.js

// Exportar o objeto que representa a página Satisfação
export default {
    // Satisfação do Biopark
    name: 'satisfacaoBiopark',
    type: 'document',
    title: 'Satisfação com o Biopark',
    fields: [
        {
            name: 'grafico',
            type: 'image',
            title: 'grafico',
        },
    ]
}