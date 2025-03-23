import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <DotLottieReact
        src="https://lottie.host/52d9e3da-8e32-43e3-915b-8091637a932b/sCfL41fKDo.lottie"
        loop
        autoplay
        style={{ width: 400, height: 400 }}
      />
    </div>
  );
};
