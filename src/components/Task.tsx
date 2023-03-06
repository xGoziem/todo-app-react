import MenuIcon from "./MenuIcon";
import { BsInfoCircleFill, BsStar, BsStarFill } from "react-icons/bs";

const Task = () => {
  return (
    <div className='flex items-center justify-between border-[3px] border-neutral-800 bg-neutral-300 rounded-3xl px-3 py-0.5'>
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          className="checkbox border-[3px] border-neutral-800 rounded-full w-5 h-5 bg-transparent checked:text-neutral-800 focus:ring-0 focus:ring-offset-0"
        />
        <div className="flex items-center gap-3">
          <p className='text-lg font-semibold pt-1'>
            Do the dishes!
          </p>
          <BsInfoCircleFill className="cursor-pointer" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <p className="text-sm pt-1.5">06/03/2023</p>
        <div className="flex items-center gap-1">
          <BsStar className="cursor-pointer" />
          <MenuIcon size="text-lg" />
        </div>
      </div>
    </div>
  );
};

export default Task;