var tl = gsap.timeline();

tl.from("nav .left , nav .right ul li , nav .right ul button", {
  y: -20,
  opacity: 0,
  duration: 0.8,
  stagger: 0.1,
  delay: 0.2,
});

tl.from(".center .centerLeft h1 , .centerLeft p , .centerLeft button", {
  x: -500,
  opacity: 0,
  duration: 0.4,
  stagger: 0.2,
});

tl.from(".centerRight img", {
  x: 200,
  opacity: 0,
  duration: 0.5,
});

tl.from(".buttomNav img", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".heading",
    scroller: "body",
    start: "top 70%",
    end: "top 0",
    scrub: 2,
  },
});

tl2.from(".heading", {
  x: -300,
  opacity: 0,
});

tl2.from(".s-section .box", {
  y: 500,
  opacity: 0,
  duration: 1,
  stagger: 1,
});
