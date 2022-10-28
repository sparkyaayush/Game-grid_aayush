const btns=document.querySelectorAll(".parent > div");
let noOfMoves=0;
const noOfGifts=Math.sqrt(btns.length)+1;
let giftOpend=0;
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        show(btn)
    });
})

function show(btn){
    noOfMoves++;
    btn.querySelector("span").style.display="none";
    btn.querySelector("img").style.display="block";
    if(btn.querySelector("img").getAttribute("alt")=="danger"){

        setTimeout(()=>{
            // document.querySelector(".messagetext").display="Danger";
            document.querySelector("#dangermessage").style.display="flex";
            document.querySelector(".message-Container").style.display="flex";
        },100)
        setTimeout(()=>{
            makeGrid();
        },1500)
        setTimeout(()=>{
            document.querySelector("#dangermessage").style.display="none";
            document.querySelector(".message-Container").style.display="none";
        },2000)
    }
    if(btn.querySelector("img").getAttribute("alt")=="gift"){
        giftOpend++;
        if(giftOpend==noOfGifts-1){
            let starsfilled=1;
            if(noOfMoves==noOfGifts-1){
                starsfilled=3;
            }
            else if(noOfMoves <= noOfGifts+3){
                starsfilled=2;
            }
            const stars=document.querySelectorAll(".stars>span");
            for(let i=0;i<starsfilled;i++){
                stars[i].classList="fill";
            }
            for(let i=starsfilled;i<stars.length;i++){
                stars[i].classList="nofill";
            }
            setTimeout(()=>{
                // document.querySelector(".messagetext").innerHTML="You Won";
                document.querySelector("#wonmessage").style.display="flex";
                document.querySelector(".message-Container").style.display="flex";
            },200)
        }
    }
}

function makeGrid(){
    giftOpend=0;
    btns.forEach((btn)=>{
            btn.querySelector("img").setAttribute("alt","");
            btn.querySelector("span").style.display="block";
            btn.querySelector("img").style.display="none";
    })
    let count=0;
    console.log("no"+noOfGifts);
    while(count != noOfGifts){
        const index=Math.floor(Math.random()*btns.length);
        if(count<noOfGifts-1 && btns[index].querySelector("img").getAttribute("alt")==""){
            btns[index].querySelector("img").setAttribute("src","./gift.png");
            btns[index].querySelector("img").setAttribute("alt","gift");
            console.log(index);
            count++;
        }
        else if(count==noOfGifts-1 && btns[index].querySelector("img").getAttribute("alt")==""){
            btns[index].querySelector("img").setAttribute("src","./sign.png");
            btns[index].querySelector("img").setAttribute("alt","danger");
            count++;
        }
    }
    
    btns.forEach((btn)=>{
        if(btn.querySelector("img").getAttribute("alt")==""){
            btn.querySelector("img").setAttribute("src","./cancel.png");
            btn.querySelector("img").setAttribute("alt","cancel");
        }
    })

}

makeGrid();