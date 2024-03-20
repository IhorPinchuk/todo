import { ThreeCircles } from "react-loader-spinner";
import style from "./LoaderThreeCirclesSmall.module.css";

const LoaderThreeCirclesSmall = ({ isLoading }) => {
  return (
    <ThreeCircles
      visible={isLoading}    
      height={20}
      outerCircleColor="#1212ca"
      innerCircleColor="#1616ef"
      middleCircleColor="#4545f0"
      ariaLabel="three-circles-loading"
      wrapperClass={style.wrapperClass}
    />
  );
};

export default LoaderThreeCirclesSmall;