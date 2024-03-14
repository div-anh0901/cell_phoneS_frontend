
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
export function DotMoveLeft(){
    return (
        <div className="absolute  z-[20] top-[40%] left-[10px]">
            <div className="w-[40px] h-[70px] p-[10px]  rounded-dot-left text-[35px] flex items-center bg-white text-black opacity-80">
                <FaAngleLeft/>
            </div>
        </div>
    )
}
export function DotMoveRight(){
    return (
        <div className="absolute z-[20] top-[40%] right-[10px]">
            <div className="w-[40px] h-[70px] p-[10px] rounded-dot-right text-[35px] flex items-center bg-white text-black opacity-80">
                <FaAngleRight/>
            </div>
        </div>
    )
}