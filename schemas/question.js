export default {
  name: 'question',
  title: 'Questions',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'text',
      title: 'Question text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    // {
    //   name: 'relatedQuestion',
    //   title: 'Is it related question to another?',
    //   type: 'boolean',
    // },
    {
      name: 'placeholder',
      title: 'Placeholder',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'stateName',
      title: 'Question Id',
      type: 'string',
      validation: (Rule) => [
        Rule.required(),
        Rule.custom((state) => {
          if (state.includes(' ')) {
            return 'State name cannot contain space';
          }
          return true;
        }),
      ],
    },
    {
      name: 'questionType',
      title: 'Question Type',
      type: 'string',
      options: {
        list: [
          { title: 'Numeric', value: 'numeric' },
          { title: 'Text', value: 'text' },
          { title: 'Single Select', value: 'boolean' },
          { title: 'Multi Select', value: 'booleanMulti' },
          { title: 'Dropdown', value: 'dropdown' },
          { title: 'Information', value: 'context' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'infoImage',
      title: 'Info Image',
      type: 'image',
      hidden: ({ document }) => document?.questionType !== 'context',
    },
    {
      name: 'automateNext',
      title: 'Automate Next',
      type: 'boolean',
      hidden: ({ document }) => document?.questionType !== 'boolean',
    },
    {
      name: 'validation',
      title: 'Validation',
      type: 'string',
      options: {
        list: [
          { title: 'Email', value: 'email' },
          { title: 'Text', value: 'text' },
        ],
      },
      hidden: ({ document }) => document?.questionType !== 'text',
    },
    {
      name: 'callQuestion',
      title: 'Call Question',
      type: 'boolean',
      hidden: ({ document }) => document?.questionType !== 'boolean',
    },
    {
      name: 'options',
      title: 'Possible Answers',
      type: 'array',
      of: [{ type: 'option' }],
      hidden: ({ document }) =>
        document?.questionType !== 'boolean' &&
        document?.questionType !== 'booleanMulti' &&
        document?.questionType !== 'dropdown',
    },
    {
      name: 'callOnCondition',
      title: 'Only Call On Condition?',
      type: 'boolean',
    },
    {
      name: 'conditionedTag',
      title: 'Call the question after answer if the tags meets.',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'conditionedTags' } }],
      hidden: ({ document }) => document.callOnCondition !== true,
    },
    // {
    //   name: 'conditionList',
    //   title: 'Condinited Tags',
    //   type: 'array',
    //   of: [{ type: 'reference', to: { type: 'conditionedTags' } }],
    //   hidden: ({ document }) => document?.callOnCondition !== true,
    // },
    {
      name: 'skip',
      title: 'Can user skip this question?',
      type: 'boolean',
    },
    {
      name: 'numericCondition',
      title: 'Add Condition by amount',
      type: 'array',
      hidden: ({ document }) => document.questionType !== 'numeric',
      of: [
        {
          type: 'document',
          name: 'question',
          title: 'Questions',
          fields: [
            {
              name: 'minAmount',
              title: 'Min amount',
              type: 'number',
            },
            {
              name: 'maxAmount',
              title: 'Max amount',
              type: 'number',
            },
            {
              name: 'conditionedTag',
              title: 'Select tags',
              type: 'array',
              of: [{ type: 'reference', to: { type: 'conditionedTags' } }],
            },
          ],
        },
      ],
    },
  ],
  initialValue: {
    relatedQuestion: false,
  },
  preview: {
    select: {
      title: 'text',
    },
  },
};
