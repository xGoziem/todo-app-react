import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BsPlusLg, BsCheckCircle, BsTrash, BsPencilSquare } from 'react-icons/bs';
import NewTaskModal from './Modal/NewTaskModal';

interface DropdownType {
  type: string;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown = ({ type, setShowDropdown }: DropdownType) => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const overlay = document.createElement('div') as HTMLDivElement;
    overlay.className = "fixed flex items-center justify-center inset-0 bg-black/20"
    const modalContainer = document.createElement('div') as HTMLDivElement;
    modalContainer.onclick = (event) => event.stopPropagation();
    ReactDOM.render(<NewTaskModal />, modalContainer);
    overlay.appendChild(modalContainer);

    if (modalVisible) {
      document.body.appendChild(overlay);
      setShowDropdown(false);
    }

    const removeOverlay = () => {
      document.body.removeChild(overlay);
    };

    overlay.addEventListener('click', removeOverlay);
  }, [modalVisible]);

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

  const handleClick = (option: string) => {
    if (option === "Add New Task") {
      setModalVisible(true);
    }
  };

  return (
    <div className="bg-neutral-300 w-[13.5rem] border-2 border-neutral-400 py-1.5 rounded-xl shadow-xl">
      {dropdownObj.options.map((option: string, index: number) => (
        <div
          key={option}
          className="flex items-center gap-3 px-4 py-2.5 hover:bg-neutral-400 cursor-pointer"
          onClick={() => handleClick(option)}
        >
          {dropdownObj.optionIcons[index]}
          <p>{option}</p>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;