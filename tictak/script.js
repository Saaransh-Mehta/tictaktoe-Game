let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset")
let game = document.querySelectorAll("div");
let winnerHead = document.createElement('div');
let modal =  document.querySelector('#exampleModal')
// let closeBtn = document.querySelector(".btn-close")
let modalBody = document.querySelector(".modal-body")
let turnO = true
let count = 0;
let closeBtn = document.querySelector("#close")
let winningPattern = [[0,1,2],[3,4,5],[6,7,8], [0,4,8],[2,4,6],[0,3,6],[2,5,8],[1,4,7]];

boxes.forEach((box) => {
    box.addEventListener('click', ()=>{
        count++;
        console.log("CLicked", count)
        if(turnO){
        
            box.innerText = 'O'
            if(box.innerText = 'O'){
            box.disabled = true
            
            }
            turnO = false; 
        }else{
            box.innerText = 'X'
            if(box.innerText = 'X'){
                box.classList.add("bg-red")
            }
            turnO = true;
            box.disabled = true
        }
        checkWinner();
        
    }) 
    
    
});
closeBtn.addEventListener('click', ()=>{
    modal.style.display = "none"
})

const checkWinner = ()=>{
    
    for(let pattern of winningPattern){
    
        let posValue1 = boxes[pattern[0]].innerText;
        let posValue2 = boxes[pattern[1]].innerText;
        let posValue3 = boxes[pattern[2]].innerText;

        if(posValue1 != "" && posValue2 != "" && posValue3 != ""){
            if(posValue1 == posValue2 && posValue2 == posValue3){
                console.log(`Winner is ${posValue1}`);
                modal.classList.add('show');
                modal.role = "dialog";
                modal.ariaHidden = false
                modal.ariaModal = true
                modal.style.display = 'block'
                winnerHead.style.display = 'flex'
                winnerHead.style.justifyContent = 'center'
                winnerHead.style.alignItems = 'center'
                modalBody.innerText = `Winner is ${posValue1}`
                game[0].prepend(winnerHead);
                winnerHead.append(modal)
                // game[0].style.display = 'none'
                // console.log(game[0])
                
            }
        }
        
    }
if(count == 9){
    modal.classList.add('show');
    modal.role = "dialog";
    modal.ariaHidden = false
    modal.ariaModal = true
    modal.style.display = 'block'
    modalBody.innerText = `Game is Drawn`
    game[0].prepend(winnerHead);
    winnerHead.append(modal)
}
    
}

// for(let i =0;i<=boxes.length;i++){
    
//     console.log(this)
//     this.addEventListener('click', ()=>{
//         console.log("Hellow World")
//     })
    
// }
reset.addEventListener('click', ()=>{
    turnO = true
    console.log("Clicked Reset")
    boxes.forEach((boxe)=>{
        boxe.innerText = ""
        boxe.classList.remove("bg-red")
        // boxe.style.backgroundColor = 'white'
        boxe.disabled = false


})
winnerHead.remove();
    // boxes.innerText = ""
})
closeBtn.addEventListener('click', ()=>{
    console.log("Clicked close btn")
    boxes.forEach((boxs)=>{
        boxs.innerText = ""
        boxs.classList.remove("bg-red")
        // boxe.style.backgroundColor = 'white'
        boxs.disabled = false
})
})
