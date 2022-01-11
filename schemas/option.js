export default {
  name: 'option',
  title: 'Options',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'text',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Answer for options',
    },
    {
      name: 'icon',
      title: 'icon',
      type: 'string',
      initialValue: 'No',
      description: 'Icon shortland from google material icons',
    },
    {
      name: 'callQuestion',
      title: 'Call Question Number',
      type: 'number',
    },
  ],
};
