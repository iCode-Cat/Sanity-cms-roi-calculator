export default {
  name: 'option',
  title: 'Options',
  type: 'document',
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
      type: 'string',
      initialValue: 'No',
      description: 'Icon shortland from google material icons',
    },
    {
      name: 'callQuestion',
      title: 'Call Question Number',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'followUp',
      title: 'Follow up question?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'followupInformation',
      title: 'It has follow up information?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'information',
      title: 'Choose follow up information',
      type: 'reference',
      to: [{ type: 'information' }],
      // hidden: ({ document }) => !document?.followupInformation,
    },
    {
      name: 'callRecommendation',
      title: 'Call recommendations on answer',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'recommendationCard' }] }],
    },
    {
      name: 'callShouldDo',
      title: 'Call "What should do" on answer',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'shouldDo' }] }],
    },
    {
      name: 'callWorryAbout',
      title: 'Call "Worry about" on answer',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'worryAbout' }] }],
    },
  ],
};
