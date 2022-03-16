export default {
  name: 'relatedQuestion',
  title: 'Related Questions',
  type: 'object',
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
      name: 'questionId',
      title: 'Question id',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'placeholder',
      title: 'Placeholder',
      type: 'string',
    },
    {
      name: 'stateName',
      title: 'State Name',
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
          { title: 'Context', value: 'context' },
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
      name: 'relatedQuestion',
      title: 'Is Related Question to another?',
      type: 'boolean',
      //   hidden: ({ document }) => document?.questionType !== 'boolean',
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
      name: 'information',
      title: 'Information',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'text',
    },
  },
};
