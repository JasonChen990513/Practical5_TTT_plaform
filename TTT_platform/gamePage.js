// contract address and abi
const contractAddress = "0xe69E062A976827bA444bB954F789a8C907189963";
const contractABI =[
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "next",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "nextUesrStr",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "nextUser",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "nextUser",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "resetUI",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "player1Address",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "showFirstPlayer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "result",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "showResult",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "message",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "player1",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "player2",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "startGame",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "bool",
                        "name": "_activate",
                        "type": "bool"
                    },
                    {
                        "internalType": "string",
                        "name": "_currentPlayer",
                        "type": "string"
                    },
                    {
                        "internalType": "string[]",
                        "name": "_options",
                        "type": "string[]"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "_finalWinOption",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "address",
                        "name": "_player1address",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "_player2address",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_playerCount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "_winer",
                        "type": "address"
                    }
                ],
                "indexed": false,
                "internalType": "struct TickTackToe.GameInfo",
                "name": "gameInfo",
                "type": "tuple"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "testing",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string[]",
                "name": "options",
                "type": "string[]"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "updateUI",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "a",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "b",
                "type": "string"
            }
        ],
        "name": "compareStrings",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "createGameRoom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "gameInformation",
        "outputs": [
            {
                "internalType": "bool",
                "name": "_activate",
                "type": "bool"
            },
            {
                "internalType": "string",
                "name": "_currentPlayer",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "_player1address",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_player2address",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_playerCount",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_winer",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllGameInformation",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "bool",
                        "name": "_activate",
                        "type": "bool"
                    },
                    {
                        "internalType": "string",
                        "name": "_currentPlayer",
                        "type": "string"
                    },
                    {
                        "internalType": "string[]",
                        "name": "_options",
                        "type": "string[]"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "_finalWinOption",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "address",
                        "name": "_player1address",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "_player2address",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_playerCount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "_winer",
                        "type": "address"
                    }
                ],
                "internalType": "struct TickTackToe.GameInfo[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "getFinalWinOption",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "getGameInformation",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "bool",
                        "name": "_activate",
                        "type": "bool"
                    },
                    {
                        "internalType": "string",
                        "name": "_currentPlayer",
                        "type": "string"
                    },
                    {
                        "internalType": "string[]",
                        "name": "_options",
                        "type": "string[]"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "_finalWinOption",
                        "type": "uint256[]"
                    },
                    {
                        "internalType": "address",
                        "name": "_player1address",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "_player2address",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_playerCount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "_winer",
                        "type": "address"
                    }
                ],
                "internalType": "struct TickTackToe.GameInfo",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "getoption",
        "outputs": [
            {
                "internalType": "string[]",
                "name": "",
                "type": "string[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "joinGame",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "restartGame",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "input",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "gameId",
                "type": "uint256"
            }
        ],
        "name": "userInput",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const defaultAddress = "0x0000000000000000000000000000000000000000";

// declare call contract element and crate contract object
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const writeGameContract = new ethers.Contract(contractAddress, contractABI, signer);
const readGameContract = new ethers.Contract(contractAddress, contractABI, provider);
let CurrentUserAddress; //store current user address

const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const joinBtn = document.getElementById("joinGame");
//const waitTime = 10000;

const params = new URLSearchParams(window.location.search);
const gameId = params.get('param1');
//const gameId = 1;
console.log("this is game "+gameId);

//call initial page function 
initializePage();

//enable restart button
// function enableRestart(){
//     restartBtn.disabled = false;
// }

// when a player takes a long time to respond, other players can restart the game
// set timer to enable restart button
// function setTimer(){
//     resetRtnTimer = setInterval(enableRestart, waitTime);
// }

//smart contract
document.getElementById("joinGame").addEventListener('click',() => {
    joinGame();
})

