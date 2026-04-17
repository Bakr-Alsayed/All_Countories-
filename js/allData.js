fetch("data.json")
.then(response => response.json() )
.then(data => {

    let container_countary = document.querySelector(".all_Countary .container")

    
    let bottom_select = document.querySelector(".bottom_select");

    
    
    data.forEach(countary => {
        bottom_select.innerHTML += `
        
        <a href="#${countary.subregion}">${countary.subregion}</a>
        
        `
        
    });



    
    data.forEach(countary => {
            const All = countary.All ? `<p>Hope : <span>${countary.All}</span></p>`: ""
        container_countary.innerHTML += `
                <div class="countary">
                <div class="image">
                    <img src="${countary.flags.png}" alt="">
                </div>
                <h3 class="moka">${countary.name}</h3>
                <div class="colection">
                    <p>Poplution : <span>${countary.population}</span></p>
                    <p>Region : <span>${countary.region}</span></p>
                    <p>Captial : <span>${countary.capital}</span></p>
                    ${All}
                    <a href = "countory.html?id=${countary.area}" class="btn_go">go to details</a>
                </div>
            </div>
        
        `

    })


    let search = document.querySelector("#search");


        
        
       

    search.addEventListener("keyup", () => {
        let search_value = search.value.toLowerCase();
        
        document.querySelectorAll(".countary h3").forEach(ele =>{
                let small = ele.innerHTML.toLowerCase()
                let parent = ele.parentElement
            if(search_value == ""){
                parent.classList.remove("hiden")
                document.getElementById("loading").innerHTML = "Loading....."

            }else if(small.includes(search_value)) {
                parent.classList.remove("hiden")
                document.getElementById("loading").innerHTML = "Loading....."
            }else {
                parent.classList.add("hiden")

                document.getElementById("loading").innerHTML = "No reasult"
            }



        })



        
    })
    
    


}).catch((error) => {
    console.log(error);
    
})