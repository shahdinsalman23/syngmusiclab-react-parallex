import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './App.css';
import Header from './Components/Header/Header';
import WeAreMusicPartner from './Components/WeAreMusicPartner/WeAreMusicPartner.jsx';
import ExcellenceNoticed from './Components/ExcellenceNoticed/ExcellenceNoticed.jsx';
import UploadYourTracks from './Components/UploadYourTracks/UploadYourTracks.jsx';
import GetExpectFeedback from './Components/GetExpectFeedback/GetExpectFeedback.jsx';
import GetCertifFiedRecognized from './Components/GetCertifFiedRecognized/GetCertifFiedRecognized.jsx';
import RetainOwnership from './Components/RetainOwnership/RetainOwnership.jsx';
import PlanCardSec from './Components/PlansCardSec/PlanCardSec.jsx';
import FaqsSec from './Components/FaqsSec/FaqsSec.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      getDirection: true,
    });

    scroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: scrollRef.current.style.transform ? "transform" : "fixed"
    });

    // gsap.to("#excellenceNoticed", {
    //   scrollTrigger: {
    //     trigger: "#weAreMusicPartner",
    //     scroller: scrollRef.current,
    //     start: "top top",
    //     end: "bottom top",
    //     pin: true,
    //     pinSpacing: false,
    //     scrub: true,
    //     markers: true,
    //   },
    // });

    gsap.to("#excellenceNoticed", {
      width: "95%",
      scrollTrigger: {
        trigger: "#weAreMusicPartner",
        scroller: scrollRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 5,
        markers: false,
      },
    });

    ScrollTrigger.addEventListener("refresh", () => scroll.update());
    ScrollTrigger.refresh();

    return () => {
      scroll.destroy();
    };
  }, []);

  

  return (
    <>
      <div ref={scrollRef} className="scroll-container">
        <Header />
        <WeAreMusicPartner />
        <ExcellenceNoticed />
        <UploadYourTracks />
        <GetExpectFeedback />
        <GetCertifFiedRecognized />
        <RetainOwnership />
        <PlanCardSec />
        <FaqsSec />
      </div>
    </>
  );
}

export default App;


