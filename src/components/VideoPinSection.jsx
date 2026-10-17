import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const VideoPinSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "-15% top",
          end: "200% top",
          scrub: 1.5,
          // markers: true,
          pin: true,
        },
      });

      tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      });
    }
  });

  return (
    <section className="vd-pin-section">
      <div
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(6% at 50% 50%)",
        }}
        className="size-full video-box"
      >
        <video
          src="/videos/pin-video.mp4"
          playsInline
          muted
          loop
          autoPlay
        ></video>

        <div className="abs-center md:scale-100 scale-200">
          <img
            className="spin-circle"
            src="/images/circle-text.svg"
            alt="circle-text"
          />

          <div className="play-btn">
            <img
              className="size-[3vw] ml-[.5vw]"
              src="/images/play.svg"
              alt="play-button"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPinSection;
