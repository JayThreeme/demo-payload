import { Media } from '@/payload-types'
import { StaticImageData } from 'next/image'

export interface YourBlockType {
  media: string | Media
  staticImage?: StaticImageData
  text: string
  id?: string | null
  blockName?: string | null
  blockType: 'YourBlockType'
  content?: {
    root: {
      type: string
      children: {
        type: string
        version: number
        [k: string]: unknown
      }[]
      direction: ('ltr' | 'rtl') | null
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
      indent: number
      version: number
    }
    [k: string]: unknown
  } | null
}
