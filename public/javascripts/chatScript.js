var socket = io()
var input = document.getElementById("userMessage");
input.addEventListener("keyup", async function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        var msg = input.value
        input.value = ""
        userResponse(msg)
        socket.emit("msgFromClient",msg)
    }
});


botResponse("Welcome to Rehearsal app, you'll be assited by Carlyn here, a bot(in devel, not really a bot) who shall be helping you rehearse your plays/scripts")
botResponse("Hello User, I am Carlyn, I hope you are having a good day")
botResponse("Please paste the script you would like to rehearse in the chatbox and hit enter")