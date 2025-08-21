const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardController");

// Route para criar um novo FlashCard
router.post('/', cardController.createFlashCard)

// Route para listar os flashCards
router.get('/', cardController.getCard)

// Route para listar os Cards por ID
router.get('/getCardID/:id', cardController.getCardID)

// Route para buscar cards por perguntas
router.get('/search', cardController.getCardQuestion)

// Route para Atualizar um Flashcard
router.put('/:id', cardController.updateCard)

// Route para deletar um Flashcard
router.delete('/:id', cardController.deleteCard)

module.exports = router;