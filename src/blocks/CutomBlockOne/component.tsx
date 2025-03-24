import React from 'react'
import type { YourBlockType as YourBlockProps } from './type'

import RichText from '@/components/RichText'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'

export const YourBlockName: React.FC<YourBlockProps> = (props) => {
  const { content, media, staticImage } = props

  return (
    <div className="container flex flex-col gap-8 md:flex-col justify-center items-center">
      <div className="rounded md:p-4 m-0 flex flex-col gap-8 md:flex-row justify-between items-center">
        <div className="flex items-center min-w-[250px]">
          {content && (
            <RichText
              className="m-0 flex flex-col gap-0 justify-items-center items-center"
              data={content}
              enableGutter={false}
            />
          )}
        </div>
      </div>
      <div className="">
        {(media || staticImage) && (
          <Media
            imgClassName={cn('rounded border object-cover max-h-[60vh]')}
            resource={media}
            src={staticImage}
          />
        )}
      </div>
    </div>
  )
}
