import AppContext from "./context";
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";

function Sidebar() {
  const { links, social, showMenu, setShowMenu, showSidebar, setShowSidebar } = useContext(AppContext);

  const handleClick = () => {
    setShowMenu(!showMenu);

    setTimeout(() => {
      setShowSidebar(!showSidebar);
    }, 300)
  }

  return (
    <div className={showMenu ? "sidebar-container " : "sidebar-container show-sidebar"}>
      <div className="title">
        <h1>Coding Addict</h1>
        <button type="button" onClick={handleClick}>
          <FaTimes />
        </button>
      </div>
      <div className="menu">
        <ul className="list-items">
          {
            links.map(link => {
              const { id, url, text, icon } = link;
              return (
                <li key={id}>
                  <span>{icon}</span>
                  <a href={url}>{text}</a>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="footer">
        <ul className="icons">
          {
            social.map(socialIcon => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              )
            })
          }
        </ul>
      </div>

    </div>
  )
};

export default Sidebar;