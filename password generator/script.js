const password = document.querySelector(".password");
const boxes = document.querySelectorAll("input[type=checkbox]");
const counter  = document.querySelector(".counter");
const sliderInput  = document.querySelector(".sliders");
const button  = document.querySelector(".btn");
const copy  = document.querySelector(".copy");
const uppercase  = document.querySelector("#upper-case");
const lowercase  = document.querySelector("#lower-case");
const numerical  = document.querySelector("#numerical");
const specialcharactor  = document.querySelector("#specialcharactor");
handleslider();

let grid = [
    "abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ","0123456789","~@#$%^&*()_+{}:><?"

];



function handleslider(){
    counter.innerText = `${sliderInput.value}`;
}
function generatePass(sliderInput){
    let pass = "";
    if(sliderInput.value<4){
        sliderInput.value = 4;
    }
    let ct = sliderInput.value;
    let pct = 0;
    if(uppercase.checked){
        
        pass += grid[0][Math.floor(Math.random()*grid[0].length)];
        pct++;
        
    }
    
    if(lowercase.checked){
        
        pass += grid[1][Math.floor(Math.random()*grid[1].length)];
        pct++;
        
    }
    if(numerical.checked){
        
        pass += grid[2][Math.floor(Math.random()*grid[2].length)];
        pct++;
        
    }
    if(specialcharactor.checked){
        
        pass += grid[3][Math.floor(Math.random()*grid[3].length)];
        pct++;
        
    }

    while(pct<=ct){
        let ind = Math.floor(Math.random()*3)+1;
        pass += grid[ind][Math.floor(Math.random()*grid[ind].length)];
        pct++;
    }

    console.log(pass);
    password.value = pass;
      
        
    }
button.addEventListener('click',()=>{
    handleslider();
    generatePass(sliderInput);
});
window.addEventListener('click',handleslider);

// init();
