import { useState } from 'react'
import './SidebarMenu.scss'
import { SidebarType } from 'src/types'
import { removeSpace } from 'src/utils'
import SidebarMenuItems from './SidebarMenuItems'

const SidebarMenuItemsCollapse = ({
  items,
  index,
}: {
  items: SidebarType
  index: number
}) => {
  const [show, setShow] = useState(false)
  return (
    <ul className="navbar d-flex flex-column">
      <li className="nav-item w-100 list-unstyled">
        <div
          role="presentation"
          className="nav-link d-flex justify-content-between"
          data-bs-toggle="collapse"
          data-bs-target={`#${removeSpace(items.title!)}`}
          onClick={() => setShow(!show)}
        >
          <div className="nav-item-content">
            <i className="bi bi-clipboard-data" />
            <span className="ms-2">{items.title}</span>
          </div>
          <div className="dropdown-icon">
            {show ? (
              <i className="bi bi-chevron-down" />
            ) : (
              <i className="bi bi-chevron-left" />
            )}
          </div>
        </div>
      </li>
      <div className="collapse w-100" id={`${removeSpace(items.title!)}`}>
        {items.child?.map((child) =>
          child.child ? (
            <SidebarMenuItemsCollapse
              items={child}
              key={child.path}
              index={index + 1}
            />
          ) : (
            <SidebarMenuItems
              items={child}
              key={child.path}
              index={index + 1}
            />
          )
        )}
      </div>
    </ul>
  )
}

export default SidebarMenuItemsCollapse
