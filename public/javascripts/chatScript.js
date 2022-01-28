var input = document.getElementById("userMessage");
input.addEventListener("keyup", async function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("chatMessages")
        .innerHTML += `
                        <div class="chatbox__messages">
                            <div class="chatbox__messages__user-message">
                            <div class="chatbox__messages__user-message--ind-message" style="float:right">
                                <p class="name">You</p>
                                <br/>
                                <p class="message">`+ input.value +`</p>
                            </div>
                            </div>          
                        </div>
                        `
        fetch("/message",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({data: input.value}),
        })
        .then(response => response.json())
        .then(json =>{
            document.getElementById("chatMessages")
            .innerHTML += `
                            <div class="chatbox__messages">
                                <div class="chatbox__messages__user-message">
                                <div class="chatbox__messages__user-message--ind-message" style="float:left">
                                    <p class="name">Bot</p>
                                    <br/>
                                    <p class="message">`+ json.data +`</p>
                                </div>
                                </div>          
                            </div>
                            `
            })
        .catch((error) => {
        console.error('Error:', error);
        });
        input.value = ""
    }
});