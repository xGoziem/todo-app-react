import { FormEvent, useState, Dispatch, SetStateAction } from 'react';
import { BsXCircle } from 'react-icons/bs';

import { NewTaskModal } from './ModalContent';

interface Props {
  type: string;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  overlay: HTMLDivElement;
}

const Modal = ({ type, setModalVisible, overlay }: Props) => {
  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
    date: new Date(),
    priority: 'low',
    project: 'inbox'
  });

  // Determine Modal Header, Modal Content Component and Modal Footer
  const modalHeader = type === "task header" ? "Add New Task" : type === "task" ? "Edit Task" : type === "project header" ? "Add New Project" : "Edit Project";
  const ModalContent = type === "task header" ? NewTaskModal : type === "task" ? null : type === "project header" ? null : null;
  const modalFooter = type === "task header" ? "Add Task" : type === "task" ? "Edit" : type === "project header" ? "Add Project" : "Edit";

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    form.reset();
    console.log(formValues);
  };

  const handleCancelIconClick = () => {
    setModalVisible(false);
    document.body.removeChild(overlay);
  };

  return (
    <form
      onSubmit={event => handleSubmit(event)}
      className="bg-neutral-300 max-w-3xl border-2 border-neutral-400 rounded-xl shadow-xl font-clash"
    >
      {/* Modal Header */}
      <div className="flex items-center justify-between text-2xl font-semibold py-3 px-5 border-b-2 border-neutral-400">
        {modalHeader}
        {/* Cancel Icon */}
        <div
          onClick={handleCancelIconClick}
          className='p-2 hover:bg-neutral-400 rounded-full transition duration-300'
        >  
          <BsXCircle className='text-xl' />
        </div>
      </div>

      {/* Modal Content Component */}
      {
        ModalContent &&
        <ModalContent
          formValues={formValues}
          setFormValues={setFormValues}
        />
      }

      {/* Form Footer */}
      <div className="text-right font-semibold py-4 px-5 border-t-2 border-neutral-400">
        <button className='border-2 border-neutral-600 bg-neutral-800 text-neutral-300 rounded-lg py-2 px-6'>
          {modalFooter}
        </button>
      </div>
    </form>
  )
}

export default Modal;