const socket = io();

const loginForm = document.getElementById('login-form');
const chatBox = document.getElementById('chat-box');
const messageForm = document.getElementById('message-form');
const messages = document.getElementById('messages');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username === 'aswani' && password === '237620' || username === 'vishnu' && password === '237620') {
    login(username);
  } else {
    alert('Invalid username or password');
  }
});

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = document.getElementById('message').value;
  if (message !== '') {
    sendMessage(message);
    document.getElementById('message').value = '';
  }
});

function login(username) {
  loginForm.style.display = 'none';
  chatBox.style.display = 'block';
  socket.emit('login', username);
}

function sendMessage(message) {
  socket.emit('message', message);
}

socket.on('message', (data) => {
  const message = document.createElement('div');
  message.textContent = data;
  messages.appendChild(message);
});
