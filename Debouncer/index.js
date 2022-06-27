var button = document.getElementById("button");
var setId;
var a=0;
var b=0;
button.addEventListener("click",()=>{
    let nclick = document.getElementById("nclick");
    nclick.innerText = `clicked ${++a}`
    debouncer(main,1000);
})

const throttleCall = () =>{
    let bouncer_counter = document.getElementById("bouncer_counter");
    bouncer_counter.innerText = `throttle worked for ${++b}`
}

const main = () =>{
    throttleCall();
}

const debouncer= (main,delay) =>{
    if(setId){
        clearTimeout(setId);
    }
    setId = setTimeout(()=>{
       main()
    },delay)
}