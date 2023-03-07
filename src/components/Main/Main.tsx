import OptionsIcon from "../OptionsIcon";
import Task from "./Task";

const Main = () => {
  return (
    <section className="bg-neutral-200 px-24 pt-8 h-[calc(100vh-3rem)] grid grid-rows-[1fr_9fr]">
      {/* Header */}
      <div className="flex items-center justify-between border-2 border-b-neutral-400 pb-2">
        <h2 className="text-6xl font-bold">Inbox</h2>
        <OptionsIcon size="text-3xl" />
      </div>

      {/* Task Container */}
      <div className="py-6 px-3 space-y-4 overflow-auto custom-scrollbar">
        <Task />
      </div>
    </section>
  );
};

export default Main;