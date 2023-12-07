// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

// Iteration 3: Creating variables required to make the game functional

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional






const num1box =document.getElementById("number1")
const num2box=document.getElementById("number2")
const num3box=document.getElementById("number3")

let num1=Math.round(Math.random()*100)
let num2=Math.round(Math.random()*100)




let num3;


function randomise(){
     num1=Math.round(Math.random()*100)
     num2=Math.round(Math.random()*100)

     if(num1<num2){
        [num1,num2]= [num2,num1]
     }

    let operator=Math.round(Math.random()*5)
   // console.log(operator)

    switch(operator){
        case 1:
        num3= num1+num2;
        break;
        
        case 2:
        num3=num1-num2;
        break;

        case 3:
        num3=num1*num2;
        break;

        case 4:
        num3=Math.round(num1/num2);
        break;

        case 5:
        num3=num1%num2
        break;

        case 0:
        randomise();

        
    }
    num1box.innerText=num1;
    num2box.innerText=num2;
    num3box.innerText=num3;
}
randomise();



const plus=document.getElementById("plus")
const minus=document.getElementById("minus")
const mul=document.getElementById("mul")
const divide=document.getElementById("divide")
const mod=document.getElementById("modulus")

plus.onclick=add
let score=0;
function add(){
    if(num1+num2==num3){
        score++
        resettimer(timerId)
        randomise()
    }
    else{
        window.location.href="gameover.html?score="+score;
    }
}

minus.onclick=min

function min(){
    if(num1-num2==num3){
        score++
        resettimer(timerId)
        randomise()
    }
    else{
        window.location.href="./gameover.html?score="+score;
    }
}

mul.onclick=mult

function mult(){
    if(num1*num2==num3){
        score++
        resettimer(timerId)
        randomise()
    }
    else{
        window.location.href="./gameover.html?score="+score;
    }
}

divide.onclick=divi

function divi(){
    if(Math.round(num1/num2)==num3){
        score++
        resettimer(timerId)
        randomise()
    }
    else{
        window.location.href="./gameover.html?score="+score;
    }
}

mod.onclick=modu

function modu(){
    if(num1%num2==num3){
        score++
        resettimer(timerId)
        randomise()
    }
    else{
        window.location.href="./gameover.html?score="+score;
    }
}



// 19
// 20

var time=20;
var timer=document.getElementById("timer")
var timerId;

function showtimer(){
    time=20
    timer.innerText=time;
    timerId=setInterval(()=>{
        time--
        if(time==0){
            location.href="gameover.html?score="+score;

        }
        timer.innerHTML=time
    },1000)

}
showtimer()

function resettimer(){
    clearInterval(timerId);
    showtimer();

}




















    







