const objDiv = document.getElementById("chatMessages");
function botResponse(botMessage){
    objDiv.innerHTML += `
    <div class="chatbox__messages__user-message" >
        <div class="chatbox__messages__user-message--ind-message" style="float: left;">
            <p class="name">Julia</p>
            <br/>
            <p class="message">` + botMessage  + `</p>
        </div>
    </div>
    `
    objDiv.scrollTop = objDiv.scrollHeight;
}

function userResponse(userMessage){
    objDiv.innerHTML += `
    <div class="chatbox__messages__user-message" >
        <div class="chatbox__messages__user-message--ind-message" style="float: right;">
            <p class="name">You</p>
            <br/>
            <p class="message">` + userMessage  + `</p>
        </div>
    </div>
    `
    objDiv.scrollTop = objDiv.scrollHeight;
}