let {deck, cards, idCard} = require('../dataBase/data')

// ID
// pergunta
// resposta
// idBaralho (referência ao baralho ao qual pertence)
const createFlashCard = (req, res) => {
    const { pergunta, resposta, idBaralho } = req.body

    if (!pergunta || !resposta || !idBaralho) {
        return res.status(404).json({error : "Body Incompleto"})
    }

    let idDeck = deck.findIndex(d => d.id == parseInt(idBaralho))
    if (idDeck === -1) {
        return res.status(404).json({erro: "Deck não encontrado"})
    }

    let idDeckCreate = parseInt(idDeck++)

    const newCards = {
        id: idCard++,
        pergunta,
        resposta,
        idDeck: idBaralho
    }

    cards.push(newCards)

    res.status(201).json({newCards})
}

const getCard = (req, res) => {
    res.status(200).json(cards)
}

const updateCard = (req, res) => {
    const { id } = req.params;
    const { pergunta, resposta, idDeck } = req.body;

    if(!id || !pergunta || !resposta || !idDeck){
        res.status(404).json("Estrutura esta Faltando")
    }

    const idDeckUpdate = deck.findIndex(d => d.id == parseInt(idDeck))
    if (idDeckUpdate === -1) {
        return res.status(404).json({erro: "Deck não encontrado"})
    }

    const cardIndex = cards.findIndex(c => c.id === parseInt(id));
    if (cardIndex === -1) {
        return res.status(404).json({ erro: "Card não encontrado" });
    }


    cards[id] = {
        pergunta,
        resposta,
        idDeck : parseInt(idDeck++)
    }

    res.status(200).json(cards[id])
}

const deleteCard = (req, res) => {
    const { id } = req.params
    const idCard = cards.findIndex(p => p.id === parseInt(id))
    if (idCard === -1) {
        return res.status(404).json("Card não Encontrado")
    }
    cards.splice(idCard, 1)

    res.status(200).json(`Deletado com Sucesso ID ${idCard+1}`)
}

// id: idCard++,
// pergunta,
// resposta,
// idDeck: idBaralho

const getCardID = (req, res) => {
    const { id } = req.params
    const idArrays = []

    for (let i = 0; i < cards.length; i++) {
        if (parseInt(cards[i].idDeck) === parseInt(id)) {
            idArrays.push(cards[i])
        }
    }
    
    res.status(200).json(idArrays)
}

const getCardQuestion = (req, res) => {
    const { pergunta } = req.body
    const idArrays = []

    for (let i = 0; i < cards.length; i++) {
        if (pergunta === cards[i].pergunta) {
            idArrays.push(cards[i])
        }
    }

    res.status(200).json(idArrays)
}


module.exports = {
    createFlashCard,
    getCard,
    updateCard,
    deleteCard,
    getCardID,
    getCardQuestion
}
