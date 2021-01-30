var main = document.getElementById("main");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var carousel = document.getElementsByClassName("carousel");
let i = 0;
prev.onclick = function() {
  i--;
  if(i<=0){
    i=5;
  }
 Changer();
}
next.onclick = function() {
  i++;
  if(i>carousel.length){
    i=1;
  }
 Changer();
}

function Changer(){
  main.style.backgroundImage = "url(bg" + i +".jpg)";
  let j = 0;
  while(j<5){
    carousel[j].classList.remove("active");
    j++;
  }
  carousel[i-1].classList.add("active");
}

function showMe(x){
   main.style.backgroundImage = "url(bg" + x +".jpg)";
   let j = 0;
   while(j<5){
     carousel[j].classList.remove("active");
     j++;
   }
   carousel[x-1].classList.add("active");
}
