var slideIndex, slides, dots, captionText;

function initgallery() {
  slideIndex = 0;
  slides = document.getElementsByClassName("imageholder");
  slides[slideIndex].style.opacity = 1;
  captionText = document.querySelector(".captionholder .captionText");
  captionText.innerText = slides[slideIndex].querySelector(".captionText").innerText;
if(slides.length<2){
  var nextPrevBtn=document.querySelector(".leftArrow, .rightArrow");
  nextPrevBtn.style.display="none";
  for(i=0;i<nextPrevBtn.length;i++){
    nextPrevBtn[i].style.display="none";
  }
}
  dots = [];
  var dotsContainer = document.getElementById("dotsContainer"), i;
  for ( i = 0; i < slides.length; i++) {
    var dot = document.createElement("span");
    dot.classList.add("dots");
    dotsContainer.append(dot);
    dot.setAttribute("onclick", "moveslide(" + i + ")");
    dots.push(dot);
  }
  dots[slideIndex].classList.add("active");
}
initgallery();

function plusSlides(n) {
  moveslide(slideIndex + n);
}

function moveslide(n) {
  var i, current, next;
  var moveSlideAnimClass = {
    forCurrent: "",
    forNext: ""
  };
  var slideTextAnimClass;
  if (n > slideIndex) {
    if (n >= slides.length) {
      n = 0;
    }
    moveSlideAnimClass.forCurrent = "moveLeftCurrentSlide";
    moveSlideAnimClass.forNext = "moveLeftNextSlide";
  } else if (n < slideIndex) {
    if (n < 0) {
      n = slides.length - 1;
    }
    moveSlideAnimClass.forCurrent = "moveRightCurrentSlide";
    moveSlideAnimClass.forNext = "moveRightPrevSlide";
  }
  if (n != slideIndex) {
    next = slides[n];
    current = slides[slideIndex];
    for (i = 0; i < slides.length; i++) {
      slides[i].className = "imageholder";
      slides[i].style.opacity = 0;
      dots[i].classList.remove("active");
    }
    current.classList.add(moveSlideAnimClass.forCurrent);
    next.classList.add(moveSlideAnimClass.forNext);
    dots[n].classList.add("active");
    slideIndex = n;
  captionText.style.display="none";
  captionText.className="captionText"+slideTextAnimClass;
  captionText.innerText=slides[n].querySelector(".captionText").innerText;
  captionText.style.display="block";
}
}
var timer=null;
function setTimer(){
    timer=setInterval(function () {
        plusSlides(1) ;
    },3000);
}
setTimer();
function playPauseSlides() {
    var playPauseBtn=document.getElementById("playPause");
    if(timer==null){
        setTimer();
        playPauseBtn.style.backgroundPositionY="0px"
    }else{
        clearInterval(timer);
        timer=null;
        playPauseBtn.style.backgroundPositionY="-33px"
    }
}
