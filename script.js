const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

var timer;

function circleShapeChange() {
    clearTimeout(timer);
    var xScale = 1;
    var yScale = 1;

    var xPrev = 0;
    var yPrev = 0;
    window.addEventListener("mousemove", function(dets){
        xScale = gsap.utils.clamp(0.7, 1.3, dets.clientX - xPrev);
        yScale = gsap.utils.clamp(0.7, 1.3, dets.clientY - yPrev);

        xPrev = dets.clientX;
        yPrev = dets.clientY;

        circleMouseFollower(xScale, yScale);

        setTimeout(() => {
           timer = document.querySelector("#cursor").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
        }, 100);
    });
};

function circleMouseFollower(xScale,yScale) {
    window.addEventListener("mousemove", function (dets) {
        // console.log(dets.clientX, dets.clientY);
        document.querySelector("#cursor").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xScale},${yScale})`;
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

circleShapeChange();
circleMouseFollower();
firstPageAnimation();

