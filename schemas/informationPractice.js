export default {
  name: 'informationPractice',
  title: 'Information Practices',
  type: 'object',
  initialValue: {
    tabMenuMod: 1,
    currency: '$',
    disclaimer: false,
    sectionGrade: true,
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
    },
    {
      name: 'section1',
      title: 'Section 1',
      type: 'object',
      fields: [
        {
          name: 'sectionGrade',
          title: 'Section Grade',
          type: 'boolean',
        },
        {
          name: 'active',
          title: 'Active',
          type: 'boolean',
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'image',
          title: 'Image Link',
          type: 'string',
        },
        {
          name: 'list',
          title: 'List',
          type: 'array',
          of: [
            {
              type: 'object',
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
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'section2',
      title: 'Section 2',
      type: 'object',
      fields: [
        {
          name: 'sectionGrade',
          title: 'Section Grade',
          type: 'boolean',
        },
        {
          name: 'active',
          title: 'Active',
          type: 'boolean',
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'image',
          title: 'Image Link',
          type: 'string',
        },
        {
          name: 'list',
          title: 'List',
          type: 'array',
          of: [
            {
              type: 'object',
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
              ],
            },
          ],
        },
      ],
    },
  ],
};
