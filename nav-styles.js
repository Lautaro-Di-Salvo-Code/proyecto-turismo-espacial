



function codigoEmergente (opciones){

    
    let {url, exito} = opciones

    let xmpAPI = new XMLHttpRequest

    xmpAPI.addEventListener("readystatechange", e =>{

        if(xmpAPI.status >= 200 && xmpAPI.status < 299){
            let contHtml= xmpAPI.response
            exito(contHtml)
           
            
        }
        
    })
    
    xmpAPI.open("GET" , url)
    xmpAPI.setRequestHeader("Content-type", "text/html; charset=UTF-8")
    xmpAPI.send()
    
}



function staileNavBar (){
    let optionsNav = document.querySelectorAll(".div-nav-style a")


    // location pathname NO ES EL LINK, ES EL ARCHIVO HTML
    let $pagina = location.pathname
    // console.log($pagina)
    optionsNav.forEach(e =>{
        let enlace = e.getAttribute("href")

        if($pagina.includes("href")){
            e.classList.add("onfocus")
        }
    })

}
staileNavBar()




document.addEventListener("DOMContentLoaded", e =>{
    
    let articleElem = document.querySelector(".article-original")
    let changeBackg = document.querySelector(".bg-image")
    let crewTeam = document.querySelectorAll("nav-crew-buttons a")
    
    
    
    console.log(articleElem)
    // console.log(changeBackg)
    
    codigoEmergente({
        url: "spaceTurism.html",
        exito: (contHtml) => articleElem.innerHTML = contHtml,
        // error: (mensajeInt) => articleElem.innerHTML = `<p>Hubo un error: ${mensajeInt} => ${xmlApi.statusText} </p>`,
    })
    
    
    let destinoBG = document.getElementById("#destination").id
    console.log(destinoBG)
    
    
    document.addEventListener('click' , e =>{
        
        e.preventDefault(".div-nav-style a")

        let linkdestin = location



        // if(e.target.matches("a").includes(destinoBG)  ){
        //     changeBackg.classList.remove("bg-image")
        //     changeBackg.classList.add("destination")
        //     console.log(e.target)
        //     // document.querySelector(".bg-image").classList.remove("destination")
            
            
            
        // }else{

        // }

        // if( e.target.matches(".nav-style-mobile a").href !== "spaceTurism.html" ){

        // }
        
        if(e.target.matches(".nav-crew-buttons a") ){
            // console.log(e.target)
            codigoEmergente({
                url: e.target.href,
                
                exito: (contHtml) => articleElem.innerHTML = contHtml,
                
                // error: (mensajeInt) => articleElem.innerHTML = `<p>Hubo un error: ${mensajeInt} => ${xmlApi.statusText} </p>`
                
            })
            
        }
        
        // barra de navegacion principal
        if( e.target.matches(".los-url") || e.target.matches(".div-nav-style-mobile a")){
            codigoEmergente({
                url: e.target.href,
                exito: (contHtml) => articleElem.innerHTML = contHtml,
                
                // error: (mensajeInt) => articleElem.innerHTML = `<p>Hubo un error: ${mensajeInt} => ${xmlApi.statusText} </p>`
                
            })
            // acciones en la barra de navegacion planetas
        }else if(e.target.matches(".nav-planets a")){
            codigoEmergente({
                url: e.target.href,
                
                exito: (contHtml) => articleElem.innerHTML = contHtml,
                
                // error: (mensajeInt) => articleElem.innerHTML = `<p>Hubo un error: ${mensajeInt} => ${xmlApi.statusText} </p>`
                
            })
            
        }else if(e.target.matches(".nav-crew-tecnology a")){
            codigoEmergente({
                url: e.target.href,
                
                exito: (contHtml) => articleElem.innerHTML = contHtml,
                
                // error: (mensajeInt) => articleElem.innerHTML = `<p>Hubo un error: ${mensajeInt} => ${xmlApi.statusText} </p>`
                
            })
            
        }

    
    
    })
    
    
})


// console.log(location)






