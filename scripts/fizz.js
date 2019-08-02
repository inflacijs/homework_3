const container = document.getElementById('container');

function clearDivs() {while (container.firstChild ) container.removeChild(container.firstChild);}


function generate100div(){

let minValue = parseInt(document.getElementById('minValue').value);
let maxValue = parseInt(document.getElementById('maxValue').value);


clearDivs();
   

    for (let i=minValue; i <= maxValue; i++) {
        
        const myDiv = document.createElement("div");
      const myP =  document.createElement("p");
     iffunction(i, myDiv, myP);
      container.appendChild(myDiv);
      myDiv.appendChild(myP);
       
    }

}


function buttonsRemover(id) {
    const fizz = document.getElementsByClassName('fizz');
    const buzz = document.getElementsByClassName('buzz');
    const fizzBuzz = document.getElementsByClassName('fizzBuzz');
    const others = document.getElementsByClassName('others');
    
    const fizzBtn = document.getElementById('fizz-btn');
    const buzzBtn = document.getElementById('buzz-btn');
    const fizzBuzzBtn = document.getElementById('fizzbuzz-btn');

    switch(id){
        case "fizz-btn":
                generate100div();
            hider(buzz);
            hider(fizzBuzz);
            hider(others);
            break;
        case "buzz-btn":
                generate100div();
            hider(fizz);
            hider(fizzBuzz);
            hider(others);
            break;
        case "fizzbuzz-btn":
                generate100div();
            hider(fizz);
            hider(buzz);
            hider(others);
                break;
        default:
            console.log("Ther is no id!");
            
    }
   
    
}



function hider(listname) {
    console.log(listname);
    for(j = 0; j < listname.length; j ++) {
        console.log(listname[j]);
        listname[j].style.display = "none";
    }

}

generate100div();



function iffunction(i, myDiv, myP) {
    if (i % 15 == 0) {
        myDiv.id = "div" + i;
        myDiv.className = "fizzBuzz box";
        myP.innerText = i+" = Fizz/Buzz";
    } else if(i % 5 == 0) {
        myDiv.id = "div" + i;
        myDiv.className = "buzz box";
        myP.innerText = i+" = Buzz";
    } else if(i % 3 == 0) {
        myDiv.id = "div" + i;
        myDiv.className = "fizz box";
        myP.innerText = i+" = Fizz";
    } else {
        myDiv.id = "div" + i;
        myDiv.className = "others box";
        myP.innerText = i ;
        
    }
    
}