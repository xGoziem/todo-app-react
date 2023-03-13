import { useState } from "react";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

interface Project {
  [projectName: string]: {
    key: string;
    title: string;
    description: string;
    dueDate: Date;
    priority: "low" | "medium" | "high";
    project: string;
  }[];
}

const App = () => {
  const [projects, setProjects] = useState<Project>({inbox: []})

  return (
    <div className="App font-clash text-neutral-800 fill-neutral-800 grid grid-rows-[3rem_calc(100vh-3rem)] h-screen">
      <Header />

      {/* Element containing Main and Sidebar components */}
      <div className=" grid lg:grid-cols-[1fr_4fr]">
        <Sidebar />
        <Main />
      </div>
    </div>
  )
};

export default App;

// const projects = {
//   inbox: [
//     {
//       key: "abc123",
//       title: "Do the chores!",
//       description: "Do the chores, you mf!",
//       dueDate: new Date(),
//       priority: "high",
//       project: "inbox"
//     },
//     {
//       key: "def456",
//       title: "Wagwan?!",
//       description: "Wagwan, mf?!",
//       dueDate: new Date(),
//       priority: "low",
//       project: "inbox"
//     }
//   ],

//   work: [
//     {
//       key: "ghi789",
//       title: "Wagwan?!",
//       description: "Wagwan, mf?!",
//       dueDate: new Date(),
//       priority: "low",
//       project: "inbox"
//     }
//   ]
// };