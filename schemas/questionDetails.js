export default {
  name: 'questionDetails',
  title: 'Question Details',
  type: 'object',
  fields: [
    {
      name: 'questionColor',
      title: 'Question Color',
      type: 'string',
    },
    {
      name: 'answerColor',
      title: 'Answer Color',
      type: 'string',
    },
    {
      name: 'buttonColor',
      title: 'Button Color',
      type: 'string',
    },
    {
      name: 'analyzeButtonColor',
      title: 'Analyze Button Color',
      type: 'string',
    },
    {
      name: 'analyzeButtonText',
      title: 'Analyze Button Text',
      type: 'string',
    },
    {
      name: 'showAnalyzeButton',
      title: 'Show Analyze Button',
      type: 'boolean',
    },
    {
      name: 'skipAllButtonText',
      title: 'Skip All Button Text',
      type: 'string',
    },
    {
      name: 'postQuestionsMessage',
      title: 'Post questions Message',
      type: 'string',
    },
    // {
    //   name: 'initialQuestion',
    //   title: 'Initial Question?',
    //   type: 'boolean',
    //   validation: (Rule) => Rule.required(),
    // },
    // {
    //   name: 'button_text',
    //   title: 'Button text',
    //   type: 'string',
    //   description: 'Button text of the hero.',
    //   validation: (Rule) => Rule.required(),
    // },

    // {
    //   name: 'fields',
    //   title: 'Hero Question',
    //   type: 'reference',
    //   to: [{ type: 'question' }],
    //   hidden: ({ document }) => document.initialQuestion === false,
    // },
  ],
  preview: {
    select: {
      title: 'QuestionDetails',
    },
  },
};
