var productitems=document.getElementById("product-items")
var search=document.getElementById("text")
var productlist=productitems.querySelectorAll(".product")


search.addEventListener("keyup",function(event)
{
    var enteredValue=event.target.value.trim().toUpperCase()
    for(var count=0;count<productlist.length;count=count+1)
    {
        var productname=productlist[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})
