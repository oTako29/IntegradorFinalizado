document.querySelector('button').addEventListener('click', function() {
    const input = document.querySelector('input[type="text"]');
    const messageText = input.value;

    if (messageText.trim() !== "") {
        const messagesContainer = document.querySelector('.messages');
        const newMessage = document.createElement('div');
        newMessage.classList.add('message', 'sent');
        newMessage.textContent = messageText;
        messagesContainer.appendChild(newMessage);
        input.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // rolar para a última mensagem
    }
});