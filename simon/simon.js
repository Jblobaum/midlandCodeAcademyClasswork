let simonButton = document.getElementsByClassName("simonButton");
let red = document.getElementById("red");
let green = document.getElementById("green");
let yellow = document.getElementById("yellow");
let blue = document.getElementById("blue");


// Simon Levels
for (let i = 1; i <= 5; i++) {
    let x = "*";
    for (let j = 1; j < i; j++) {
        x = x + "*";
    }
    console.log(x)
}


for (i = 0; i < simonButton.length; i++) {
    simonButton[i].addEventListener("mousedown", function () {
        if (this === red) {
            document.getElementById("red").classList.add("active");
            console.log("red");
            
        } else if (this === green) {
            console.log("green");
            document.getElementById("green").classList.add("active");
           
        } else if (this === yellow) {
            document.getElementById("yellow").classList.add("active");
            
        } else if (this === blue) {
            console.log("blue");
            document.getElementById("blue").classList.add("active");
            
            
        }
    })
}
for (i = 0; i < simonButton.length; i++) {
    simonButton[i].addEventListener("mouseup", function () {
        if (this === red) {
            document.getElementById("red").classList.remove("active");
        
            
        } else if (this === green) {
            console.log("green");
            document.getElementById("green").classList.remove("active");
            

        } else if (this === yellow) {
            document.getElementById("yellow").classList.remove("active");
            

        } else if (this === blue) {
            console.log("blue");
            document.getElementById("blue").classList.remove("active");

        }

    })

}



function computerChoice() {
    let comp = Math.floor(Math.random() * 4)
    console.log(comp);
    if (comp === 0) {
        document.getElementById("red").classList.add("active");
        setTimeout(function(){
            document.getElementById("red").classList.remove("active");
        }, 500)
    } else if (comp === 1) {
        document.getElementById("green").classList.add("active");
        setTimeout(function(){
            document.getElementById("green").classList.remove("active");
        }, 500)
    } else if (comp === 2) {
        document.getElementById("yellow").classList.add("active");
        setTimeout(function(){
            document.getElementById("yellow").classList.remove("active");
        }, 500)
    } else if (comp === 3) {
        document.getElementById("blue").classList.add("active");
        setTimeout(function(){
            document.getElementById("blue").classList.remove("active");
        }, 500)
    }
}
computerChoice()