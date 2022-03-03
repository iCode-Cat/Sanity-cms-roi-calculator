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
          { title: 'Boolean', value: 'boolean' },
          { title: 'Multi Boolean', value: 'booleanMulti' },
          { title: 'Dropdown', value: 'dropdown' },
          { title: 'Information', value: 'context' },
        ],
      },
      validation: (Rule) => Rule.required(),
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
      title: 'Choose options for this question type',
      type: 'array',
      of: [{ type: 'option' }],
      hidden: ({ document }) =>
        document?.questionType !== 'boolean' &&
        document?.questionType !== 'booleanMulti' &&
        document?.questionType !== 'dropdown',
    },
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
  preview: {
    select: {
      title: 'text',
    },
  },
};
