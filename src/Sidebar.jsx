import { FaTimes } from "react-icons/fa"
import sublinks from "./data"
import { useGlobalContext } from "./Context"

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar } = useGlobalContext()
  
  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <button className="close-btn">
          <FaTimes /> 
        </button>
        <div className="sidebar-links">
          {}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar