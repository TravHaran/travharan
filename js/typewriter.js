const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Leader", "Autodidact", "Engineer"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1000;
let textArrayIndex = 0;
let charIndex = 0;

function type(){
  if(charIndex < textArray[textArrayIndex].length){
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase(){
  if(charIndex > 0){
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function(){
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// Smooth Scrolling

function scrollToSection(event,n) {
  if (supportsSmoothScrolling()) {
    return;
  }
  event.preventDefault();
  if (n=0) section= "section-hero";
  else if (n=1) section= "section-intro";
  else if (n=2) section= "section-projects";
  else if (n=3) section= "section-education";
  else if (n=4) section= "section-skills";
  const scrollToElem = document.getElementById(section);
  SmoothVerticalScrolling(scrollToElem, 300, "top");

}

function supportsSmoothScrolling() {
  const body = document.body;
  const scrollSave = body.style.scrollBehavior;
  body.style.scrollBehavior = 'smooth';
  const hasSmooth = getComputedStyle(body).scrollBehavior === 'smooth';
  body.style.scrollBehavior = scrollSave;
  return hasSmooth;
};

function SmoothVerticalScrolling(element, time, position) {
  var eTop = element.getBoundingClientRect().top;
  var eAmt = eTop / 100;
  var curTime = 0;
  while (curTime <= time) {
    window.setTimeout(SVS_B, curTime, eAmt, position);
    curTime += time / 100;
  }
}

function SVS_B(eAmt, position) {
  if (position == "center" || position == "")
  window.scrollBy(0, eAmt / 2);
  if (position == "top")
  window.scrollBy(0, eAmt);
}
