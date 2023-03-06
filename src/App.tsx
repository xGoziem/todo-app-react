import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className="App font-clash text-neutral-800 fill-neutral-800 grid grid-cols-[1fr_4fr]">
      <Sidebar />
      <Main />
    </div>
  )
};

export default App;