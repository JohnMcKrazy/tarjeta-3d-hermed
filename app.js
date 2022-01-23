

var card = document.querySelector(".card");
var container = document.querySelector(".container");
var producto = document.querySelector(".imagen-producto");
var title = document.querySelector(".card-title");

//Evento de animacion de movimiento

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 12;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 12;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


//Animate In//

container.addEventListener("mouseenter", (e) => {
    card.style.transform = "none";

    //Animacion Pop out //

    producto.style.transform = "translateZ(110px) scale(1.2) ";


    title.style.transform = "translateZ(50px) scale(1.2)";


});



//Animate Out//

container.addEventListener("mouseleave", (e) => {
    card.style.transform = "all 1s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    producto.style.transform = "translateZ(0px)";
    title.style.transform = "translateZ(0px)";



});


