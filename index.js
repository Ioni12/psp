gsap.registerPlugin(ScrollTrigger);

if(typeof gsap == "undefined")
{
    console.error("not ok");
}
else
{
    console.log("its ok");
}

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
        markers: true,
        toggleActions: "restart complete reverse reset",
    }, 
    y: 100, 
    duration: 1,
    opacity: 0,
    color: "white"
})
