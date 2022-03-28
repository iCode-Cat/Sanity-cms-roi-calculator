export default {
  name: 'tabMenuBreakdown',
  title: 'Impact Section Details',
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
    // {
    //   name: 'subTitle',
    //   title: 'Sub Title',
    //   type: 'string',
    // },
    // {
    //   name: 'name',
    //   title: 'Name',
    //   type: 'string',
    // },
    {
      name: 'mainTitle',
      title: 'Main Title',
      type: 'string',
    },
    {
      name: 'subTitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'circleTitle',
      title: 'Circle Title',
      type: 'string',
    },
    {
      name: 'labelTitle1',
      title: 'Label Title 1',
      type: 'string',
    },
    {
      name: 'labelTitle2',
      title: 'Label Title 2',
      type: 'string',
    },
    // {
    //   name: 'mainTitle2',
    //   title: 'Main Title 2',
    //   type: 'string',
    // },
    // {
    //   name: 'compareTitle',
    //   title: 'Compare Title',
    //   type: 'string',
    // },
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
      title: 'Label',
      name: 'label',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'riskAssesmentLabel' } }],
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
  ],
};
