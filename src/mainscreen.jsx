import "./components/nexcent.css";
import Menubar from "./components/menubar.jsx";
import Index from "./components/index.jsx"
import Clients from "./components/clients.jsx"
const Mainscreen = () => {
  return (
    <div className="">
      <Menubar />
      <Index />
      <Clients />
    </div>
  );
};

export default Mainscreen;