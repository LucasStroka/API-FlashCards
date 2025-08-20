const express = require("express")
const app = express();
const PORT = 3000; // http://localhost:3000/
app.use(express.json())

const deckRoute = require('./routes/deckRoute')
const cardRoute = require('./routes/cardRoute')


// Destinar Rotas
app.use('/deck', deckRoute);
app.use('/card', cardRoute);

// Rota para teste
app.get('/', (req, res) => {
    res.send("API esta Online")
})


// Iniciar o Servidor
app.listen(PORT, () => {
    console.log(`Server Rodando na Porta ${PORT}`);
})