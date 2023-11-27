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
            title: 'descrição',
        },
        {
            name: 'grafico2',
            type: 'image',
            title: 'gráfico2',
        },
        {
            name: 'descricao2',
            type: 'string',
            title: 'descrição2',
        },
        {
            name: 'grafico3',
            type: 'image',
            title: 'gráfico3',
        },
        {
            name: 'descricao3',
            type: 'string',
            title: 'descrição3',
        },
    ]
})