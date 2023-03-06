import { IconType } from "react-icons";

interface SBItem {
  name: string;
  icon: IconType;
}

const HomeItem = ({ name, icon }: SBItem) => {
  const Icon = icon; // Capitalize the variable name to use it as a component
  const itemClassName = name === 'Inbox' ? "flex items-center gap-3 bg-neutral-400 px-4 cursor-pointer rounded-xl" : "flex items-center gap-3 px-4 cursor-pointer";
  const itemNameClassName = name === 'Inbox' ? "text-xl pt-1.5 pb-1" : "text-xl py-1.5";

  return (
    <div className={itemClassName}>
      <Icon className="text-xl" />
      <h4 className={itemNameClassName}>{name}</h4>
    </div>
  );
};

export default HomeItem;
