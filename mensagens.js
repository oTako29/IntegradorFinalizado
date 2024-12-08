document.getElementById('send-button').addEventListener('click', function() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value;

    if (messageText.trim() !== '') {
        addMessage('Você', messageText);
        messageInput.value = '';
    }
});

function addMessage(user, text) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    messageElement.innerHTML = `
        <img src="https://via.placeholder.com/40" alt="User  Photo">
        <div class="message-content">
            <strong>${user}:</strong> ${text}
        </div>
    `;

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Rolagem automática
}