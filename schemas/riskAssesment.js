export default {
  name: 'riskAssesment',
  title: 'Risk Assesment',
  type: 'document',
  fields: [
    {
      name: 'active',
      title: 'is Active?',
      type: 'boolean',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'number',
      options: {
        list: [
          { title: 'Single Score', value: 1 },
          { title: 'Double Score', value: 2 },
          { title: 'Tripple Score', value: 3 },
        ],
      },
    },

    {
      name: 'chartDefaultText',
      title: 'Chart Default Text',
      type: 'text',
      description:
        'Text that will be displayed when no conditional card is available',
      hidden: ({ document }) => document.type !== 1,
    },
    {
      name: 'chartTitle1',
      title: 'Chart Title 1',
      type: 'string',
    },
    {
      name: 'chartTitle2',
      title: 'Chart Title 2',
      type: 'string',
      hidden: ({ document }) => document.type !== 2,
    },
    {
      name: 'chartTitle3',
      title: 'Chart Title 3',
      type: 'string',
      hidden: ({ document }) => document.type !== 3,
    },
    {
      name: 'chartContent1',
      title: 'Chart Content 1',
      type: 'string',
      hidden: ({ document }) => document.type === 1,
    },
    {
      name: 'chartContent2',
      title: 'Chart Content 2',
      type: 'string',
      hidden: ({ document }) => document.type !== 2,
    },
    {
      name: 'chartContent3',
      title: 'chart Content 3',
      type: 'string',
      hidden: ({ document }) => document.type !== 3,
    },
    // {
    //   name: 'revealAfter',
    //   title: 'Reveal after previous expended',
    //   type: 'boolean',
    // },
    // {
    //   name: 'collapsed',
    //   title: 'Collapsed',
    //   type: 'boolean',
    // },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'labels',
      title: 'Labels',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'riskAssesmentLabel' }] }],
    },
    {
      name: 'conditionedTagsExists',
      title: 'Risk Conditioned Tags Exists',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'conditionedTags' } }],
    },
    {
      name: 'conditionedTagsMissing',
      title: 'Risk Conditioned Tags Missing',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'conditionedTags' } }],
    },
  ],
};
