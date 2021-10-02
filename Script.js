// JavaScript source code

// sticky navbar on Scroll
$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    })
})




// changing name color
function color() {
  let x =  document.getElementById("umair").style.color = "blue";
}


// contact/Get in touch
function sent(){
  let x = alert("message Sent");
}


// skills/ for reading more paragraph
function readFunction() {
  let x = document.getElementById("more");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
