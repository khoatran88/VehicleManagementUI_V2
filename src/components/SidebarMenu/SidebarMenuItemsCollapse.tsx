import { useEffect, useState } from 'react'
import './SidebarMenu.scss'
import { SidebarType } from 'src/types'
import { removeSlash } from 'src/utils'
import SidebarMenuItems from './SidebarMenuItems'

const SidebarMenuItemsCollapse = ({
  items,
  index,
  onClick,
}: {
  items: SidebarType
  index: number
  onClick: (path: string) => void
}) => {
  const [show, setShow] = useState(items.isActive || false)

  const handleCollapseToggle = () => {
    setShow(!show)
    if (items.path) {
      onClick(items.path)
    }
  }

  useEffect(() => {
    if (items.child && items.isActive) {
      setShow(items.isActive)
    }
  }, [show])

  return (
    <ul className="navbar d-flex flex-column">
      <li className="nav-item w-100 list-unstyled">
        <div
          role="presentation"
          className="nav-link d-flex justify-content-between"
          data-bs-toggle="collapse"
          data-bs-target={`#${removeSlash(items.path!)}`}
          onClick={handleCollapseToggle}
        >
          <div className="nav-item-content">
            <i className={items.icon} style={{ fontSize: '1.25rem' }} />
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
      <div
        className={`collapse w-100 ${show ? 'show' : ''}`}
        id={`${removeSlash(items.path!)}`}
      >
        {items.child?.map((child) =>
          child.child ? (
            <SidebarMenuItemsCollapse
              items={child}
              key={child.path}
              index={index + 1}
              onClick={onClick}
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
