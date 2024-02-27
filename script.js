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
    .to(".boundingElemDown",{
        y: '0',
        ease : Expo.easeInOut,
        delay : -1,
        duration: 1,
        stagger: .3
    })
    .from("#heroFooter",{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease : Expo.easeInOut
    })
}

function secondPageAnimation(){
    document.querySelectorAll(".elem").forEach(function(elem) {
        var rotation = 0;
        var diffRotation = 0;
    
        elem.addEventListener("mouseenter",function(dets){
            gsap.to(elem.querySelector("h2"),{
                opacity: .3,
                x : "8%",
                ease: Power3,
            });
        });
        elem.addEventListener("mouseleave",function(dets){
            gsap.to(elem.querySelector("h2"),{
                opacity: .65,
                x : "0",
                ease: Power3,
            });
        });
        elem.addEventListener("mousemove",function(dets){
            var diff = (dets.clientY - elem.getBoundingClientRect().top);
            diffRotation = dets.clientX - rotation;
            rotation = dets.clientX;
            
            gsap.to(elem.querySelector("img"),{
                opacity: 1,
                ease: Power3,
                top: diff,
                left: dets.clientX,
                rotate : gsap.utils.clamp(-20,20,diffRotation * 0.5)
            });
        });
        elem.addEventListener("mouseleave",function(dets){
            gsap.to(elem.querySelector("img"),{
                opacity: 0,
                duration: .5
            });
        });
    });
}



secondPageAnimation();
circleShapeChange();
circleMouseFollower();
firstPageAnimation();

