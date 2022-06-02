import { createContext, useState } from "react";
import { links, social } from "./data";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const values = { links, social, showSidebar, setShowSidebar, showMenu, setShowMenu, showModal, setShowModal }

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
};

export default AppContext;