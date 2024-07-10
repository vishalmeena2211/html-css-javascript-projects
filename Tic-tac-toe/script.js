let gameinfo = document.querySelector(".game-info");
const newgame = document.querySelector(".btn");
const boxes = document.querySelectorAll(".box");

let currenPlayer;
let player;
let grid;
let winningpos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


function initGame(){
    currenPlayer = "X";

    
    gameinfo.innerText = `Current Player - ${currenPlayer}`;
    grid = ["","","","","","","","",""];
    newgame.classList.remove("active");
    boxes.forEach((box,index)=>{
        box.style.pointerEvents = "all";
        box.classList.remove("bg");
        box.innerText ="";
    });

}
initGame();
function handleEvents(index){
    if(grid[index] == ""){
        grid[index] = currenPlayer;
        boxes[index].innerText = currenPlayer;
        
        if(currenPlayer==="X"){
            currenPlayer = "O";
            gameinfo.innerText = `Current Player - ${currenPlayer}`;
        }else{
            currenPlayer = "X";
            gameinfo.innerText = `Current Player - ${currenPlayer}`;
        }
        checkwin();

    }
}

function checkwin(){
    winningpos.forEach((position)=>{
        if((grid[position[0]] !="" || grid[position[1]] !="" || grid[position[2]] !="") && (grid[position[0]]==grid[position[1]] )&& (grid[position[1]]==grid[position[2]])){
           
           
            gameinfo.innerText = `Winner Player - ${grid[position[0]]}`;
            boxes[position[0]].classList.add("bg");
            boxes[position[1]].classList.add("bg");
            boxes[position[2]].classList.add("bg");
            newgame.classList.add("active");
            boxes.forEach((box)=>{
               box.style.pointerEvents = "none";
            });
        }
        else{
            let count  = 0;
            for(let i = 0;i<9;i++){
                if(grid[i] !=""){
                    count++;
                }
            }
            if(count==9){
                gameinfo.innerText = "Game Tied";
                newgame.classList.add("active");
            }
        }

    });

}
boxes.forEach((box,index)=>{
    box.addEventListener('click',()=>{
        // console.log("hello");
        handleEvents(index);
    });
});
newgame.addEventListener('click',initGame);