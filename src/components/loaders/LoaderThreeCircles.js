import { ThreeCircles } from "react-loader-spinner";
import style from "./LoaderThreeCircles.module.css";

const LoaderThreeCircles = ({ isLoading }) => {
  return (
    <ThreeCircles
      visible={isLoading}
      outerCircleColor="#1212ca"
      innerCircleColor="#1616ef"
      middleCircleColor="#4545f0"
      ariaLabel="three-circles-loading"
      wrapperClass={style.wrapperClass}
    />
  );
};

export default LoaderThreeCircles;
