document.addEventListener("DOMContentLoaded", function() {
    const openChatBtn = document.getElementById('open-chat-btn');
    const closeChatBtn = document.getElementById('close-chat-btn');
    const chatBox = document.getElementById('chat-box');
  
    openChatBtn.addEventListener('click', function() {
      chatBox.classList.remove('hidden');
    });
  
    closeChatBtn.addEventListener('click', function() {
      chatBox.classList.add('hidden');
    });
  });
  