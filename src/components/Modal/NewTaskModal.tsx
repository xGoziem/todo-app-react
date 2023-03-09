import { BsXCircle } from 'react-icons/bs';
import { TextInput, TextareaInput, DateInput, SelectInput } from '../Forms/InputFields';

const NewTaskModal = () => {
  return (
    <div className="bg-neutral-300 max-w-3xl border-2 border-neutral-400 rounded-xl shadow-xl">
      {/* Form Header */}
      <div className="flex items-center justify-between text-2xl font-semibold py-3 px-5 border-b-2 border-neutral-400">
        Add New Task
        <div className='p-2 hover:bg-neutral-400 rounded-full transition duration-300'>
          <BsXCircle className='text-xl' />
        </div>
      </div>

      {/* Form Input Fields */}
      <div className='grid grid-cols-2 items-center py-5 px-5 gap-8'>
        {/* Left Fields */}
        <div className='space-y-4'>
          <TextInput name='title' label='Title' />
          <TextareaInput name='description' label='Description' />
        </div>

        {/* Right Fields */}
        <div className='space-y-4'>
          <DateInput name='date' label='Due Date' />
          <SelectInput
            name='priority'
            label='Priority'
            options={["Low", "Medium", "High"]}
            selected="Low"
          />
          <SelectInput
            name='project'
            label='Project'
            options={["Inbox"]}
            selected="Inbox"
          />
        </div>
      </div>

      {/* Form Footer */}
      <div className="text-right font-semibold py-4 px-5 border-t-2 border-neutral-400">
        <button className='border-2 border-neutral-600 bg-neutral-800 text-neutral-300 rounded-lg py-2 px-6'>
          Add Task
        </button>
      </div>
    </div>
  )
}

export default NewTaskModal;