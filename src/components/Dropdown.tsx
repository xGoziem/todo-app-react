import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import ReactDOM from 'react-dom';

import { BsPlusLg, BsCheckCircle, BsTrash, BsPencilSquare } from 'react-icons/bs';

import Modal from './Modal/Modal';

interface Props {
  type: string;
  setDropdownVisible: Dispatch<SetStateAction<boolean>>;
}

const Dropdown = ({ type, setDropdownVisible }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Create the overlay
    const overlay = document.createElement('div') as HTMLDivElement;
    overlay.className = "fixed flex items-center justify-center inset-0 bg-black/30"
    
    // Create modal container and attach modal to it
    const modalContainer = document.createElement('div') as HTMLDivElement;
    modalContainer.onclick = (event) => event.stopPropagation();
    const modal = <Modal
      type={type}
      setModalVisible={setModalVisible}
      overlay={overlay}
    />;
    ReactDOM.render(modal, modalContainer);
    
    // Append modal container to overlay
    overlay.appendChild(modalContainer);

    // Show overlay and make remove dropdown if modal visibility is true
    if (modalVisible) {
      document.body.appendChild(overlay);
      setDropdownVisible(false);
    }

    const removeOverlay = () => {
      document.body.removeChild(overlay);
    };

    // Remove overlay (and modal) if the overlay (not including modal) is clicked
    overlay.addEventListener('click', removeOverlay);
  }, [modalVisible]);

  // Determine dropdpwn content
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
    if (option === "Add New Task" || option === "Edit Task" || option === "Add New Project" || option === "Edit Project") {
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