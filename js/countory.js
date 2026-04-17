fetch("data.json")
.then(response => response.json() )
.then(data => {


    
    
    const params = new URLSearchParams(window.location.search);
    
    const counory_id = params.get("id")


    data.forEach(element => {
        if(element.area == counory_id){
            let content = document.querySelector(".content");
            document.title = `${element.name}`
            document.querySelector(".icon").href = `${element.flags.png}`
            content.innerHTML += `
                    <div class="container">
            <button class="btn_for" onclick="back()">Back</button>
            <div class="image">
                <img src="${element.flags.png}" alt="">
            </div>
            <div class="text_content">
                <h1>${element.name}</h1>
                <div class="text">
                    <p>nativeName : <span>${element.nativeName}</span></p>
                    <p>region : <span>${element.region}</span></p>
                    <p>subregion : <span>${element.subregion}</span></p>
                    <p>capital : <span>${element.capital}</span></p>
                    <p>topLevelDomain : <span>${element.topLevelDomain}</span></p>
                    <p>currencies : <span>${element.currencies[0].name}</span></p>
                    <p>languages : <span>${element.languages[0].name}</span></p>
                </div>
                <h3>borders : <span class="span">${element.borders[0]}</span><span class="span">${element.borders[1]}</span><span class="span">${element.borders[2]}</span></h3>
            </div>
        </div>
            
            
            
            `
            
        }
        
    });
    


})

function back(){
    window.history.back()
    
}

let dark_bg = document.querySelector(".dark_bg");
let ligth = document.querySelector(".ligth");
let text_dark = document.querySelector(".text_dark");
let header = document.querySelector(".header");
let content = document.querySelector(".content");
let btn_for = document.querySelector(".btn_for");


// dark mmode 
dark_bg.addEventListener("click" , () => {

    dark_bg.classList.toggle("active")
    
    if(dark_bg.classList == "dark_bg"){
        header.classList.remove("active")
        // btn_for.classList.remove("active")
        content.classList.remove("active")
        
        text_dark.innerHTML = "Dark Mode"
         ligth.innerHTML = `<i class="fa-solid fa-moon"></i>`
        
         
         
        }else {
            
            
            header.classList.add("active")
            // btn_for.classList.add("active")
            content.classList.add("active")
            text_dark.innerHTML = "Light Mode"
            ligth.innerHTML = `<i class="fa-solid fa-sun"></i>`


    }
    
})

