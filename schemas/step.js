export default {
  name: 'step',
  title: 'Steps',
  type: 'document',
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
      name: 'button',
      title: 'Button text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'index',
    },
  },
};
