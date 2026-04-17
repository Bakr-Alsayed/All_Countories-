let dark_bg = document.querySelector(".dark_bg");
let text = document.querySelector(".text");
let ligth = document.querySelector(".ligth");
let text_dark = document.querySelector(".text_dark");
let header = document.querySelector(".header");
let section_input = document.querySelector(".section_input");
let all_Countary = document.querySelector(".all_Countary");

// dark mmode 
dark_bg.addEventListener("click" , () => {

    dark_bg.classList.toggle("active")
    
    if(dark_bg.classList == "dark_bg"){
        header.classList.remove("active")
        section_input.classList.remove("active")
        all_Countary.classList.remove("active")
        
        text_dark.innerHTML = "Dark Mode"
         ligth.innerHTML = `<i class="fa-solid fa-moon"></i>`
        
         
         
        }else {
            
            
            header.classList.add("active")
            section_input.classList.add("active")
            all_Countary.classList.add("active")
            text_dark.innerHTML = "Light Mode"
            ligth.innerHTML = `<i class="fa-solid fa-sun"></i>`


    }
    
})


// togle

let select = document.querySelector(".select");
let bottom_select = document.querySelector(".bottom_select");

select.addEventListener("click" , () => {

    bottom_select.classList.toggle("active")
    
})







