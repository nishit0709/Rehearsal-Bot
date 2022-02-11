var input = document.getElementById("userMessage");
input.addEventListener("keyup", async function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        userResponse(input.value)
        var msg = input.value
        input.value = ""
        var route = msg.length > 100 ? "/script":"/message"
        fetch(route,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({data: msg}),
        })
        .then(response => response.json())
        .then(json => botResponse(json.data))
        .catch((error) => console.error)
    }
});


botResponse("Welcome to Rehearsal app, you'll be assited by Julia here, an bot(in devel, not really a bot) who shall be helping you rehearse your plays/scripts")
botResponse("Hello User, I am Julia, I hope you are having a good day")
botResponse("Please paste the script you would like to rehearse in the chatbox and hit enter")