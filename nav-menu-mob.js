// function menu (){

    
// }

//     menu()
    
    (()=>{
        
        document.addEventListener("click", e =>{
            // let menuBar = document.querySelector(".nav-style-mobile")
            // let buttonClose = document.querySelector(".close-x svg")
            // let buttonOpen = document.querySelector(".arrow svg")

            if(e.target.matches(".arrow") || e.target.matches(".arrow svg")){
                console.log(e.target)
                
                document.querySelector(".arrow").classList.add("button-none")
                // document.querySelector(".close-x").classList.remove("button-none")
               document.querySelector(".nav-style-mobile").classList.remove("off")
                
            }
            if(e.target.matches(".close-x") || e.target.matches(".close-x svg") ){
                document.querySelector(".arrow").classList.remove("button-none")
                // e.target.classList.add(".button-none")
                document.querySelector(".nav-style-mobile").classList.add("off")
                
            }
        })
})()

