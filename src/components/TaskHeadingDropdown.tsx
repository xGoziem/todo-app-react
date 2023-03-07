import { BsPlusLg, BsCheckCircle, BsTrash } from "react-icons/bs";

const TaskHeadingOptionsDropdown = () => {
  return (
    <div className="bg-neutral-300 w-56 border-2 border-neutral-400 py-1.5 rounded-xl shadow-xl">
      <div className="flex items-center gap-3 px-4 py-2.5 hover:bg-neutral-400 cursor-pointer">
        <BsPlusLg />
        <p>Add New Task</p>
      </div>
      <div className="flex items-center gap-3 px-4 py-2.5 hover:bg-neutral-400 cursor-pointer">
        <BsCheckCircle />
        <p>Complete All Tasks</p>
      </div>
      <div className="flex items-center gap-3 px-4 py-2.5 hover:bg-neutral-400 cursor-pointer">
        <BsTrash />
        <p>Delete All Tasks</p>
      </div>
    </div>
  );
};

export default TaskHeadingOptionsDropdown;