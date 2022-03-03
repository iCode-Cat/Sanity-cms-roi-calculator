export default {
  name: 'inCard',
  title: 'In Cards',
  type: 'document',
  fields: [
    {
      name: 'inCardTitle',
      title: 'In Card Title',
      type: 'string',
    },
    {
      name: 'inCardSubtitle',
      title: 'In Card Subtitle',
      type: 'string',
    },
    {
      name: 'inCardLogo',
      title: 'In Card Logo',
      type: 'image',
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
  ],
};
