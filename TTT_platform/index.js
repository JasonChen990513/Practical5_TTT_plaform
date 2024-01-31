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

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const writeGameContract = new ethers.Contract(contractAddress, contractABI, signer);
const readGameContract = new ethers.Contract(contractAddress, contractABI, provider);
const defaultAddress = "0x0000000000000000000000000000000000000000";

document.getElementById("createGame").onclick = () =>{
    createNewRoom();
}

async function createNewRoom(){
    writeGameContract.createGameRoom();
    readGameContract.on("testing",(gameInfo, gameID)=>{
        goToGamePage(gameID);
    })
}

async function joinGame(index){
    await writeGameContract.joinGame(index);
}

document.addEventListener("DOMContentLoaded", async function() {
    // Sample content array
    let gameInfoALL = await readGameContract.getAllGameInformation();
    console.log(gameInfoALL);
  
    // Get the block container
    const blockContainer = document.getElementById("blockContainer");
  
    // Generate blocks dynamically
    gameInfoALL.forEach((gameinfo, index) => {
        const block = document.createElement("div");
        block.classList.add("block");
        //block.textContent = content;
        const roomIndex = document.createElement("p");
        const player1address = document.createElement("p");
        const player2address = document.createElement("p");
        const gameStatus = document.createElement("p");
        roomIndex.textContent = `TTT Room ${index+1}`
        player1address.textContent = "Player 1: " + gameinfo._player1address;
        player2address.textContent = "Player 2: " + gameinfo._player2address;

        if(gameinfo._player2address == defaultAddress){
            gameStatus.textContent = "Waiting Player 2 join"
        } else if(gameinfo._winer == defaultAddress) {
            gameStatus.textContent = "Playing Game"
        } else {
            gameStatus.textContent = `Winer is player ${gameinfo._winer}`
        }
        console.log(index)

        const blockId = index;
        block.setAttribute("id", blockId);

        // Add click event listener to each block
        block.addEventListener("click", () => {
            if(gameinfo._player2address == defaultAddress){
                //alert("Do you want to join this game?")
                const userResponse = confirm("Do you want to join the game?");
                if (userResponse) {
                    joinGame(index);
                    alert("Please wait a minute");
                    
                    readGameContract.on("testing",(gameinfo, event)=>{
                        const userResponse = confirm("Do you want to join the game?");
                        if(userResponse){
                            goToGamePage(index);
                        }
                    })
                    
                } else {
                    alert("You clicked Cancel!");
                }
            } else {
                const userResponse = confirm(`Go to room ${index + 1} and player are: \n${gameinfo._player1address}\n${gameinfo._player2address}`);
                if (userResponse) {
                    goToGamePage(index);
                }
                //alert(`Go to game${index} page and player are: \n${gameinfo._player1address}\n${gameinfo._player2address}`);
            }
            
        });
        block.appendChild(roomIndex);
        block.appendChild(player1address);
        block.appendChild(player2address);
        block.appendChild(gameStatus);
        // Append the block to the container
        blockContainer.appendChild(block);
    });
});



function goToGamePage(index){
    window.location.href = `gamePage.html?param1=${index}`;
}