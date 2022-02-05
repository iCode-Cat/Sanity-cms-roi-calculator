export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sub_title',
      title: 'Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'button_text',
      title: 'Button text',
      type: 'string',
      description: 'Button text of the hero.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Partner Logo',
      type: 'string',
      description: "URL of the partner logo's.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'fields',
      title: 'Hero Question',
      type: 'reference',
      to: [{ type: 'question' }],
    },
  ],
  preview: {
    select: {
      title: 'partnerName',
    },
  },
};
