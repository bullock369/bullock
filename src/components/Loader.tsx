import React from "react";
import { Icon } from "@iconify/react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-white flex items-center justify-center flex-col">
      <Icon icon="uil:bolt-alt" className="text-[#24acb7] w-20 h-20 animate-pulse" />
    </div>
  );
};

export default Loader;
