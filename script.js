var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
document.addEventListener('mousemove', function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 250 + "px";
    blur.style.top = dets.y - 250 + "px";
});

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function (elem) {
    elem.addEventListener('mouseenter', function () {
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
});
h4all.forEach(function (elem) {
    elem.addEventListener('mouseleave', function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #7fa516";
        crsr.style.backgroundColor = "#7fa516";
    });
});


gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1

    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -30%",
        end: "top -80%",
        scrub: 2
    }

})

gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers:true,
        start: "top 65%",
        end: "top 58%",
        scrub: 3
    }
})

var cards = document.querySelectorAll(".cards")
cards.forEach(function (object) {
    object.addEventListener('mouseenter', function () {
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
})
cards.forEach(function (object) {
    object.addEventListener('mouseleave', function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #7fa516";
        crsr.style.backgroundColor = "#7fa516";
    });
})


gsap.from("#colon1", {
    y: -80,
    x: -80,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 45%",
        scrub: 3,
    }
});
gsap.from("#colon2", {
    y: 80,
    x: 80,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 45%",
        scrub: 3,
    }
});

// var elem = document.querySelectorAll(".elem")
// elem.forEach(function (object){
//     object.addEventListener('mouseenter', function () {
//         crsr.style.scale = 3;
//         crsr.style.border = "1px solid #fff";
//         crsr.style.backgroundColor = "transparent";
//     });
// })
// elem.forEach(function (object){
//     object.addEventListener('mouseleave', function () {
//         crsr.style.scale = 1;
//         crsr.style.border = "0px solid #7fa516";
//         crsr.style.backgroundColor = "#7fa516";
//     });
// })

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: "top 70%",
        scrub: 2,
    }
})