export default {
  name: 'recommedationPopup',
  title: 'IRecommedation Popups',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Contents',
      type: 'array',
      of: [
        {
          name: 'contentArray',
          title: 'Content Array',
          type: 'object',
          fields: [
            {
              name: 'content',
              title: 'content',
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
        },
      ],
    },
    {
      name: 'prevButton',
      title: 'Prev Button ',
      type: 'string',
    },
    {
      name: 'nextButton',
      title: 'Next Button ',
      type: 'string',
    },
    {
      name: 'closeButton',
      title: 'Close Button ',
      type: 'string',
    },
  ],
};
