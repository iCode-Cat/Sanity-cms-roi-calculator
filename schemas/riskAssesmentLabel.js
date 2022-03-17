export default {
  name: 'riskAssesmentLabel',
  title: 'Breakdown Labels',
  type: 'document',
  fields: [
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          { title: 'Potential Impact', value: 'impact' },
          { title: 'Risk Assessment', value: 'risk' },
        ],
        layout: 'radio',
      },
    },
    {
      title: 'Color',
      name: 'color',
      type: 'string',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'string',
      hidden: ({ document }) => document.type === 'impact',
    },
    {
      name: 'inCard',
      title: 'In Card',
      type: 'boolean',
    },
    {
      name: 'linkTitle',
      title: 'Link Title',
      type: 'string',
      hidden: ({ document }) => !document.inCard,
    },
    {
      name: 'inCardTitle',
      title: 'In Card Title',
      type: 'string',
      hidden: ({ document }) => !document.inCard,
    },
    {
      name: 'inCardSubtitle',
      title: 'In Card Subtitle',
      type: 'string',
      hidden: ({ document }) => !document.inCard,
    },
    {
      name: 'mainCardTitle',
      title: 'Main Card Title',
      type: 'string',
      hidden: ({ document }) => !document.inCard,
    },
    {
      name: 'mainCardContent',
      title: 'Main Card Content',
      type: 'text',
      hidden: ({ document }) => !document.inCard,
    },
    {
      name: 'inCardLogo',
      title: 'In Card Logo',
      type: 'string',
      hidden: ({ document }) => !document.inCard,
    },
    {
      name: 'tagFound',
      title: 'Conditioned Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'conditionedTags' } }],
    },
    {
      title: 'Formula Variable',
      name: 'formulaVariable',
      type: 'number',
      hidden: ({ document }) => document.type !== 'impact',
    },
    {
      title: 'Tooltip Text',
      name: 'tooltipText',
      type: 'object',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Content',
          name: 'content',
          type: 'string',
        },
      ],
      hidden: ({ document }) => document.type !== 'impact',
    },
    {
      name: 'change',
      title: 'Change',
      type: 'number',
    },
    {
      name: 'defaultValue',
      title: 'Default Value',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'type',
    },
  },
};
