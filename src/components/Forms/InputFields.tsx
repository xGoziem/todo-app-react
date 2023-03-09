interface TextInputType {
  name: string;
  label: string;
}

export const TextInput = ({ name, label }: TextInputType) => {
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

interface TextAreaInputType {
  name: string;
  label: string;
}

export const TextareaInput = ({ name, label }: TextAreaInputType) => {
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

interface DateInputType {
  name: string;
  label: string;
}

export const DateInput = ({ name, label }: DateInputType) => {
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

interface SelectInputType {
  name: string;
  label: string;
  options: string[];
  selected: string;
}

export const SelectInput = ({name, label, options, selected}: SelectInputType) => {
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