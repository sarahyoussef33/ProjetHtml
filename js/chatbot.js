document.addEventListener("DOMContentLoaded", () => {
    loadMessages();

    document.getElementById("send-button").addEventListener("click", () => {
        fetchJSON("../json/intents.json");
    });

    document.getElementById("user-input").addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            fetchJSON("../json/intents.json");
        }
    });

    window.addEventListener('beforeunload', () => {
        saveMessages();
    });
});

class ChatHistory {
    constructor() {
        this.messages = [];
    }
    addMessage(message, sender) {
        this.messages.push({ message: message, sender: sender });
    }
    getHistory() {
        return this.messages;
    }
}

const historyMessages = new ChatHistory();

function showMessage(message, type) {
    const chatBox = document.getElementById("chat-box");
    const msgDiv = document.createElement("div");
    msgDiv.className = (type === 'user') ? 'user-message' : 'bot-message';
    msgDiv.textContent = message;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
    historyMessages.addMessage(message, type);
}

function saveMessages() {
    sessionStorage.setItem("chatHistory", JSON.stringify(historyMessages.getHistory()));
}

function loadMessages() {
    const saved = JSON.parse(sessionStorage.getItem("chatHistory"));
    if (saved) {
        saved.forEach(m => showMessage(m.message, m.sender));
        historyMessages.messages = saved;
    }
}

function fetchJSON(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => sendMessage(data.intents));
}

function sendMessage(intents) {
    const userInput = document.getElementById("user-input");
    const message = userInput.value.trim();
    if (message === "") return;
    showMessage(message, 'user');

    const response = processMessage(intents, message);
    showMessage(response, 'bot');
    userInput.value = "";
}

function processMessage(intents, message) {
    let response = "Je suis désolé, je ne comprends pas votre demande.";
    intents.forEach(intent => {
        intent.patterns.forEach(pattern => {
            if (message.toLowerCase().includes(pattern.toLowerCase())) {
                response = intent.responses[Math.floor(Math.random() * intent.responses.length)];
            }
        });
    });
    return response;
}
