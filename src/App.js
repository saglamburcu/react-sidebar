import { AppContextProvider } from "./context";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Modal from "./Modal";

function App() {

  return (
    <AppContextProvider>
      <div className="container">
        <Sidebar />
        <Home />
        <Modal />
      </div>
    </AppContextProvider>
  )
};

export default App;