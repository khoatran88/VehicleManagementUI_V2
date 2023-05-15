import './SidebarMenu.scss'
import { SidebarType } from 'src/types'

const SidebarMenuItems = ({
  items,
  index,
}: {
  items: SidebarType
  index: number
}) => {
  return (
    <ul className="navbar d-flex flex-column">
      <li
        className={`nav-item w-100 list-unstyled ${index ? 'child' : ''}`}
      >
        <a
          href={items.path}
          className="nav-link d-flex justify-content-between"
        >
          <div className="nav-item-content">
            <i className={items.icon} style={{fontSize: '1.25rem'}}/>
            <span className="ms-2">{items.title}</span>
          </div>
        </a>
      </li>
    </ul>
  )
}

export default SidebarMenuItems
