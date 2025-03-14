import PropTypes from "prop-types";
import styles from "../../css/Reusable-Components-Css/slider.module.css";
import clsx from "clsx";
import { useState } from "react";

export default function Slider({
  sliderDataProp = [],
  customSliderClass = {},
  sliderRight,
  sliderLeft,
}) {
  Slider.propTypes = {
    sliderDataProp: PropTypes.array.isRequired,
    customSliderClass: PropTypes.shape({
      sliderWrapper: PropTypes.string,
      sliderNavButton: PropTypes.string,
      sliderDisplay: PropTypes.string,
      sliderItem: PropTypes.string,
    }),
    sliderLeft: PropTypes.string,
    sliderRight: PropTypes.string,
  };

  const [sliderState, setSliderState] = useState(0);
  const sliderData = sliderDataProp;

  const changeSlide = (newIndex) => {
    setSliderState(newIndex);
  };

  const handleSliderForward = () => {
    changeSlide((sliderState + 1) % sliderData.length);
  };

  const handleSliderBack = () => {
    changeSlide((sliderState - 1 + sliderData.length) % sliderData.length);
  };

  return (
    <div id={customSliderClass.sliderContainer}>
      <h2
        className={clsx(
          styles["sliderNavButton"],
          customSliderClass.sliderNavButton
        )}
        onClick={handleSliderBack}
      >
        {sliderLeft}
      </h2>

      {sliderData[sliderState]}

      <h2
        className={clsx(
          styles["sliderNavButton"],
          customSliderClass.sliderNavButton
        )}
        onClick={handleSliderForward}
      >
        {sliderRight}
      </h2>
    </div>
  );
}
