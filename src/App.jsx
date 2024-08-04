import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Sidebar />
      <section className="mainContent w-full flex flex-col">
        <Header />
        <Dashboard />
      </section>
    </>
  );
}

export default App;
