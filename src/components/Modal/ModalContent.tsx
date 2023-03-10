import { TextInput, TextareaInput, DateInput, SelectInput } from "../Forms/InputFields";

// Input Fields Component for New Task Modal
export const NewTaskModal = () => {
  return (
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
  );
};