import HomeItem from "./HomeItem";
import { BsFillInboxFill, BsCalendar2Day, BsCalendar2Week, BsStar, BsFillCaretRightFill } from 'react-icons/bs';
import OptionsIcon from "../OptionsIcon";
import ProjectItem from "./ProjectItem";

const Sidebar = () => {
  return (
    <aside className="hidden bg-neutral-300 border-2 border-neutral-300 border-r-neutral-400 pt-6 space-y-10 lg:block">
      {/* Home */}
      <section className="mx-8 space-y-3">
        <h3 className="font-semibold text-3xl text-neutral-600">Home</h3>
        
        <div className="space-y-2">
          <HomeItem name="Inbox" icon={BsFillInboxFill} />
          <HomeItem name="Today" icon={BsCalendar2Day} />
          <HomeItem name="Week" icon={BsCalendar2Week} />
          <HomeItem name="Important" icon={BsStar} />
        </div>
      </section>

      {/* Projects */}
      <section className="mx-8 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-3xl text-neutral-600">Projects</h3>
          <OptionsIcon type="project header" />
        </div>

        <div className="space-y-2">
          <ProjectItem name="Music" />
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
