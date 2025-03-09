document.getElementById("sendButton").addEventListener("click", function() {
    let userInput = document.getElementById("userInput").value.trim();
    let chatbox = document.getElementById("chatbox");

    if (userInput === "") return;

    chatbox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    let response = getAIResponse(userInput);
    setTimeout(() => {
        chatbox.innerHTML += `<p><strong>Giselle:</strong> ${response}</p>`;
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 1000);

    document.getElementById("userInput").value = "";
});

function getAIResponse(input) {
    input = input.toLowerCase();

    let responses = {
        "hello": "Hi there! How can I help you?",
        "how are you": "I'm just a bot, but I'm doing great!",
        "what is your name": "My name is Giselle, your AI assistant!",
        "what does brad like": "Glizzys!",
        "who made you": "I was created by Matthew Willam Brickhouse(16)",
        "bye": "Goodbye! Have a great day!"
       
    };

    return responses[input] || "I'm not sure about that. Can you ask something else?";
}