//call the smart contract to join the game
async function joinGame(){
    await provider.send("eth_requestAccounts", []);
    //call contract
    try{
        await writeGameContract.joinGame(gameId);
    } catch(e){
        //catch the error message from smart contract
        err = e.data.message;
        alert(err);
    }
}


async function initializePage(){
    //get the current wallet address
    onInit();
    //setTimer();
    const gameInformation = await readGameContract.getGameInformation(gameId);
    restartBtn.addEventListener("click", restartGame);
    // read the current options array data at smart contract
    let contractOptions = gameInformation._options;
    //display array content on UI
    for(let i = 0; i < contractOptions.length; i++){
        const targetCell = document.querySelector(`.cell[cellIndex="${i}"]`);
        targetCell.textContent = contractOptions[i];
    }
    //allow restart the game when the game is not playing
    if(!(gameInformation._activate)){
        if(gameInformation._winer != defaultAddress){
            restartBtn.disabled = true;
        } else {
            restartBtn.disabled = false;
        }
        if(gameInformation._player2address != defaultAddress){
            joinBtn.disabled = true;
        }
        

    }else{
        joinBtn.disabled = true;
        restartBtn.disabled = true;
        document.getElementById("tips").textContent = "Please wait until the game finishes if you want to join";
    }
    //get current player address
    let player1address = gameInformation._player1address;
    let player2address = gameInformation._player2address;
    //display user address
    if(player1address == "0x0000000000000000000000000000000000000000"){
        document.getElementById("player1address").textContent = "Waiting";
    }else{
        document.getElementById("player1address").textContent = "X Player1: " + player1address;
    }

    if(player2address == "0x0000000000000000000000000000000000000000"){
        document.getElementById("player2address").textContent = "Waiting";
    }else{
        document.getElementById("player2address").textContent = "O Player2: " + player2address;
    }

    let player = gameInformation._currentPlayer;
    statusText.textContent = `${player}'s turn`;
    //if current user are the player in this metch, allow the user to click the grid
    if(player == "X"){
        if(CurrentUserAddress == player1address.toLowerCase()){
            cells.forEach(cell => cell.addEventListener("click", cellClicked));
        }
    }else{
        if(CurrentUserAddress == player2address.toLowerCase()){
            cells.forEach(cell => cell.addEventListener("click", cellClicked));
        }
    }
    // check game finish 
    const finalWinOption = gameInformation._finalWinOption;
    if(finalWinOption.length = 3){
        for(let i = 0; i < 9;i++){
            if(i == finalWinOption[0] || i == finalWinOption[1] || i == finalWinOption[2]){
                const targetCell = document.querySelector(`.cell[cellIndex="${i}"]`);
                targetCell.style.backgroundColor = 'lightgreen';
            }
        }
    }
    
    
    //set smart contract listener
    //when game start will run this function
    readGameContract.on("startGame",async (message,player1address,player2address,gameID)=>{
        if(checkGame(gameID)){
            //according to the uesr wallet address to display the corresponding content
            if(player1address.toLowerCase() == CurrentUserAddress){
                alert(message + "\nYour Round!");
                cells.forEach(cell => cell.addEventListener("click", cellClicked));
                disableBtnJoin();
            }else if(player2address.toLowerCase() == CurrentUserAddress){
                alert(message + "\nWaiting player 1");
                disableBtnJoin();
            }else{
                alert("Game already start" + "\nWaiting player 1 and 2 finish this game");
                disableBtnJoin();
            }
            let player = await readGameContract.getGameInformation(gameId)._currentPlayer;
            statusText.textContent = `${player}'s turn`;

            let Displayplayer1 = await readGameContract.player1address();
            let Displayplayer2 = await readGameContract.player2address();
            document.getElementById("player1address").textContent = "X Player1: " + Displayplayer1;
            document.getElementById("player2address").textContent = "O Player2: " + Displayplayer2;
        }
        //setTimer();
    });

    //when new option store in to smart contract
    readGameContract.on("showFirstPlayer",(player1Address, gameID)=>{
        if(checkGame(gameID)){
            document.getElementById("player1address").textContent = "X Player1: " + player1Address;
        }
    })
    //update the user interface
    readGameContract.on("updateUI",(options, gameID)=>{
        if(checkGame(gameID)){
            for(let i = 0; i < options.length; i++){
                const targetCell = document.querySelector(`.cell[cellIndex="${i}"]`);
                targetCell.textContent = options[i];
            }
        }
    })
    // display the result and able button when game finish
    readGameContract.on("showResult",async (result, gameID)=>{
        if(checkGame(gameID)){
            const gameInformation = await readGameContract.getGameInformation(gameId); 
            //display the message content 
            if(result == "Draw"){
                statusText.textContent = `Draw!`;
                restartBtn.disabled = false;
            }else{
                statusText.textContent = `Player ${result} wins!`;
            }
            //get the 
            const finalWinOption = gameInformation._finalWinOption;
            if(finalWinOption.length = 3){
                for(let i = 0; i < 9;i++){
                    if(i == finalWinOption[0] || i == finalWinOption[1] || i == finalWinOption[2]){
                        const targetCell = document.querySelector(`.cell[cellIndex="${i}"]`);
                        targetCell.style.backgroundColor = 'lightgreen';
                    }
                }
            }


            //change the button and html content
            document.getElementById("tips").textContent = "Clikc the button to join";
            cells.forEach(cell => cell.removeEventListener("click", cellClicked));
        }

    })

    //change html content when user change
    readGameContract.on("nextUesrStr",(next, gameID)=>{
        if(checkGame(gameID)){
            statusText.textContent = `${next}'s turn`;
        }
    })

    //inform the user and add listener to grid when it's their turn
    //remove the listener when it is not their turn
    readGameContract.on("nextUser",(nextUser, gameID)=>{
        if(checkGame(gameID)){
            disableBtnJoin();
            if(nextUser.toLowerCase() == CurrentUserAddress){
                cells.forEach(cell => cell.addEventListener("click", cellClicked));
                alert("Your Round!");
            }else{
                cells.forEach(cell => cell.removeEventListener("click", cellClicked));
            }
        }
    })
    // reset all of the element
    readGameContract.on("resetUI",(gameID)=>{
        if(checkGame(gameID)){
            statusText.textContent = "";
            cells.forEach(cell => cell.textContent = "");
            restartBtn.disabled = false;
            joinBtn.disabled = ture;
            document.getElementById("tips").textContent = "Clikc the button to join";
            document.getElementById("player1address").textContent = "Waiting";
            document.getElementById("player2address").textContent = "Waiting";
            for(let i = 0; i < 9; i++){
                const targetCell = document.querySelector(`.cell[cellIndex="${i}"]`);
                targetCell.style.backgroundColor = 'white';
            }
        }
    })
}
// disable the button and set the message 
function disableBtnJoin(){
    restartBtn.disabled = true;
    joinBtn.disabled = true;
    document.getElementById("tips").textContent = "Please wait until the game finishes if you want to join";
}

//get the current user's wallet address
async function onInit() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    console.log(account);
    CurrentUserAddress = account;

    //  window.ethereum.on('accountsChanged', function (accounts) {
    //     // Time to reload your interface with accounts[0]!
    //     console.log(accounts[0])
    //     CurrentUserAddress = accounts[0];
    //    });
}

async function initializeGame(){
    

}

//get user input and send to smart contract
async function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");
    console.log(cellIndex);
    try{
        await writeGameContract.userInput(cellIndex,gameId);
    } catch(e){
        //catch the error message and show it
        err = e.data.message;
        alert(err);
    }
}
// call the smart contract to reset game 
function restartGame(){
    writeGameContract.restartGame(gameId);
}

function checkGame(index){
    if(index == gameId){
        return true;
    } else{
        return false;
    }
}