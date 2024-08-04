import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const AnimationFadeUp = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return <div data-aos='fade-up' data-aos-offset='1' data-aos-duration='1000'>{children}</div>;
};

export default AnimationFadeUp;
const AnimationFadeUp2 = ({ children }) => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return <div data-aos='fade-up' data-aos-offset='5' data-aos-delay='500' data-aos-duration='1000'>{children}</div>;
};

export {AnimationFadeUp2};
