import { SidebarType } from 'src/types'
import { Translation } from 'react-i18next'

export const sidebarData: SidebarType[] = [
  {
    // title: 'Dashboard',
    title: (
      <Translation ns="sidebar">
        {(t) => <span>{t('dashboard')}</span>}
      </Translation>
    ),
    path: '/dashboard',
    icon: 'bi bi-clipboard-data',
    disable: false,
  },
  {
    title: (
      <Translation ns="sidebar">
        {(t) => <span>{t('vehicle')}</span>}
      </Translation>
    ),
    path: '/vehicle',
    icon: 'bi bi-car-front-fill',
    disable: false,
    child: [
      {
        title: (
          <Translation ns="sidebar">
            {(t) => <span>{t('vehicle-manager')}</span>}
          </Translation>
        ),
        path: '/vehicle-manager',
        icon: 'bi bi-truck',
        disable: true,
      },
    ],
  },
]
