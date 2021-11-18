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
      name: 'question',
      title: 'Questions',
      type: 'array',
      of: [{ type: 'question' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'button',
      title: 'Button text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
