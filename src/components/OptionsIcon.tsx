import { useState, useRef, useEffect } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import TaskHeadingOptionsDropdown from './TaskHeadingDropdown';

// Props type
interface OptionsIconType {
  size: string;
}

const OptionsIcon = ({ size }: OptionsIconType) => {
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
    document.addEventListener("mousedown", handleClickOutside);
  
    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Show or hide dropdown
  const handleIconClick = () => {
    setShowDropdown(!showDropdown);
  };

  const iconSize = size === "text-lg" ? "p-1.5" : "text-xl" ? "p-2" : "p-3";
  const bgOnHover = size === "text-3xl" ? "bg-neutral-300" : "bg-neutral-400";
  const iconClassName = `bg-transparent rounded-full ${iconSize} hover:${bgOnHover} transition duration-300 cursor-pointer`;

  return (
    <div className='relative' ref={iconRef} onClick={handleIconClick}>
      <div className={iconClassName}>
        <BsThreeDotsVertical className={size} />
      </div>

      {showDropdown && (
        <div className="absolute z-50 top-10 right-0" ref={dropdownRef} onClick={event => event.stopPropagation()}>
          <TaskHeadingOptionsDropdown />
        </div>
      )}
    </div>
  );
};

export default OptionsIcon;