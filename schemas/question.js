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
      validation: (Rule) => Rule.required(),
      hidden: ({ document }) => document?.questionType !== 'text',
    },
    {
      name: 'options',
      title: 'Choose options for this question type',
      type: 'array',
      of: [{ type: 'option' }],
      validation: (Rule) => Rule.required(),
      hidden: ({ document }) =>
        document?.questionType !== 'boolean' &&
        document?.questionType !== 'booleanMulti' &&
        document?.questionType !== 'dropdown',
    },
  ],
  preview: {
    select: {
      title: 'text',
    },
  },
};
