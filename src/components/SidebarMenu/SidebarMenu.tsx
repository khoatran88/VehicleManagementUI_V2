import './SidebarMenu.scss'
import logo1 from 'src/asset/images/logo-merc.jpg'
import { sidebarData } from './SidebarData'
import SidebarMenuItems from './SidebarMenuItems'
import SidebarMenuItemsCollapse from './SidebarMenuItemsCollapse'

const SidebarMenu = () => {
  return (
    <div className="sidebar min-vh-100">
      <div className="sidebar-header d-flex align-items-center justify-content-center mb-3 py-2">
        <a href="/dashboard" className="nav-link">
          <img src={logo1} alt="LOGO" />
        </a>
      </div>
      <div className="sidebar-content">
        {sidebarData.map((items, index) =>
          items.child ? (
            <SidebarMenuItemsCollapse
              items={items}
              key={items.path}
              index={index}
            />
          ) : (
            <SidebarMenuItems items={items} key={items.path} index={index} />
          )
        )}
      </div>
    </div>
  )
}

export default SidebarMenu
