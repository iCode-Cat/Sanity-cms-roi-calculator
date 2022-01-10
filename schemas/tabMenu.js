export default {
  name: 'tabMenuBreakdown',
  title: 'Tab Menu Breakdown',
  type: 'document',
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'key',
      title: 'Key',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'mainTitle',
      title: 'Main Title',
      type: 'string',
    },
    {
      name: 'mainTitle2',
      title: 'Main Title 2',
      type: 'string',
    },
    {
      name: 'compareTitle',
      title: 'Compare Title',
      type: 'string',
    },
    {
      name: 'tooltip',
      title: 'Tooltip',
      type: 'boolean',
    },
    {
      name: 'costs',
      title: 'Costs',
      type: 'array',
      of: [
        {
          title: 'Costs',
          type: 'object',
          fields: [
            {
              title: 'Your Cost',
              name: 'yourCost',
              type: 'object',
              initialValue: {
                formulaVariable: 3474,
                title: 'The total potential impact cost',
              },
              fields: [
                {
                  title: 'Title',
                  name: 'title',
                  type: 'string',
                },
                {
                  title: 'Formula Variable',
                  name: 'formulaVariable',
                  type: 'number',
                },
              ],
            },
            {
              title: 'Cognni Cost',
              name: 'cognniCost',
              type: 'object',
              initialValue: {
                formulaVariable: 2268,
                title: 'You can save with Cognni',
              },
              fields: [
                {
                  title: 'Title',
                  name: 'title',
                  type: 'string',
                },
                {
                  title: 'Formula Variable',
                  name: 'formulaVariable',
                  type: 'number',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'labels',
      title: 'Labels',
      type: 'array',
      of: [
        {
          title: 'Label',
          name: 'label',
          type: 'object',
          initialValue: {
            formulaVariable: 3474,
            color: '#2196F3',
          },
          fields: [
            {
              title: 'Color',
              name: 'color',
              type: 'string',
            },
            {
              title: 'Name',
              name: 'name',
              type: 'string',
            },
            {
              title: 'Formula Variable',
              name: 'formulaVariable',
              type: 'number',
            },
            {
              title: 'Tooltip Text',
              name: 'tooltipText',
              type: 'object',
              fields: [
                {
                  title: 'Title',
                  name: 'title',
                  type: 'string',
                },
                {
                  title: 'Content',
                  name: 'content',
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
