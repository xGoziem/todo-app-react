interface TextInputProps {
  name: string;
  label: string;
}

interface TextAreaInputProps {
  name: string;
  label: string;
}

interface DateInputProps {
  name: string;
  label: string;
}

interface SelectInputProps {
  name: string;
  label: string;
  options: string[];
  selected: string;
}

// Text Input Field Component
export const TextInput = ({ name, label }: TextInputProps) => {
  return (
    <div className='space-y-1'>
      <label htmlFor={name} className='text-xl'>{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        className='class="block w-full border-2 border-neutral-400 bg-neutral-300 text-sm rounded-lg transition duration-200 focus:ring-0 focus:ring-offset-0 focus:border-neutral-600'
      />
    </div>
  );
};

// Textarea Input Field Component
export const TextareaInput = ({ name, label }: TextAreaInputProps) => {
  return (
    <div className='space-y-1'>
      <label htmlFor={name} className='text-xl'>{label}</label>
      <textarea
        name={name}
        id={name}
        className="w-full h-[7.5rem] border-2 border-neutral-400 bg-neutral-300 text-sm rounded-lg transition duration-200 focus:ring-0 focus:ring-offset-0 focus:border-neutral-600 custom-scrollbar"
      ></textarea>
    </div>
  );
};

// Date Input Field Component
export const DateInput = ({ name, label }: DateInputProps) => {
  return (
    <div className='space-y-1'>
      <label htmlFor="date" className='text-xl'>Due Date</label>
      <input
        type="date"
        name="date"
        id="date"
        className="w-full border-2 border-dark/50 border-neutral-400 bg-neutral-300 text-sm rounded-lg transition duration-200 focus:ring-0 focus:ring-offset-0 focus:border-neutral-600"
      />
    </div>
  );
};

// Select Input Field Component
export const SelectInput = ({name, label, options, selected}: SelectInputProps) => {
  return (
    <div className='space-y-1'>
      <label htmlFor={name} className='text-xl'>{label}</label>
      <select
        name={name}
        id={name}
        className="w-full  border-2 border-dark/50 border-neutral-400 bg-neutral-300 text-sm rounded-lg transition duration-200 focus:ring-0 focus:ring-offset-0 focus:border-neutral-600"
      >
        {options.map((option: string) => (
          <option
            key={option.toLowerCase()}
            value={option.toLowerCase()}
            selected={selected === option ? true : undefined}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};