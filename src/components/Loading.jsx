import React from "react";
import { DNA } from "react-loader-spinner";

const Loading = () => {
  return (
    // <div className="d-flex justify-content-center align-items-center vh-100">
    //   <RotatingLines
    //     strokeColor="green"
    //     strokeWidth="5"
    //     animationDuration="0.75"
    //     width="200"
    //     visible={true}
    //   />
    // </div>


    <div className="d-flex justify-content-center align-items-center vh-100">
    <DNA
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
     />
    </div>


  );
};

export default Loading;