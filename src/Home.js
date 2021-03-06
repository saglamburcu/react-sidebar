import { GiHamburgerMenu } from "react-icons/gi";
import { useGlobalContext } from "./context";

function Home() {
  const { showSidebar, setShowSidebar, showMenu, setShowMenu, setShowModal } = useGlobalContext();

  const handleClick = () => {
    setShowSidebar(!showSidebar);
    setShowMenu(!showMenu)
  }

  return (
    <div className="home">
      <div className={showSidebar ? "menu-icon hide-menu-icon" : "menu-icon "}>
        <button className="menu-btn" type="button" onClick={handleClick}><GiHamburgerMenu /></button>
      </div>
      <div className="show-btn">
        <button type="button" onClick={() => setShowModal(true)}>SHOW MODAL</button>
      </div>
    </div>

  )
};

export default Home;