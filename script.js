const chatContent = document.getElementById("chat-content");
const userInput = document.getElementById("userInput");

const respostas = {
    "O que é um profissional Slash?": "É alguém que trabalha em várias áreas ao mesmo tempo, combinando habilidades para aumentar sua renda.",
    "Quais são os benefícios do home office?": "Flexibilidade, redução de custos e melhor qualidade de vida são algumas vantagens do trabalho remoto.",
    "O que é Anywhere Office?": "É o conceito de trabalhar de qualquer lugar do mundo, sem precisar de um escritório fixo.",
    "Onde posso acompanhar tendências do mercado de trabalho?": "Newsletters, Google Trends e WGSN são ótimas fontes para se manter atualizado."
};

// Mensagens iniciais no chat
setTimeout(() => {
    addMessage("bot", "Olá! Como posso ajudar? 😊");
    addMessage("bot", "Perguntas sugeridas:<br>- O que é um profissional Slash?<br>- Quais são os benefícios do home office?<br>- O que é Anywhere Office?<br>- Onde posso acompanhar tendências do mercado de trabalho?");
}, 1000);

function sendMessage() {
    const userText = userInput.value.trim();
    if (userText === "") return;

    addMessage("user", userText);
    userInput.value = "";

    setTimeout(() => {
        const botResponse = respostas[userText] || "Desculpe, não entendi. Tente outra pergunta!";
        addMessage("bot", botResponse);
    }, 1000);
}

function addMessage(type, text) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", type === "user" ? "user-message" : "bot-message");
    messageDiv.innerHTML = text;
    chatContent.appendChild(messageDiv);
    chatContent.scrollTop = chatContent.scrollHeight;
}