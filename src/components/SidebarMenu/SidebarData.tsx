import { SidebarType } from 'src/types'

export const sidebarData: SidebarType[] = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: 'bi bi-clipboard-data',
    disable: false,
  },
  {
    title: 'vehicle',
    path: '/vehicle',
    icon: 'bi bi-car-front-fill',
    disable: false,
    child: [
      {
        title: 'vehicle-manager',
        path: '/vehicle-manager',
        icon: 'bi bi-truck',
        disable: true,
      },
    ],
  },
]
