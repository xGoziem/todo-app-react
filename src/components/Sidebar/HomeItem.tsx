import { IconType } from "react-icons";

interface HomeItemType {
  name: string;
  icon: IconType;
}

const HomeItem = ({ name, icon }: HomeItemType) => {
  const Icon = icon; // Capitalize the variable name to use it as a component
  const itemClassName = name === 'Inbox' ? "flex items-center justify-between bg-neutral-400 px-4 cursor-pointer rounded-xl" : "flex items-center justify-between px-4 cursor-pointer hover:bg-neutral-200 rounded-xl";
  const itemNameClassName = name === 'Inbox' ? "text-xl pt-1.5 pb-1" : "text-xl py-1.5";

  return (
    <div className={itemClassName}>
      <div className="flex items-center gap-3">
        <Icon className="text-xl" />
        <h4 className={itemNameClassName}>{name}</h4>
      </div>
      <p className="pt-1">1</p>
    </div>
  );
};

export default HomeItem;
