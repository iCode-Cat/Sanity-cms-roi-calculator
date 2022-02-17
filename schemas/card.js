export default {
  name: 'card',
  title: 'Cards',
  type: 'document',
  fields: [
    {
      name: 'cardId',
      title: 'Card Id',
      type: 'number',
    },
    {
      name: 'section',
      title: 'Section',
      type: 'string',
      options: {
        list: [
          { title: 'Best Practice (a)', value: 'bestpracticeA' },
          { title: 'Recommendations', value: 'recommendations' },
          { title: 'Why Coggni?', value: 'whyCoggni' },
        ],
      },
    },
    {
      name: 'title',
      title: 'title',
      type: 'string',
    },
    {
      name: 'details',
      title: 'details',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'richText',
              title: 'Rich Text',
              description: `Rich Editor`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: 'image',
      title: 'image',
      type: 'image',
    },
    {
      name: 'order',
      title: 'order',
      type: 'number',
      options: {
        list: [
          { title: '1', value: 1 },
          { title: '2', value: 2 },
          { title: '3', value: 3 },
          { title: '4', value: 4 },
          { title: '5', value: 5 },
          { title: '6', value: 6 },
          { title: '7', value: 7 },
          { title: '8', value: 8 },
          { title: '9', value: 9 },
        ],
      },
    },
    {
      name: 'conditionedTagsExists',
      title: 'Conditioned Tags Exists',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'conditionedTags' } }],
    },
    {
      name: 'conditionedTagsMissing',
      title: 'Conditioned Tags Missing',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'conditionedTags' } }],
    },
    // conditionedTags
  ],
};