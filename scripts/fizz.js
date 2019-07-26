function generate100div(){
   
 const container = document.getElementById('container');
    for (let i=1; i < 101; i++) {
      const myDiv = document.createElement("div");
      const myP =  document.createElement("p");

      container.appendChild(myDiv);
      myDiv.appendChild(myP)
    
    
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
        }else {
            myDiv.id = "div" + i;
            myDiv.className = "others";
            myP.innerText = i ;
        }
            
    };
    

}
generate100div();