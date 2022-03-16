export default {
  name: 'riskAssesmentLabel',
  title: 'Breakdown Labels',
  type: 'document',
  fields: [
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
    },
    {
      name: 'inCardTitle',
      title: 'In Card Title',
      type: 'string',
    },
    {
      name: 'inCardSubtitle',
      title: 'In Card Subtitle',
      type: 'string',
    },
    {
      name: 'mainCardTitle',
      title: 'Main Card Title',
      type: 'string',
    },
    {
      name: 'mainCardContent',
      title: 'Main Card Content',
      type: 'text',
    },
    {
      name: 'inCardLogo',
      title: 'In Card Logo',
      type: 'string',
    },
    {
      name: 'tagFound',
      title: 'Conditioned Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'conditionedTags' } }],
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
};
