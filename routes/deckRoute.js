const express = require("express");
const router = express.Router();
const deckController = require("../controllers/deckController")

// Route para criar um Deck 
router.post('/', deckController.createDeck);

// Route para listar um Deck
router.get('/', deckController.getDecks);

// Route para Atualizar um Deck
router.put('/:id', deckController.updateDeck);

// Route para Deletar um Deck
router.delete('/:id', deckController.deleteDeck);

// Route para listar os Cards por ID
router.get('/searchID/:id', deckController.searchID)


// Route para Listar todas as cartas do deck
// router.get('/:id', deckController.getCardByDeck)

module.exports = router;