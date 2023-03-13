import { useEffect ,Dispatch, SetStateAction, ChangeEvent, RefObject } from "react";

interface FormValues {
  title: string;
  description: string;
  date: Date;
  priority: string;
  project: string;
}

interface Props {
  formValues: FormValues;
  setFormValues: Dispatch<SetStateAction<FormValues>>;
  titleInputRef: RefObject<HTMLInputElement>;
}

// Input Fields Component for New Task Modal
export const NewTaskModal = ({ formValues, setFormValues, titleInputRef }: Props) => {
  useEffect(() => {
    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, []);
  

  const projectOptions = ['inbox'];

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='grid grid-cols-2 items-center py-5 px-5 gap-8'>
      {/* Left Fields */}
      <div className='space-y-4'>
        {/* Title */}
        <div className='space-y-1'>
          <label htmlFor='title' className='text-xl'>Title</label>
          <input
            ref={titleInputRef}
            type="text"
            name='title'
            id='title'
            onChange={handleInputChange}
            required
            className='class="block w-full border-2 border-neutral-400 bg-neutral-300 text-sm rounded-lg transition duration-200 focus:ring-0 focus:ring-offset-0 focus:border-neutral-600'
          />
        </div>

        {/* Description */}
        <div className='space-y-1'>
          <label htmlFor='description' className='text-xl'>Description</label>
          <textarea
            name='description'
            id='description'
            onChange={handleInputChange}
            className="w-full h-[7.5rem] border-2 border-neutral-400 bg-neutral-300 text-sm rounded-lg transition duration-200 focus:ring-0 focus:ring-offset-0 focus:border-neutral-600 custom-scrollbar"
          ></textarea>
        </div>
      </div>

      {/* Right Fields */}
      <div className='space-y-4'>
        {/* Due Date */}
        <div className='space-y-1'>
          <label htmlFor="date" className='text-xl'>Due Date</label>
          <input
            type="date"
            name='date'
            id="date"
            onChange={handleInputChange}
            required
            className="w-full border-2 border-dark/50 border-neutral-400 bg-neutral-300 text-sm rounded-lg transition duration-200 focus:ring-0 focus:ring-offset-0 focus:border-neutral-600"
          />
        </div>
        {/* Priority */}
        <div className='space-y-1'>
          <label htmlFor='priority' className='text-xl'>Priority</label>
          <select
            name='priority'
            id='priority'
            onChange={handleInputChange}
            className="w-full  border-2 border-dark/50 border-neutral-400 bg-neutral-300 text-sm rounded-lg transition duration-200 focus:ring-0 focus:ring-offset-0 focus:border-neutral-600"
          >
            <option key='low' value='low'>
              Low
            </option>
            <option key='medium' value='medium'>
              Medium
            </option>
            <option key='high' value='high'>
              High
            </option>
          </select>
        </div>

        {/* Project */}
        <div className='space-y-1'>
          <label htmlFor='project' className='text-xl'>Project</label>
          <select
            name='project'
            id='project'
            onChange={handleInputChange}
            className="w-full  border-2 border-dark/50 border-neutral-400 bg-neutral-300 text-sm rounded-lg transition duration-200 focus:ring-0 focus:ring-offset-0 focus:border-neutral-600"
          >
            {projectOptions.map((option: string) => (
              <option
                key={option.toLowerCase()}
                value={option.toLowerCase()}
              >
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};