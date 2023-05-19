// Obtener elementos del DOM
const chatbotBall = document.getElementById('chatbot-ball');
const chatbotWindow = document.getElementById('chatbot-window');
const closeBtn = document.getElementById('close-btn');
const sendBtn = document.getElementById('send-btn');
const messageInput = document.getElementById('message-input');
const chatbotMessages = document.getElementById('chatbot-messages');

// Función para mostrar el chatbot
function showChatbot() {
  chatbotWindow.style.display = 'block';
}

// Función para ocultar el chatbot
function hideChatbot() {
  chatbotWindow.style.display = 'none';
}

// Función para agregar un mensaje al chatbot
function addMessage(message, isUser = false) {
  const messageClass = isUser ? 'user-message' : 'chatbot-message';
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', messageClass);
  messageElement.textContent = message;
  chatbotMessages.appendChild(messageElement);
}

// Función para manejar el evento de clic en el botón de enviar
function handleSendButton() {
  const message = messageInput.value;

  // Agregar el mensaje del usuario al chatbot
  addMessage(message, true);

  // Verificar y responder palabras clave definidas
  switch (message.toLowerCase()) {
    case 'hola':
      addMessage('¡Hola! ¿Cómo puedo ayudarte?');
      break;
    case 'adiós':
      addMessage('¡Hasta luego! Espero haberte sido útil.');
      break;
    case 'Renzo':
      addMessage('Un buen ingeniero.');
      break;
    default:
      addMessage('Lo siento, no entiendo tu mensaje.');
  }

  // Limpiar el contenido del input después de enviar el mensaje
  messageInput.value = '';
}

// Evento clic en la bola del chatbot
chatbotBall.addEventListener('click', showChatbot);

// Evento clic en el botón de cerrar
closeBtn.addEventListener('click', hideChatbot);

// Evento clic en el botón de enviar
sendBtn.addEventListener('click', handleSendButton);
