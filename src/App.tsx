import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="App font-clash text-neutral-800 h-screen grid grid-rows-[1fr_13fr]">
      <Header />
      <main className="grid grid-cols-[1fr_4fr]">
        <Sidebar />
        <Main />
      </main>
    </div>
  )
};

export default App;
