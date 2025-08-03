export type IconStyle = 'outline' | 'solid' | 'mini' | 'micro'

export interface IconData {
  name: string
  svg: {
    outline: string
    solid: string
    mini: string
    micro: string
  }
}

export interface IconInfo {
  size: string
  stroke: string
}
