import { BsPlusLg, BsCheckCircle, BsTrash, BsPencilSquare } from 'react-icons/bs';

interface DropdownType {
  type?: string;
}

const Dropdown = ({ type }: DropdownType) => {
  let dropdownObj: any;

  if (type === "task header") {
    dropdownObj = {
      options: ['Add New Task', 'Complete All Tasks', 'Delete All Tasks'],
      optionIcons: [<BsPlusLg />, <BsCheckCircle />, <BsTrash />]
    }
  } else if (type === "task") {
    dropdownObj = {
      options: ['Edit Task', 'Delete Task'],
      optionIcons: [<BsPencilSquare />, <BsTrash />]
    }
  } else if (type === "project header") {
    dropdownObj = {
      options: ['Add New Project', 'Delete All Projects'],
      optionIcons: [<BsPlusLg />, <BsTrash />]
    }
  } else {
    dropdownObj = {
      options: ['Edit Project', 'Delete Project'],
      optionIcons: [<BsPencilSquare />, <BsTrash />]
    }
  }

  return (
    <div className="bg-neutral-300 w-[13.5rem] border-2 border-neutral-400 py-1.5 rounded-xl shadow-xl">
      {dropdownObj.options.map((option: string, index: number) => (
        <div className="flex items-center gap-3 px-4 py-2.5 hover:bg-neutral-400 cursor-pointer">
          {dropdownObj.optionIcons[index]}
          <p>{option}</p>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;