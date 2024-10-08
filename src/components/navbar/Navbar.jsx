import { LuUser2 } from 'react-icons/lu'
import './navbar.css'

function Navbar({title}) {
  return (
    <div className='navbar'>
      <div className="navbar-title">{title}</div>
      <div className="navbar-items">
        <div className="img">
        <LuUser2 />
        </div>
        <div className="info">
          <h1>Admin adnminjonov</h1>
          <p>Fergana Branch</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar