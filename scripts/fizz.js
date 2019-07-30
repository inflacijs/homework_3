const container = document.getElementById('container');

function clearDivs() {while (container.firstChild ) container.removeChild(container.firstChild);}


function generate100div(){

let minValue = parseInt(document.getElementById('minValue').value);
let maxValue = parseInt(document.getElementById('maxValue').value);


clearDivs();
   //console.log(minValue,maxValue,container);

    for (let i=minValue; i <= maxValue; i++) {
        
        const myDiv = document.createElement("div");
      const myP =  document.createElement("p");
     iffunction(i, myDiv, myP);
      container.appendChild(myDiv);
      myDiv.appendChild(myP);
    

    
    
       
    }
 
            
     
    


}


// function button_fizz() {
//     const fizz = document.getElementsByClassName('fizz');
//     const buzz = document.querySelectorAll('.buzz');
//     const fizzBtn = document.getElementById('fizz-btn');
//    fizzBtn.addEventListener('click', () =>{
//        buzz.style.display = 'none';
//        console.log("Button is working");
//    });
// }

// button_fizz();








generate100div();



function iffunction(i, myDiv, myP) {
    if (i % 15 == 0) {
        myDiv.id = "div" + i;
        myDiv.className = "fizzBuzz";
        myP.innerText = i+" = Fizz/Buzz";
    } else if(i % 5 == 0) {
        myDiv.id = "div" + i;
        myDiv.className = "buzz";
        myP.innerText = i+" = Buzz";
    } else if(i % 3 == 0) {
        myDiv.id = "div" + i;
        myDiv.className = "fizz";
        myP.innerText = i+" = Fizz";
    } else {
        myDiv.id = "div" + i;
        myDiv.className = "others";
        myP.innerText = i ;
        
    }
    
}