export default {
  name: 'step',
  title: 'Steps',
  type: 'object',
  fields: [
    {
      name: 'index',
      title: 'Index number',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'fields',
      title: 'Questions',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'question' }] }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'relatedQuestions',
      title: 'Related Questions',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'relatedQuestion' }] }],
    },
  ],
  preview: {
    select: {
      title: 'index',
    },
  },
};
