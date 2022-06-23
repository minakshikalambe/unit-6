var page=1;

const getData = async() =>{
    try{
var res = await fetch(`https://api.unsplash.com/photos/?page=${page}&client_id=PneUiNSmdPgEn6oWrUatpndH5t_UO9oIpZaIoNpa4Zs`);
res = await res.json();
showData(res)
}
catch (e) {
     console.log(e);
}
}
getData()


window.addEventListener('scroll',()=>{
    if(window.scrollY + window.innerHeight >= 
    document.documentElement.scrollHeight){
    page++  
    main()
    }
})

const showData = (data) =>{
    let parent = document.querySelector(".content")
    data.map((el)=>{
        let div = document.createElement("div");
       let img = document.createElement("img");
       img.src = el.urls.small
       let name = document.createElement("p");
       name.innerText = el.user.name 
        div.append(img,name)
        parent.append(div);
    })
}
const getSearchData = async() =>{
    try {
        let query = document.getElementById("input").value;
            let data1 = await fetch(
              `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=TnpoTGKKgbYNfMXhHISwqxNDCySwwrqJme9tnzb0QaA`
            );
            let data2 = await data1.json();
            return data2;
      } catch (e) {
        console.log(e);
      }
}

let input = document.getElementById("input");
let timerId;
input.addEventListener("input",()=>{
    bounceBack(main,1000)
})

async function main() {
    let data = await getSearchData();
    if (data.results.length===0) {
       getData()
    }
    showData(data.results);
  }


  function bounceBack(func, delay) {
      document.querySelector(".content").innerHTML=""
      page=1;
    if (timerId) {
      clearTimeout(timerId);
    }
    setTimeout(function () {
      func();
    }, delay);
  }