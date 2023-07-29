import React from "react";
import { LineWave } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center ">
      <LineWave
        height="150"
        width="150"
        color="#AF209A"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        firstLineColor=""
        middleLineColor="#F2C94C"
        lastLineColor=""
      />
    </div>
  );
};

export default Loader;
