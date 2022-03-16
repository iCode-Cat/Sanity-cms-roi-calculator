export default {
  name: 'option',
  title: 'Options',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'text',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Answer for options',
    },
    {
      name: 'icon',
      title: 'icon',
      type: 'image',
      initialValue: 'No',
    },
    {
      name: 'followUp',
      title: 'Follow up question?',
      type: 'boolean',
      initialValue: false,
    },
    // {
    //   name: 'callQuestion',
    //   title: 'Call Question Number',
    //   type: 'number',
    //   initialValue: 0,
    //   // hidden: ({ document }) => !document.followUp,
    // },

    // {
    //   name: 'followupInformation',
    //   title: 'It has follow up information?',
    //   type: 'boolean',
    //   initialValue: false,
    // },
    {
      name: 'followUpQuestion',
      title: 'Choose follow up question / information',
      type: 'reference',
      to: [{ type: 'question' }],
      hidden: (document) => document.followupInformation === false,
      // hidden: ({ document }) => !document?.followupInformation,
    },
    {
      name: 'conditionList',
      title: 'Condinited Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'conditionedTags' } }],
    },
    // {
    //   name: 'callRecommendation',
    //   title: 'Call recommendations on answer',
    //   type: 'array',
    //   of: [{ type: 'reference', to: [{ type: 'recommendationCard' }] }],
    // },
    // {
    //   name: 'callShouldDo',
    //   title: 'Call "What should do" on answer',
    //   type: 'array',
    //   of: [{ type: 'reference', to: [{ type: 'shouldDo' }] }],
    // },
    // {
    //   name: 'callWorryAbout',
    //   title: 'Call "Worry about" on answer',
    //   type: 'array',
    //   of: [{ type: 'reference', to: [{ type: 'worryAbout' }] }],
    // },
  ],
};
