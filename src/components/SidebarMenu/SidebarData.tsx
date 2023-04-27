import { SidebarType } from 'src/types'

export const sidebarData: SidebarType[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: 'bi bi-clipboard-data',
    disable: false,
  },
  {
    title: 'Vehicle',
    path: '/vehicle-mannager',
    icon: 'bi bi-car-front-fill',
    disable: false,
    child: [
      {
        title: 'Vehicle Manager',
        path: '/vehicle-mannager',
        icon: 'bi bi-car-front-fill',
        disable: true,
      },
    ],
  },
]
