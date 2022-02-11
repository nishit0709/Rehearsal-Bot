function sanitizeScript(Script){
    var newScript = []
    Script = Script.split('\n')
    Script.forEach(element => {
        if(element)
            newScript.push(element)
    });
    return newScript
}

function getCharacters(Script){
    var playScript = {
        characters: [],
        order: []
    };
    Script.forEach(line => {
        var index = line.search(':')
        var tchar = line.slice(0,index)
        playScript.order.push(tchar)
        if(!playScript.characters.includes(tchar))
        playScript.characters.push(tchar)
    })
    return playScript
}

function getPlay(Script,playScript){
    playScript.characters.forEach(char => {
        playScript[char] = []
    })
    Script.forEach(line => {
        var index = line.search(':')
        var tchar = line.slice(0,index)
        playScript[tchar].push(line.slice(++index))
    })
    return playScript
}

//export Function
function getScript(fileName){
    const fs = require("fs")
    var script = fs.readFileSync(fileName,{encoding:"utf-8"})
    script = sanitizeScript(script)
    play = getCharacters(script)
    play = getPlay(script,play)
    return play
}