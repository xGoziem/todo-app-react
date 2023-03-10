import { BsFillCaretRightFill } from 'react-icons/bs';

import OptionsIcon from '../OptionsIcon';

interface Props {
  name: string;
}

const ProjectItem = ({name}: Props) => {
  return (
    <div className="flex items-center justify-between px-4 cursor-pointer hover:bg-neutral-200 rounded-xl">
      <div className="flex items-center gap-3">
        <BsFillCaretRightFill className="text-xl" />
        <h4 className="text-xl py-1.5">{name}</h4>
      </div>

      <OptionsIcon type="project" />
    </div>
  );
};

export default ProjectItem;