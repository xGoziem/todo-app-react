import Header from "./Header";
import MenuIcon from "./MenuIcon";
import Task from "./Task";

const Main = () => {
  return (
    <section className="h-screen grid grid-rows-[3rem_calc(100vh-3rem)]">
      <Header parent="main" />

      <div className="bg-neutral-200 px-24 pt-8 h-[calc(100vh-3rem)] grid grid-rows-[1fr_9fr]">
        {/* Header */}
        <div className="flex items-center justify-between border-2 border-b-neutral-400 pb-2 overflow-hidden">
          <h2 className="text-6xl font-bold">Inbox</h2>
          <MenuIcon size="text-3xl" />
        </div>

        {/* Task Container */}
        <div className="py-6 px-3 space-y-4 overflow-auto custom-scrollbar">
          <Task />
        </div>
      </div>
    </section>
  );
};

export default Main;