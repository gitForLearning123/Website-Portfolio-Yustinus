let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// $(".check-out").on("click", () => {

//   $("body").addClass("blur")


// })



$(document).ready( () => {


  $(".myImage").animate({right: 0}, 
    {duration: 1000}
  )


}


)


function closePopUp(){

    let closeIcon1 = document.getElementById("container-popup")

    closeIcon1.classList.remove("openPopUp")

    mybutton.classList.remove("closeButton")




}

function openPopUp(){

  let closeIcon1 = document.getElementById("container-popup")

  closeIcon1.classList.add("openPopUp")

  mybutton.classList.add("closeButton")


}
  


