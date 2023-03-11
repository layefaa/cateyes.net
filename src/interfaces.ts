export interface IMenuContext {
  isOpen: boolean,
  toggleMenu: () => void
}

export interface ISocialIcon {
  strokeColor: string,
  dir?: string
}


enum buttonType {
  button,
  tabs
}

export interface IButton {
  label: string,
  onClick?: () => void,
  type: 'button' | 'tab',
  active?: boolean
}

export interface ILink {
  name: string,
  route: string
}

export interface IInput {
  label: string,
  type?: string,
  placeholder?: string
}