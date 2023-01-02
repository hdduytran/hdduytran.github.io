
let sum = 0;

function add(score, team_node) {
    let current_score = team_node.getElementsByClassName("score")[0].innerText
    team_node.getElementsByClassName("score")[0].innerText = parseInt(current_score) + score
    console.log("Just added " + score + " to " + team_node.id)

    sum += score
    if (sum != 0) {
        document.getElementById("sum").innerText = "Có tính sai không dị"
    } else {
        document.getElementById("sum").innerText = ""
    }
}

let players_list = []

function addPlayer() {
    // sparse players names from input field which separated by comma and space then add them to the list
    let players = document.getElementById("players").value.split(", ")
    console.log(players)
        // create a new div for each player inside the container div
        // < div class="column" id = "player" >
        //     <h3 class="team">player</h3>
        //     <h2 class="score">0</h2>
        //     <div>
        //         <button onclick="add(-2,this.parentNode.parentNode)">-2</button>
        //         <button onclick="add(2,this.parentNode.parentNode)">+2</button>
        //     </div>
        // </div >
    let container = document.getElementsByClassName("container")
    console.log(document.getElementsByClassName("container"))
    for (let i = 0; i < players.length; i++) {
        // check if the player is already in the list
        if (players_list.includes(players[i])) {
            alert("Player " + players[i] + " is already in the list")
            continue
        }
        players_list.push(players[i])
        let player = document.createElement("div")
        player.className = "column"
        player.id = players[i]
        player.innerHTML = `
        <h3 class="team">${players[i]}</h3>
        <h2 class="score">0</h2>
        <div>
        ${scores_button}
        </div>
        `
        container[0].appendChild(player)

    }
    
    console.log(document.getElementsByClassName("container"))
}

let scores_button = ""

function addScores() {
    scores_button = ""
    let scores = document.getElementById("scores").value.split(", ")
    // convert the scores to integers and remove which are not numbers
    scores = scores.map(score => parseInt(score)).filter(score => !isNaN(score))
    for (let i = 0; i < scores.length; i++) {
        let score = scores[i]
        // create a new button for each score with the pattern
        // <button onclick="add({score},this.parentNode.parentNode)">{score}</button>
        let button = `<button onclick="add(${score},this.parentNode.parentNode)">${score}</button>`
        scores_button += button
    }
    console.log(scores_button)
}