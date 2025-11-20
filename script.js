// Lista das manchetes
const manchetes = [
    "1. O poder da imaginação nos filmes da Disney",
    "2. Lições de coragem em 'O Rei Leão'",
    "3. A importância da amizade em 'Toy Story'",
    "4. Princesas modernas: força e independência",
    "5. O impacto cultural de 'Frozen' no mundo",
    "6. Diversidade e inclusão nas novas animações Disney",
    "7. O legado de Walt Disney para o cinema",
    "8. Como a Disney transforma sonhos em histórias",
    "9. O papel da música nas produções Disney",
    "10. Personagens que marcaram gerações",
    "11. A magia dos parques temáticos da Disney",
    "12. Tecnologia e criatividade nos estúdios Disney",
    "13. Mensagens escondidas nos filmes da Disney",
    "14. Como a Disney inspira crianças e adultos",
    "15. O futuro da Disney no mundo digital"
];

const container = document.getElementById("manchetes");

// Criando os cards das manchetes
manchetes.forEach(texto => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h2>${texto}</h2>`;
    container.appendChild(card);
});