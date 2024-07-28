gsap.registerPlugin(ScrollTrigger);

if(typeof gsap == "undefined")
{
    console.error("not ok");
}
else
{
    console.log("its ok");
}

gsap.set(".header", {clearProps: "all"});
window.addEventListener('scroll', function() {
    document.querySelector('.header').style.transform = 'translateZ(0)';
  }, {passive: true});

const adv = document.querySelector(".adv");



gsap.to(adv, {
    scrollTrigger:{
        trigger: adv,
        toggleActions: "restart complete reverse reset",
        start: "top center",
        end: "center 40%",
        markers: true,
    }, backgroundColor: "#83B4FF", duration: 4
});

gsap.from("#text1", {
    scrollTrigger:{
        trigger: adv,
        start: "top center",
        end: "center 40%",
        toggleActions: "restart complete reverse reset",
        markers: true
    }, 
    y: 100, 
    duration: 1,
    opacity: 0,
    color: "white"
})

gsap.from(".present", {
    scrollTrigger:{
        trigger: ".present",
        start: "-20% center",
        end: "center 40%",
        toggleActions: "restart complete reverse reset",
        markers: true
    },
    duration: 2,
    backgroundColor: "#83B4FF"
})

gsap.to(".container", {
    scrollTrigger: {
        trigger: ".present",
        start: "-20% center",
        end: "center 40%",
        toggleActions: "restart complete reverse reset",
        markers: true
    },
    duration: 2,
    backgroundColor: " rgb(14, 17, 35)"
})

gsap.from(".first", {
    scrollTrigger:{
        trigger: ".first",
        start: "-20% center",
        end: "center 40%",
        toggleActions: "restart complete reverse reset",
        markers: true
    },
    duration: 3,
    y:200,
    opacity: 0
})

gsap.from(".sec", {
    scrollTrigger:{
        trigger: ".sec",
        start: "-20% center",
        end: "center 40%",
        toggleActions: "restart complete reverse reset",
        markers: true
    },
    duration: 3,
    y:200,
    opacity: 0
})

gsap.from(".third", {
    scrollTrigger:{
        trigger: ".third",
        start: "-20% center",
        end: "center 40%",
        toggleActions: "restart complete reverse reset",
        markers: true
    },
    duration: 3,
    y:200,
    opacity: 0
})

window.onload = function(){
    var shadowRoot = document.querySelector("spline-viewer").shadowRoot;
    shadowRoot.querySelector("#logo").remove();
}