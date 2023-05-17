export type SidebarType = {
  path?: string
  child?: SidebarType[]
  title: string
  icon?: string
  disable: boolean
  isActive?: boolean
}
