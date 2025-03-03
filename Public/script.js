const socket = io();

document.getElementById("joinRoom").addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const room = document.getElementById("room").value;
    if (username && room) {
        socket.emit("joinRoom", room);
    }
});

document.getElementById("sendMessage").addEventListener("click", () => {
    const message = document.getElementById("message").value;
    const room = document.getElementById("room").value;
    const username = document.getElementById("username").value;
    if (message && room && username) {
        socket.emit("chatMessage", { user: username, message, room });
        document.getElementById("message").value = "";
    }
});

socket.on("chatMessage", (data) => {
    const msgDiv = document.createElement("div");
    msgDiv.textContent = `${data.user}: ${data.message}`;
    document.getElementById("messages").appendChild(msgDiv);
});
