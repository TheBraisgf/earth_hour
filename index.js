gsap.registerPlugin(ScrollTrigger);

const bgVideo = document.querySelector("#bgVideo");

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
