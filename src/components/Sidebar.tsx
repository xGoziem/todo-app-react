import SidebarItem from "./SidebarItem";
import { BsFillInboxFill, BsCalendar2Day, BsCalendar2Week, BsStar } from 'react-icons/bs';

const Sidebar = () => {
  return (
    <aside className="bg-neutral-300 border-2 border-neutral-300 border-r-neutral-800 pt-6 space-y-10">
      <section className="mx-8 space-y-3">
        <h3 className="font-semibold text-3xl text-neutral-600">Home</h3>
        
        <div className="space-y-2">
          <SidebarItem name="Inbox" icon={BsFillInboxFill} />
          <SidebarItem name="Today" icon={BsCalendar2Day} />
          <SidebarItem name="Week" icon={BsCalendar2Week} />
          <SidebarItem name="Important" icon={BsStar} />
        </div>
      </section>

      <section className="mx-8 space-y-3">
        <h3 className="font-semibold text-3xl text-neutral-600">Projects</h3>
      </section>
    </aside>
  );
};

export default Sidebar;
