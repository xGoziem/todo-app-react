import { IconType } from "react-icons";

interface SBItem {
  name: string;
  icon: IconType;
}

const SidebarItem = ({ name, icon }: SBItem) => {
  const Icon = icon; // Capitalize the variable name to use it as a component
  const itemClassName = name === 'Inbox' ? "flex items-center gap-4 bg-neutral-400 px-4 rounded-xl" : "flex items-center gap-4 px-4";
  const itemNameClassName = name === 'Inbox' ? "text-2xl pt-1.5 pb-1" : "text-2xl py-1.5";

  return (
    <div className={itemClassName}>
      <Icon className="text-2xl" />
      <h4 className={itemNameClassName}>{name}</h4>
    </div>
  );
};

export default SidebarItem;
