//create a navigation object

const navbar = {

    openBtn : document.getElementById("OpenBtn"),
    menuShow : document.querySelector("#menu")

}

//add event listener to the Btn
navbar.openBtn.addEventListener("click" , () =>{

    

    //set a condition based on the classname

    if(navbar.openBtn.className === "fa fa-bars"){
        navbar.openBtn.className = "fa fa-times";
        navbar.menuShow.style.display = "flex";
    }
    else if(navbar.openBtn.className === "fa fa-times"){
        navbar.openBtn.className = "fa fa-bars";
        navbar.menuShow.style.display = "none";
    }
    

})
