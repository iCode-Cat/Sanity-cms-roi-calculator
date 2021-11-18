export default {
  name: 'partner',
  title: 'Partner',
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
      name: 'singleFlow',
      title: 'Single flow?',
      type: 'boolean',
      description: 'When it is true, questions will be asked in the same flow.',
      initialValue: false,
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
      of: [{ type: 'step' }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'partnerName',
    },
  },
};
