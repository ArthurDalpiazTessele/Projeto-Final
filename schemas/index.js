//Home
import qrCode from "../schemas/qrcode.js"
import objetivo from "../schemas/objetivos.js"
import pontosPositivos from "../schemas/pontosPositivos.js"
import diretrizcard from "../schemas/diretrizesCards.js"

//Comissão Avaliadora
import professor from "../schemas/professor.js"
import membros from "../schemas/membros.js"

//Termos e Regulações
import estatutocpa from "../schemas/estatutocpa.js"
import pilares from "../schemas/pilares.js"

//Graficos
import grafico from "./grafico.js"

//FAQ
import perguntas from "../schemas/perguntas.js"

export const schemaTypes = [grafico, perguntas, qrCode, objetivo, pontosPositivos, diretrizcard, professor, membros, estatutocpa, pilares]
