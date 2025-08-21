# API-FlashCards

🎯 Objetivo
Você deve desenvolver um sistema CRUD (Create, Read, Update, Delete) que gerencie
baralhos de estudo (decks) e seus respectivos flashcards, utilizando arrays de objetos
em JavaScript.
O sistema deve permitir:
● Criar baralhos e flashcards.
● Listar (ler) baralhos e flashcards.
● Atualizar informações de baralhos e flashcards.
● Excluir baralhos e flashcards.
● Buscar flashcards com base em diferentes critérios.

📦 Estrutura do Projeto
Entidades
1. Baralho (Deck)
○ id (gerado automaticamente)
○ titulo (nome do baralho)
2. Flashcard (Flashcard)
○ id (gerado automaticamente)
○ pergunta
○ resposta
○ idBaralho (referência ao baralho ao qual pertence)

✅ Requisitos do Sistema
1. Criação (Create)
● Criar Baralho
○ Entrada: { "titulo": "JavaScript Básico" }
○ O sistema deve gerar automaticamente o campo id.
● Criar Flashcard
Entrada:
{
"pergunta": "O que é uma variável?",
"resposta": "Um espaço de memória para armazenar valores.",
"idBaralho": 1
}

○
○ O sistema deve gerar automaticamente o campo id.

2. Leitura (Read)
● Listar todos os baralhos.
● Listar todos os flashcards.
● Listar todos os flashcards de um baralho específico.
○ Entrada: { "idBaralho": 1 }

3. Atualização (Update)
● Atualizar Baralho
○ Entrada: { "id": 1, "titulo": "JavaScript Avançado" }
● Atualizar Flashcard
Entrada:
{
"id": 1,
"pergunta": "O que é uma constante?",
"resposta": "Um espaço de memória para armazenar valores imutáveis.",
"idBaralho": 1
}

○

4. Deleção (Delete)
● Remover Baralho
○ Entrada: { "id": 1 }
○ Importante: ao remover um baralho, todos os flashcards relacionados a ele
também devem ser excluídos.

● Remover Flashcard
○ Entrada: { "id": 1 }

5. Busca de Flashcards
O sistema deve permitir buscar flashcards de duas formas:
1. Por pergunta
○ Entrada: { "pergunta": "O que é uma variável?" }
2. Por baralho
○ Entrada: { "idBaralho": 1 }

🔑 Pontos de Atenção
● Todos os ids devem ser gerados automaticamente (ex.: incremental).
● As operações devem ser feitas usando arrays de objetos, sem banco de dados.
● Ao excluir um baralho, seus flashcards também devem ser removidos
(consistência dos dados).