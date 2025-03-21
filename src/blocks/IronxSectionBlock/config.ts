// File: payload/fields/blocks/BenefitBlock.ts
import { Block } from 'payload'

export const BenefitBlock: Block = {
  slug: 'benefitBlock',
  labels: {
    singular: 'Benefit Block',
    plural: 'Benefit Blocks',
  },
  fields: [
    {
      name: 'tagline',
      label: 'Tagline',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'features',
      label: 'Features',
      type: 'array',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'title',
          label: 'Feature Title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Feature Description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'icons',
          label: 'Feature Icons',
          type: 'array',
          minRows: 1,
          maxRows: 3,
          fields: [
            {
              name: 'icon',
              label: 'Icon',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}

export default BenefitBlock
