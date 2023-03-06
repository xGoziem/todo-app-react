import { MdChecklist } from 'react-icons/md';

interface HeaderType {
  parent: string;
}

const Header = ({ parent }: HeaderType) => {
  const className = parent === "sidebar" ? "flex items-center gap-1" : "flex items-center gap-1 lg:invisible";

  return (
    <header className='flex justify-between bg-neutral-400 border-neutral-400 border-b-neutral-500 border-[3px] font-bold px-6'>
      <div className={className}>
        <MdChecklist className='text-5xl fill-neutral-800' />
        <h1 className='text-4xl'>ToDo</h1>
      </div>
    </header>
  );
};

export default Header;