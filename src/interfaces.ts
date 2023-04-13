export interface IMenuContext {
  isOpen: boolean,
  toggleMenu: () => void
}

export interface ISocialIcon {
  strokeColor: string,
  dir?: string
}

export interface IButton {
  label: string,
  onClick?: () => void,
  type: 'button' | 'tab' | 'submit',
  active?: boolean
}

export interface ILink {
  name: string,
  route: string,
  clickEvent?: ()=> void
}

export interface IInput {
  label: string,
  type?: string,
  placeholder?: string
}