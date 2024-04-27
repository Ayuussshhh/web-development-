document.addEventListener('DOMContentLoaded', function() {
  const messageInput = document.getElementById('message-input');
  const sendButton = document.getElementById('send-button');
  const chatMessages = document.getElementById('chat-messages');

  sendButton.addEventListener('click', function() {
      const message = messageInput.value.trim();
      if (message !== '') {
          appendMessage(message);
          messageInput.value = '';
      }
  });

  function appendMessage(message) {
      const messageElement = document.createElement('div');
      messageElement.textContent = message;
      chatMessages.appendChild(messageElement);
      chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});