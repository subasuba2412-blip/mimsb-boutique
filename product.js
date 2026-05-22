var categories=document.querySelectorAll(".categories button")
var Sareecontainer=document.querySelector(".Saree-container")
var Churidarcontainer=document.querySelector(".Churidar-container")
var Casualscontainer=document.querySelector(".Casuals-container")
var Moderncontainer=document.querySelector(".Modern-container")

categories.forEach(function(button){
    
    button.addEventListener("click",function(){
        var category=button.textContent.toLowerCase()

        if(category == "saree"){
            Sareecontainer.style.display="grid"
            Churidarcontainer.style.display="none"
            Casualscontainer.style.display="none"
            Moderncontainer.style.display="none"
        }
        else if(category == "churidar"){
            Churidarcontainer.style.display="grid"
            Sareecontainer.style.display="none"
            Casualscontainer.style.display="none"
            Moderncontainer.style.display="none"
        }
        else if(category == "casuals"){
            Casualscontainer.style.display="grid"
            Sareecontainer.style.display="none"
            Churidarcontainer.style.display="none"
            Moderncontainer.style.display="none"
        }
        else if(category == "modern wear"){
            Moderncontainer.style.display="grid"
            Sareecontainer.style.display="none"
            Churidarcontainer.style.display="none"
            Casualscontainer.style.display="none"
        }


})


})
