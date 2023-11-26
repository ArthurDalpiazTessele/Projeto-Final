// schemas/grafico.js
//schemaTypes.js

export default ({
    name: 'graficos',
    type: 'document',
    title: 'Gráficos',
    fields: [
        {
            name: 'grafico',
            type: 'image',
            title: 'Gráfico',
        },
        {
            name: 'descricao',
            type: 'string',
            title: 'Descrição',
        },
        {
            name: 'grafico2',
            type: 'image',
            title: 'Gráfico2',
        },
        {
            name: 'descricao2',
            type: 'string',
            title: 'Descrição2',
        },
        {
            name: 'grafico3',
            type: 'image',
            title: 'Gráfico3',
        },
        {
            name: 'descricao3',
            type: 'string',
            title: 'Descrição3',
        },
    ]
})