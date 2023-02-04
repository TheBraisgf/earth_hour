gsap.registerPlugin(ScrollTrigger);

const bgVideo = document.querySelector("#bgVideo");
const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");
const section3 = document.querySelector("#section3");
const arrow = document.querySelector("#arrow");

bgVideo.load();
bgVideo.currentTime = 0;
bgVideo.pause();

let sections = gsap.utils.toArray(".step");
sections.forEach((step, i) => {
  // Video scrolling
  gsap.fromTo(
    bgVideo,
    { currentTime: 0 * i },
    {
      scrollTrigger: {
        trigger: step,
        scrub: true,
        start: 0,
      },
      currentTime: (i + 1) * 6,
      duration: 1,
      ease: "none",
    }
  );
});

// Dissapear section1
gsap.to(section1, {
  opacity: 0,
  scrollTrigger: {
    trigger: section1,
    start: "bottom bottom",
    end: "bottom 85%",
    scrub: true,
  },
});

// Dissapear section2
gsap.fromTo(
  section2,
  { opacity: 1 },
  {
    opacity: 0,
    scrollTrigger: {
      trigger: section2,
      start: "110% bottom",
      end: "120% bottom",
      scrub: true,
    },
  }
);

// Show section2
gsap.fromTo(
  section2,
  { opacity: 0 },
  {
    opacity: 1,
    scrollTrigger: {
      trigger: section2,
      start: "80% 90%",
      end: "85% 80%",
      scrub: true,
    },
  }
);

// Show section3
gsap.fromTo(
  section3,
  { opacity: 0 },
  {
    opacity: 1,
    scrollTrigger: {
      trigger: section3,
      start: "80% bottom",
      end: "85% 80%",
      scrub: true,
    },
  }
);

// Arrow blink
gsap.to(arrow, {
  duration: 1,
  opacity: 0,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

// Arrow rotation
gsap.to(arrow, {
  rotation: 180,
  ease: "none",
  scrollTrigger: {
    trigger: section3,
    start: "70% bottom",
    end: "85% 90%",
    scrub: true,
  },
});
