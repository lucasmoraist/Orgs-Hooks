import Green from '../assets/produtores/green.png'
import Grow from '../assets/produtores/grow.png'
import Jenny from '../assets/produtores/jenny-jack.png'
import Potager from '../assets/produtores/potager.png'
import Salad from '../assets/produtores/salad.png'

const gerarNumeroAleatorio = (min, max) =>{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const produtores ={
    titulo: "Produtores",
    lisa: [
        {
            nome: "Green",
            imagem: Green,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5)
        },
        {
            nome: "Grow",
            imagem: Grow,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5)
        },
        {
            nome: "Jenny Jack",
            imagem: Jenny,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5)
        },
        {
            nome: "Potager",
            imagem: Potager,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5)
        },
        {
            nome: "salad",
            imagem: Salad,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5)
        }
    ]
}