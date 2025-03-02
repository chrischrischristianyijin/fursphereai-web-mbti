"use client";

import { useProgress } from "../../context/ProgressContext";

interface ProgressBarProps {
  step: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ step }) => {
  
  const progress = (step / 19) * 100;
  return (
    <div className="
    fixed 
    left-0 
    right-0
    flex 
    items-center
    w-full 
    h-[70px]
    bg-[#EEF1FA]
    z-[9]"
    style={{
      top: 'var(--header-height)'
    }}>
        <button className="
            mr-[198.5px]
            text-[#C3C3C3] 
            text-[14px]"
            >Exit
        </button>

        <p className="
          text-[#27355D] 
          text-[14px]
          mr-[34px]
        ">Progress</p>

        <div className=" bg-[#D1D7EF] w-[740px] h-[10px] rounded-full">
            
            <div
                className=" ml-[0px] h-full bg-[#5777D0] rounded-full "
                style={{ width: `${progress}%` }}
            ></div>

       
            <div
                className="  ml-[285px] w-[10px] h-[10px] my-[-10px] bg-[#27355D] rounded-full"
            ></div>

       
            <div
                className="  ml-[458px] w-[10px] h-[10px] my-[-10px] bg-[#FFC542] rounded-full"
            ></div>
        
        </div>

         <p className=" 
           ml-[24px]
           text-[#27355D] 
           text-[14px]">
           {step} / 19
         </p> 
    
    </div>
  );
};

export default ProgressBar;
