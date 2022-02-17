export default {
  name: 'partner',
  title: 'Pages',
  type: 'document',
  fields: [
    {
      name: 'partnerName',
      title: 'Partner Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'partnerId',
      title: 'Partner ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'uuid',
      title: 'uuid',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'singleFLow',
      title: 'Single flow?',
      type: 'boolean',
      description: 'When it is true, questions will be asked in the same flow.',
    },
    {
      name: 'nextButton',
      title: 'Next Button Text',
      type: 'string',
      description: 'Next button text for questions',
    },
    {
      name: 'skipButton',
      title: 'Skip Button Text',
      type: 'string',
    },
    {
      name: 'skipAllButton',
      title: 'Skip All Button Text',
      type: 'string',
    },
    {
      name: 'ctaButton',
      title: 'Calculate Button Text',
      type: 'string',
      description: 'Calculate button text for questions',
    },
    {
      name: 'singleFlowTitle',
      title: 'Single Flow Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      hidden: ({ document }) => document?.singleFlow === false,
    },
    {
      name: 'numberOfSteps',
      title: 'Number of steps',
      type: 'number',
      description: 'Number of the steps, up to 3',
      validation: (Rule) => [
        Rule.max(3).warning('Number of steps cannot be more than 3'),
        (Rule) => Rule.required(),
      ],
    },
    {
      name: 'sendTo',
      title: 'Email for monitoring service.',
      type: 'string',
      validation: (Rule) => [
        Rule.required(),
        (Rule) =>
          Rule.custom((name) => {
            if (!name.includes('@')) return 'Please enter an email address.';
            return true;
          }),
      ],
    },
    {
      name: 'hero',
      title: 'Hero Version',
      type: 'hero',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'terms',
      title: 'Terms',
      type: 'term',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'steps',
      title: 'Steps',
      type: 'array',
      description: 'Note: Single flow only reads question of 1.step',
      of: [{ type: 'step' }],
    },
    {
      name: 'stats',
      title: 'Breakdown Settings',
      type: 'stat',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'informationPractices',
      title: 'Information Practices',
      type: 'informationPractice',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'recommendation',
      title: 'Recommendation',
      type: 'recommendation',
    },
    {
      name: 'riskAssesment',
      title: 'Risk Assesment',
      type: 'riskAssesment',
    },
    {
      name: 'connection',
      title: 'info & submit',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'submitSection' } }],
    },
    // {
    //   name: 'lastSection',
    //   title: 'Last Section',
    //   type: 'object',
    //   fields: [
    //     {
    //       name: 'buttonText',
    //       title: 'Button Text',
    //       type: 'string',
    //     },
    //     {
    //       name: 'href',
    //       title: 'Href',
    //       type: 'string',
    //     },
    //   ],
    // },
  ],
  preview: {
    select: {
      title: 'partnerName',
    },
  },
};
