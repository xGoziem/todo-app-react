const Dropdown = ({ dropdownObj }: any) => {
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