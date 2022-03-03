export default {
  name: 'submission',
  title: 'Submissions ',
  type: 'document',
  fields: [
    {
      name: 'uuid',
      title: 'uuid',
      type: 'string',
    },
    {
      name: 'title',
      title: 'title',
      type: 'string',
    },

    {
      name: 'image',
      title: 'image',
      type: 'image',
    },
    {
      name: 'content',
      title: 'Content',
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
      name: 'card',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'document',
          name: 'card',
          title: 'cards',
          fields: [
            {
              name: 'image',
              title: 'image',
              type: 'image',
            },
            {
              name: 'title',
              title: 'title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'description',
              type: 'text',
            },
            {
              name: 'linkText',
              title: 'Link Text',
              type: 'string',
            },
            {
              name: 'link',
              title: 'link',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
};
