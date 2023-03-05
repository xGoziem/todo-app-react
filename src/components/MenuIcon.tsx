import { BsThreeDotsVertical } from 'react-icons/bs';

interface MIcon {
  size: string;
}

const MenuIcon = ({ size }: MIcon) => {
  const iconClassName = size === "text-xl" ? 'bg-transparent rounded-full p-2 hover:bg-neutral-400 transition duration-300 cursor-pointer'
    : size === "text-lg" ? 'bg-transparent rounded-full p-1.5 hover:bg-neutral-400 transition duration-300 cursor-pointer'
    : 'bg-transparent rounded-full p-3 hover:bg-neutral-300 transition duration-300 cursor-pointer';

  return (
    <div className={iconClassName}>
      <BsThreeDotsVertical className={size} />
    </div>
  );
};

export default MenuIcon;