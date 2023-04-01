const playerbtndesc=document.querySelector("[data-playerbtndesc]");
const tictactoe=document.querySelector("[data-tictactoe]");
const newgame=document.querySelector("[data-newgame]");
const boxes=document.querySelectorAll(".box");

let currentplayer;
let gridbox;

const winingpositions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


function initgame()
{
    
    currentplayer="X";
    gridbox=["","","","","","","","",""];
    newgame.classList.remove("active");
    playerbtndesc.innerText=`Current player-${currentplayer}`;
}

initgame();

boxes.forEach((box, index)=>
{
    box.addEventListener("click",()=>
    {
        handleclick(index);
    })
});

function handleclick(index)
{
   
     if (gridbox[index]==="") 
     {
        
        boxes[index].innerText=currentplayer;
        gridbox[index]=currentplayer; 
        boxes[index].style.cursor="default";
        swapturn();
        checkgameover(); 
        
        
    }

    
    
}
let secondplayer="O";
let flag=0;
function swapturn()
{
    let temp;
    
    temp=currentplayer;
    currentplayer=secondplayer;
    secondplayer=temp;
    playerbtndesc.innerText=`Current player-${currentplayer}`;
    
}
let p1,p2,p3;
function checkgameover()
{
    let ans="";
    let flag=0;
    winingpositions.forEach((positon)=>
    {
        if((gridbox[positon[0]]!==""||gridbox[positon[1]]!==""||gridbox[positon[2]]!=="" )
        &&(gridbox[positon[0]]===gridbox[positon[1]])&&(gridbox[positon[1]]===gridbox[positon[2]]) )
        {
            if(gridbox[positon[0]]==="X")
            {
                ans="X";
                
            }
            else
            {
                ans="O";
                
            }

            boxes.forEach((box)=>
            {
                
                box.style.pointerEvents="none";
            })
            boxes[positon[0]].classList.add("win");
            boxes[positon[1]].classList.add("win");
            boxes[positon[2]].classList.add("win");
            p1=positon[0];
            p2=positon[1];
            p3=positon[2]
            
           
        }
       
        
    });
    if (ans!=="") {
           
        playerbtndesc.innerText=`winner ${ans}`;
        newgame.classList.add("active");
        return;
    }
    let fillcount=0;
    gridbox.forEach((box)=>
        {
            if(box!=="" )
            fillcount++;
        })
    if (fillcount==9) {
        playerbtndesc.innerHTML="Game tie"; 
        newgame.classList.add("active");
        
    }
}

newgame.addEventListener("click",initnewround);
function initnewround()
{
    gridbox=["","","","","","","","",""];
    for(let i=0;i<=8;i++)
    {
        boxes[i].innerText="";
        boxes[i].style.cursor="pointer";
    }
    
    newgame.classList.remove("active");
    
    boxes.forEach(box=> {
        box.style.pointerEvents="all";
    });
    playerbtndesc.innerText=`Current player-${currentplayer}`;
    console.log("!");
    boxes[p1].classList.remove("win");
    boxes[p2].classList.remove("win");
    boxes[p3].classList.remove("win");

}