let buttons = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset");
let res=document.getElementById("result");
let ch=document.getElementById("change");

let turn="X";
let pattern=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];

buttons.forEach((btn) => {
    btn.addEventListener("click",()=>{
        if(btn.innerText==""){
            if(turn==="X"){
                btn.innerText="X";
                turn="O";
            }
            else{
                btn.innerText="O";
                turn="X";
            }
        }
        check();

    })
    
    
});

reset.addEventListener("click",()=>{
    buttons.forEach((btn)=>{
        btn.innerText="";    
    })
    res.innerText="";
})


const check=() =>{
    for(let i of pattern){
        let box1=buttons[i[0]].innerText;
        let box2=buttons[i[1]].innerText;
        let box3= buttons[i[2]].innerText;
        if(box1 != "" && box2 != "" && box3 != ""){
            if(box1===box2 && box2===box3){
                showWinner(box1);
        }
        
        }
    }
}

const showWinner=(box1)=>{
    res.innerText=`Well Played!The winner is ${box1}`;
}

