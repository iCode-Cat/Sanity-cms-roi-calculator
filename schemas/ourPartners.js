export default {
  name: 'ourPartner',
  title: 'Our Partners',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'name',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'logo',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
  ],
};
