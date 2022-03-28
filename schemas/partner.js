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
      name: 'hero',
      title: 'Page Details',
      type: 'hero',
    },
    // {
    //   name: 'partnerId',
    //   title: 'Partner ID',
    //   type: 'string',
    //   validation: (Rule) => Rule.required(),
    // },
    // {
    //   name: 'uuid',
    //   title: 'uuid',
    //   type: 'string',
    //   validation: (Rule) => Rule.required(),
    // },
    // {
    //   name: 'singleFLow',
    //   title: 'Single flow?',
    //   type: 'boolean',
    //   description: 'When it is true, questions will be asked in the same flow.',
    // },
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
      name: 'messageSubmit',
      title: 'Message After Quiz',
      type: 'string',
    },
    {
      name: 'ctaButton',
      title: 'Calculate Button Text',
      type: 'string',
      description: 'Calculate button text for questions',
    },
    // {
    //   name: 'singleFlowTitle',
    //   title: 'Single Flow Title',
    //   type: 'string',
    //   validation: (Rule) => Rule.required(),
    //   hidden: ({ document }) => document?.singleFlow === false,
    // },
    // {
    //   name: 'numberOfSteps',
    //   title: 'Number of steps',
    //   type: 'number',
    //   description: 'Number of the steps, up to 3 - for single flow should be 1',
    //   validation: (Rule) => [
    //     Rule.max(3).warning('Number of steps cannot be more than 3'),
    //     (Rule) => Rule.required(),
    //   ],
    // },
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
      name: 'questionSettings',
      title: 'Question Details',
      type: 'questionDetails',
    },
    {
      name: 'steps',
      title: 'Questions',
      type: 'array',
      of: [{ type: 'step' }],
    },
    {
      name: 'stats',
      title: 'Potential Impact',
      type: 'stat',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'riskAssesment',
      title: 'Risk Assesment',
      type: 'riskAssesment',
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
      name: 'whyUsSection',
      title: 'Why Us Section',
      type: 'whyUs',
    },
    {
      name: 'ourPartners',
      title: 'Our Partners',
      type: 'document',
      fields: [
        {
          name: 'isActive',
          title: 'Is Active?',
          type: 'boolean',
        },
        {
          name: 'Title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'logos',
          title: 'Partner Logos',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'ourPartner' }] }],
        },
        {
          name: 'ourSupporters',
          title: 'Our Supporters Layout',
          type: 'reference',
          to: [{ type: 'ourSupporters' }],
        },
      ],
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
