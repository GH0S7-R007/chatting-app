let currentUser = "";
let password = "default";

function initChat() {
	let urlParams = new URLSearchParams(window.location.search);
	currentUser = urlParams.get('user');
	
	if (currentUser === "user1" || currentUser === "user2") {
		addMessage("You have joined the chat as " + currentUser + ".");
	} else {
		addMessage("Invalid user.");
	}
}

function sendMessage() {
	let messageInput = document.getElementById("message-input");
	let message = messageInput.value;
	
	if (message !== "") {
		addMessage(currentUser + ": " + message);
		messageInput.value = "";
	}
}

function addMessage(message) {
	let chatBox = document.getElementById("chat-box");
	let messageElement = document.createElement("p");
	messageElement.innerText = message;
	chatBox.appendChild(messageElement);
}
