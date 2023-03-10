import { useState, useRef, useEffect } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Dropdown from './Dropdown';

// Props type
interface OptionsIconType {
  type: string;
}

const OptionsIcon = ({ type }: OptionsIconType) => {
  const [showDropdown, setShowDropdown] = useState(false); // hold dropdown state
  const dropdownRef = useRef<HTMLDivElement>(null); // reference dropdown
  const iconRef = useRef<HTMLDivElement>(null); // reference icon

  // useEffect hook to close dropdown when anywhere apart from the dropdown menu is clicked
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && iconRef.current && !iconRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    // Add event listener to the entire document to listen for clicks
    document.addEventListener("click", handleClickOutside);
  
    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Show or hide dropdown
  const handleIconClick = () => {
    setShowDropdown(!showDropdown);
  };

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

      {showDropdown && (
        <div className={dropdownContainerClass} ref={dropdownRef} onClick={event => event.stopPropagation()}>
          <Dropdown type={type} setShowDropdown={setShowDropdown} />
        </div>
      )}
    </div>
  );
};

export default OptionsIcon;