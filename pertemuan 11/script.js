let batu = document.getElementById("batu");
let kertas = document.getElementById("kertas");
let gunting = document.getElementById("gunting");
let computerchoice =  document.getElementById("computerchoice");
let option = ["batu" , "gunting" , "kertas"]

batu.addEventListener('click' , function(){
    let random = Math.floor(Math.random() * 3)
    let randomOption = option[random];
    computerchoice.innerHTML = randomOption;

  setTimeout(() => { 
     switch (randomOption) {
    case "batu":
        alert("Seri");
        break;

    case "gunting":
        alert(" HOKII ANJJJ!");
        break;
    
    default:
        alert("CUPUU DEKK DEKK!");
        break;
    }
}, 300);
})

gunting.addEventListener('click' , function(){
    let random = Math.floor(Math.random() * 3)
    let randomOption = option[random];
    computerchoice.innerHTML = randomOption;

  setTimeout(() => { 
     switch (randomOption) {
    case "batu":
        alert("CUPU DEKK DEKK!");
        break;

    case "gunting":
        alert(" SERI!");
        break;
    
    default:
        alert("HOKI ANJJJ!");
        break;
    }
}, 300);
})

kertas.addEventListener('click' , function(){
    let random = Math.floor(Math.random() * 3)
    let randomOption = option[random];
    computerchoice.innerHTML = randomOption;

  setTimeout(() => { 
     switch (randomOption) {
    case "batu":
        alert("HOKI ANJJJ");
        break;

    case "gunting":
        alert(" CUPU DEKK DEKK!");
        break;
    
    default:
        alert("SERI!");
        break;
    }
}, 300);
})