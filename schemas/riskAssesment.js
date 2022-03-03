export default {
  name: 'riskAssesment',
  title: 'Risk Assesment',
  type: 'object',
  fields: [
    {
      name: 'active',
      title: 'is Active?',
      type: 'boolean',
    },
    {
      name: 'revealAfter',
      title: 'Reveal after previous expended',
      type: 'boolean',
    },
    {
      name: 'collapsed',
      title: 'Collapsed',
      type: 'boolean',
    },
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
  ],
};
