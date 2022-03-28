export default {
  name: 'ourSupporters',
  title: 'Our Supporters',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'logo',
      type: 'image',
    },
    {
      name: 'listItems',
      title: 'List Items',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
