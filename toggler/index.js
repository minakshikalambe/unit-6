function change(a,b,c) {
    let button = document.getElementById("button")
    var change1 = function() {
        if(Number(button.innerText)===a){
            button.innerText = b;
        }else if(Number(button.innerText)===b){
            button.innerText = c;
        }else{
            button.innerText=a
        }
    };
   return change1
    
}

const change3 = change(1,2,3)