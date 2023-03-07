import { BsFillCaretRightFill } from 'react-icons/bs';
import OptionsIcon from '../OptionsIcon';

interface ProjectItemType {
  name: string;
}

const ProjectItem = ({name}: ProjectItemType) => {
  return (
    <div className="flex items-center justify-between px-4 cursor-pointer">
      <div className="flex items-center gap-3">
        <BsFillCaretRightFill className="text-xl" />
        <h4 className="text-xl py-1.5">{name}</h4>
      </div>

      <OptionsIcon size="text-lg" />
    </div>
  );
};

export default ProjectItem;