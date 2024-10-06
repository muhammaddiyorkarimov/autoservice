import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import './rootLayout.css'

function RootLayout() {
  return (
    <div className="root-layout">
        <Sidebar/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout