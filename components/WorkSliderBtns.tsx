"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

type slideProps = {
  containerStyles: string;
  btnStyle: string;
  iconsStyles: string;
};

const WorkSliderBtns = ({
  containerStyles,
  btnStyle,
  iconsStyles,
}: slideProps) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyle} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyle} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
