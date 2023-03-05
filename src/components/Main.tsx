import MenuIcon from "./MenuIcon";
import Task from "./Task";

const Main = () => {
  return (
    <section className="bg-neutral-200 px-24 pt-8">
      <div className="">
        {/* Header */}
        <div className="flex items-center justify-between border-2 border-b-neutral-400 pb-2">
          <h2 className="text-6xl font-bold">Inbox</h2>
          <MenuIcon size="text-3xl" />
        </div>

        {/* Task Container */}
        <div className="mt-6 space-y-4">
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    </section>
  );
};

export default Main;