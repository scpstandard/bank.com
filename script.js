let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navlinks");

menu.addEventListener("click", function () {
    navbar.classList.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remve("active");
};





















function myFunction() {
    var x = document.getElementById("password")
    var y = document.getElementById("hide1")
    var z = document.getElementById("hide2")

    if(x.type === 'password'){
        x.type="text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else{
        x.type = "password";
        y.style.display ="none";
        z.style.display = "block";
    }
}

