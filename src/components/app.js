import { useEffect } from "react";
import UpperSide from "./upperside";
import AOS from "aos";
import "aos/dist/aos.css";
import { MiddleSide } from "./middleside";
import LowerSide from "./lowerside";
import ExtraSection from "./extra-section";

const LandingPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="">
      <UpperSide />
      <MiddleSide />
      <LowerSide />
      <ExtraSection />
    </div>
  );
};

export default LandingPage;
