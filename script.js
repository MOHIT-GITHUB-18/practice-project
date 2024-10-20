function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
}); 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
init()

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
var divider = document.querySelector("#divider")
main.addEventListener("mousemove",function(event){
    crsr.style.left = event.x+"px"
    crsr.style.top = event.y+"px"
    crsr.style.transition = "0.1s linear"
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page-1 h1",
        scroller:".main",
        // markers:true,
        start:"top 30%",
        end:"top 0",
        scrub:3,
    }
})
tl.to(".page-1 h1",{
    x:-60,
},"anim")
tl.to(".page-1 h2",{
    x:190
},"anim")
tl.to(".page-1 #videohere",{
    scale:1.5,
},"anim")

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page-1 h1",
        scroller:".main",
        // markers:true,
        start:"top -50%",
        end:"top -70%",
        scrub:1,
    }
})
tl.to(".main",{
    backgroundColor:"#ddd",
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page-3",
        scroller:".main",
        // markers:true,
        start:"top -90%",
        end:"top -70%",
        scrub:3,
    }
})
tl.to(".main",{
    backgroundColor:"#333",
})
function h1(){
    
var img1 = document.querySelector("#img1")
var img2 = document.querySelector("#img2")
var img3 = document.querySelector("#img3")
var img11 = document.querySelector("#img11")
var img22 = document.querySelector("#img22")
var img33 = document.querySelector("#img33")

var h11 = document.querySelector(".h11")
var h12 = document.querySelector(".h12")
var h13 = document.querySelector(".h13")

h11.addEventListener("mouseenter",()=>{
    img1.style.opacity = "1"
    img11.style.opacity = "1"
    img1.style.scale = "1"
    img11.style.scale = "1"
})

h11.addEventListener("mouseleave",()=>{
    img1.style.opacity = "0"
    img11.style.opacity = "0"
})

h12.addEventListener("mouseenter",()=>{
    img2.style.opacity = "1"
    img22.style.opacity = "1"
})

h12.addEventListener("mouseleave",()=>{
    img2.style.opacity = "0"
    img22.style.opacity = "0"
})

h13.addEventListener("mouseenter",()=>{
    img3.style.opacity = "1"
    img33.style.opacity = "1"
})

h13.addEventListener("mouseleave",()=>{
    img3.style.opacity = "0"
    img33.style.opacity = "0"
})
}
h1()



var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    var att = elem.getAttribute("data-image")
    crsr.style.height = "250px"
    crsr.style.width = "300px"
    crsr.style.borderRadius = "0"
    crsr.style.backgroundImage = `url(${att})`
    crsr.style.mixBlendMode = "normal"
  })
  elem.addEventListener("mouseleave",function(){
    elem.style.backgroundColor = "transparent"
    crsr.style.height = "20px"
    crsr.style.width = "20px"
    crsr.style.borderRadius = "50%"
    crsr.style.backgroundImage = `url(none)`
  })
})