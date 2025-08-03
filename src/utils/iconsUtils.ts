import type { IconStyle, IconInfo } from '@/types'

export const getIconInfo = (style: IconStyle): IconInfo => {
  switch (style) {
    case 'outline':
      return { size: '24×24', stroke: '1.5px stroke' }
    case 'solid':
      return { size: '24×24', stroke: 'filled' }
    case 'mini':
      return { size: '20×20', stroke: 'filled' }
    case 'micro':
      return { size: '16×16', stroke: 'filled' }
  }
}
