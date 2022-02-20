export default {
  name: 'inlineCard',
  title: 'Inline Card',
  type: 'object',
  fields: [
    {
      name: 'inCardTitle',
      title: 'Card Section Title',
      type: 'string',
    },
    {
      name: 'inCardSubtitle',
      title: 'Card Section Subtitle',
      type: 'text',
    },
    {
      name: 'mainCardTitle',
      title: 'Main Card Title',
      type: 'string',
    },
    {
      name: 'mainCardContent',
      title: 'Main Card Content',
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
      name: 'inCardLogo',
      title: 'Main Card Title',
      type: 'image',
    },
  ],
};
