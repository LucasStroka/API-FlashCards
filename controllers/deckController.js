let {deck, idDeck, cards} = require('../dataBase/data')

const createDeck = (req, res) =>{
    const {titulo} = req.body

    if (!titulo) {
        return res.status(400).json({error: 'Titulo é Obrigatorio'})
    }

    const newDeck = {
        id: idDeck++,
        titulo
    }

    deck.push(newDeck)
    res.status(201).json(newDeck);
}

const getDecks = (req, res) => {
    res.status(200).json(deck)
}

const updateDeck = (req, res) => {
    const { id } = req.params;
    const { titulo } = req.body;
    const deckIndex = deck.findIndex(d => d.id == id);

    if (deckIndex === -1) {
        return res.status(404).json({ error: 'Baralho não encontrado.' });
    }
    if (!titulo) {
        return res.status(400).json({error: "Titulo Obrigatorio"})        
    }

    deck[deckIndex].titulo = titulo
    res.status(200).json(deck[deckIndex])
}

const deleteDeck = (req, res) => {
    const {id} = req.params

    const deckIndex = deck.findIndex(d => d.id == id)
    if (deckIndex === -1) {
        return res.status(404).json({error: "Id não encontrado"})
    }

    deck.splice(deckIndex, 1)    
    for (let i = cards.length - 1; i >= 0; i--) {
        if (cards[i].idDeck == id) {
            cards.splice(i, 1);
        }
    }

    res.status(200).json({"Concluido" : id})
}

module.exports = {
    createDeck,
    getDecks,
    updateDeck,
    deleteDeck,
}
