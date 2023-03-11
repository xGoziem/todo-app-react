import { useState, useRef, useEffect } from 'react';

import { BsThreeDotsVertical } from 'react-icons/bs';

import Dropdown from './Dropdown';

// Props type
interface Props {
  type: string;
}

const OptionsIcon = ({ type }: Props) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If dropdown is visible, remove it when anywhere apart from the dropdown is clicked
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && iconRef.current && !iconRef.current.contains(event.target as Node)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
  
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleIconClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Determine classNames
  const conditionalClasses = type === "task header" ? "p-2.5 hover:bg-neutral-300" : "p-1.5 hover:bg-neutral-400";
  const iconClassName = `bg-transparent rounded-full transition duration-300 cursor-pointer ${conditionalClasses}`;
  const iconSize = type === "task header" ? "text-3xl" : type === "task" || "project header" ? "text-xl" : "text-lg";
  const positioning = type === "task header" ? "top-12 right-0" : type === "task" ? "top-8 right-0" : "top-8 left-0";
  const dropdownContainerClass = `absolute z-50 ${positioning}`;

  return (
    <div className='relative' ref={iconRef} onClick={handleIconClick}>
      <div className={iconClassName}>
        <BsThreeDotsVertical className={iconSize} />
      </div>

      {/* If dropdown is visible, show the required options */}
      {dropdownVisible && (
        <div
          className={dropdownContainerClass}
          ref={dropdownRef}
          onClick={event => event.stopPropagation()}
        >
          <Dropdown type={type} setDropdownVisible={setDropdownVisible} />
        </div>
      )}
    </div>
  );
};

export default OptionsIcon;