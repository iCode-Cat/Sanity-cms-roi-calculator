export default {
  name: 'sectionGradeWorryAbout',
  title: 'Worry About Section Grade',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'string',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'string',
      options: {
        list: [
          { title: '0', value: '0' },
          { title: '1', value: '1' },
          { title: '2', value: '2' },
          { title: '3', value: '3' },
          { title: '4', value: '4' },
          { title: '5', value: '5' },
        ],
      },
    },
  ],
};
