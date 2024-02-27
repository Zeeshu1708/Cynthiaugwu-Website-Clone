const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

function circleMouseFollower() {
    window.addEventListener("mousemove", function (dets) {
        // console.log(dets.clientX, dets.clientY);
        document.querySelector("#cursor").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    });
};

function firstPageAnimation() {
    var tl = gsap.timeline();

    tl.from("#nav",{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease : Expo.easeInOut
    })
    .to(".boundingElem",{
        y: '0',
        ease : Expo.easeInOut,
        delay : -1,
        duration: 2,
        stagger: .2
    })
    .from("#heroFooter",{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease : Expo.easeInOut
    })
}


circleMouseFollower();
firstPageAnimation();

