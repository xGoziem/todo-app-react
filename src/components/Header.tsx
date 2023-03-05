import { MdChecklist } from 'react-icons/md';

const Header = () => {
  return (
    <header className='flex justify-between bg-neutral-400 border-neutral-400 border-b-neutral-800 border-[3px] font-bold px-6'>
      <div className='flex items-center gap-1'>
        <MdChecklist className='text-5xl fill-neutral-800' />
        <h1 className='text-4xl'>ToDo</h1>
      </div>
    </header>
  );
};

export default Header;