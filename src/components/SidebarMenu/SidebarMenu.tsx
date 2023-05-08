import './SidebarMenu.scss'
import logo1 from 'src/asset/images/logo-merc.jpg'
import ukFlag from 'src/asset/flag/uk.svg'
import { sidebarData } from './SidebarData'
import SidebarMenuItems from './SidebarMenuItems'
import SidebarMenuItemsCollapse from './SidebarMenuItemsCollapse'

const SidebarMenu = () => {
  return (
    <div className="sidebar min-vh-100 d-flex flex-column">
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
      <div className="sidebar-footer">
        <div className="dropdown">
          <button className="btn py-2 w-100 d-flex" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <div className='button-content'>
              <div className='button-icon'>
                <img src={ukFlag} alt="lang" />
              </div>
              <div className="button-text ps-3">
                <div className='text'>
                  Language
                </div>
                <div className='selected-lang'>
                  English
                </div>
              </div>
            </div>
          </button>
          <ul className="dropdown-menu w-100">
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SidebarMenu
