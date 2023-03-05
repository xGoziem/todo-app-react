import React from 'react'

const Task = () => {
  return (
    <div>
      <div className='border-[3px] border-neutral-800 bg-neutral-300 rounded-3xl px-3 py-1 pb-1.5'>
        <div className="">
          <input
            type="checkbox"
            className="checkbox border-[3px] border-neutral-800 rounded-full w-5 h-5 bg-transparent checked:text-neutral-800 focus:ring-0 focus:ring-offset-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Task;