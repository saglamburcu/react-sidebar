import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";

function Modal() {
  const { showModal, setShowModal } = useGlobalContext();

  return (
    <div className={showModal ? "modal" : "modal hidden-modal"}>
      <div className="modal-content">
        <h1>Modal Content</h1>
        <button className="close-modal" type="button" onClick={() => setShowModal(false)}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
};

export default Modal;