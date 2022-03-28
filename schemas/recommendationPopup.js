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
              type: 'array',
              of: [{ type: 'block' }],
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
            },
            {
              name: 'activeColor',
              title: 'Active Color of Text',
              type: 'colorPicker',
            },
            {
              name: 'activeColorBg',
              title: 'Active Color of BG',
              type: 'colorPicker',
            },
            {
              name: 'passiveColor',
              title: 'Passive Color of Text',
              type: 'colorPicker',
            },
            {
              name: 'passiveColorBg',
              title: 'Passive Color of BG',
              type: 'colorPicker',
            },
            {
              name: 'stepName',
              title: 'Step Name',
              type: 'string',
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
      name: 'endButton',
      title: 'End Button ',
      type: 'string',
    },
  ],
};
