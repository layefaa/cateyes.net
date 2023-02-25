export interface IMenuContext {
  isOpen: boolean,
  toggleMenu: () => void
}

export interface ISocialIcon {
  strokeColor: string,
  dir?:string
}

export interface IButton {
  label: string,
  onClick?: () => void
}

export interface ILink {
  name: string,
  route: string
}