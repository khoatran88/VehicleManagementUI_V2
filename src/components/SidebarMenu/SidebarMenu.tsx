import './SidebarMenu.scss'
import logo1 from 'src/asset/images/logo-merc.jpg'
import ukFlag from 'src/asset/flag/uk.svg'
import vnFlag from 'src/asset/flag/vn.svg'
import { sidebarData } from './SidebarData'
import SidebarMenuItems from './SidebarMenuItems'
import SidebarMenuItemsCollapse from './SidebarMenuItemsCollapse'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { useEffect, useRef, useState } from 'react'
import { useLocalStorageState } from 'src/hooks'

const SidebarMenu = () => {
  const { t } = useTranslation(['sidebar', 'common'])
  const languages = [
    {
      code: 'vi',
      name: t('common:common.vn'),
      flag: vnFlag,
    },
    {
      code: 'en',
      name: t('common:common.en'),
      flag: ukFlag,
    },
  ]

  const [searchText, setSearchText] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)
  const languageCode = localStorage.getItem('i18nextLng')

  const renderLangBtn = languages.find((item) => item.code === languageCode)
  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchText(event.target.value)
  }

  const [storedSidebarData, setStoredSidebarData] = useLocalStorageState(
    'sidebarData',
    []
  )

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    if (storedSidebarData.length === 0) {
      const translatedSidebarData = translateSidebar(sidebarData)
      setStoredSidebarData(translatedSidebarData)
    }
  }, [])

  const translateSidebar = (sidebar: any) => {
    return sidebar.map((item: any) => {
      if (item.child) {
        return {
          ...item,
          title: t(item.title),
          child: translateSidebar(item.child),
        }
      }
      return {
        ...item,
        title: t(item.title),
      }
    })
  }

  const handleSidebarItemClick = () => {
    const updatedData = storedSidebarData.map((item: any) => {
      if (item.child) {
        return {
          ...item,
          isActive: !item.isActive,
        }
      }
      return item
    })
    setStoredSidebarData(updatedData)
  }

  const filteredData = storedSidebarData.filter((item: any) =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  )

  const onChangeLang = (code: string) => {
    i18next.changeLanguage(code)
    const translatedSidebarData = translateSidebar(sidebarData)
    setStoredSidebarData(translatedSidebarData)
  }

  return (
    <div className="sidebar min-vh-100 d-flex flex-column">
      <div className="sidebar-header d-flex align-items-center justify-content-center mb-3 py-2">
        <a href="/dashboard" className="nav-link">
          <img src={logo1} alt="LOGO" />
        </a>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="input-group my-3 search-box">
          <input
            type="text"
            className="form-control shadow-none"
            placeholder={t('common:common.search') ?? ''}
            value={searchText}
            onChange={handleSearchInputChange}
            ref={searchInputRef}
          />
          <span className="input-group-text">
            <i className="bi bi-search"></i>
          </span>
        </div>
      </div>
      <div className="sidebar-content">
        {filteredData.map((items: any, index: number) =>
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
                  <div className="text">{t('common:common.language')}</div>
                  <div className="selected-lang">{renderLangBtn.name}</div>
                </div>
              </div>
            </button>
          )}
          <ul className="dropdown-menu p-0 dropdown-menu-end">
            <li>
              <span className="dropdown-item-text selectLng">
                {t('common:common.selectLng')}
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
                    onChangeLang(code)
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
