import './SidebarMenu.scss'
import logo1 from 'src/asset/images/logo-merc.jpg'
import ukFlag from 'src/asset/flag/uk.svg'
import vnFlag from 'src/asset/flag/vn.svg'
import { sidebarData } from './SidebarData'
import SidebarMenuItems from './SidebarMenuItems'
import SidebarMenuItemsCollapse from './SidebarMenuItemsCollapse'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { useEffect, useState } from 'react'
import { useLocalStorageState } from 'src/hooks'

const SidebarMenu = () => {
  const { t } = useTranslation('common')
  const languages = [
    {
      code: 'vn',
      name: t('common.vn'),
      flag: vnFlag,
    },
    {
      code: 'en',
      name: t('common.en'),
      flag: ukFlag,
    },
  ]

  const renderLangBtn = languages.find(
    (item) => item.code === i18next.resolvedLanguage
  )

  const [data, setData] = useState(sidebarData)

  const [storedSidebarData, setStoredSidebarData] = useLocalStorageState(
    'sidebarData',
    sidebarData
  )
  useEffect(() => {
    if (!storedSidebarData) {
      setStoredSidebarData(sidebarData)
    }
  }, [setStoredSidebarData])

  const handleSidebarItemClick = () => {
    const updatedData = data.map((item) => {
      if (item.child) {
        return {
          ...item,
          isActive: !item.isActive,
        }
      }
      return item
    })
    setData(updatedData)
    localStorage.setItem('sidebarData', JSON.stringify(updatedData))
  }

  return (
    <div className="sidebar min-vh-100 d-flex flex-column">
      <div className="sidebar-header d-flex align-items-center justify-content-center mb-3 py-2">
        <a href="/dashboard" className="nav-link">
          <img src={logo1} alt="LOGO" />
        </a>
      </div>
      <div className="sidebar-content">
        {storedSidebarData.map((items: any, index: number) =>
          items.child ? (
            <SidebarMenuItemsCollapse
              items={items}
              key={items.path}
              index={index}
              onClick={handleSidebarItemClick}
            />
          ) : (
            <SidebarMenuItems items={items} key={items.path} index={index} />
          )
        )}
      </div>
      <div className="sidebar-footer">
        <div className="dropdown">
          {renderLangBtn && (
            <button
              className="btn py-2 w-100 d-flex"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="button-content">
                <div className="button-icon">
                  <img src={renderLangBtn.flag} alt="lang" />
                </div>
                <div className="button-text ps-3">
                  <div className="text">{t('common.language')}</div>
                  <div className="selected-lang">{renderLangBtn.name}</div>
                </div>
              </div>
            </button>
          )}
          <ul className="dropdown-menu p-0 dropdown-menu-end">
            <li>
              <span className="dropdown-item-text selectLng">
                {t('common.selectLng')}
              </span>
            </li>
            {languages.map(({ code, name, flag }) => (
              <li key={code}>
                <a
                  className={
                    'dropdown-item d-flex justify-content-between align-items-center' +
                    (i18next.resolvedLanguage !== code
                      ? ' unselect'
                      : ' selected')
                  }
                  onClick={() => {
                    i18next.changeLanguage(code)
                  }}
                >
                  <div className="d-flex align-items-center">
                    <img src={flag} alt="flag" className="ms-2 me-3" />
                    <div>{name}</div>
                  </div>
                  <i
                    className="bi bi-check2 fs-5"
                    hidden={i18next.resolvedLanguage !== code ? true : false}
                  ></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SidebarMenu
