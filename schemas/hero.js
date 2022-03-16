export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'pageId',
      title: 'Page Id',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'partnerId',
      title: 'Partner Id',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'page_background',
      title: 'Page Background',
      type: 'image',
      // validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Page Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sub_title',
      title: 'Page Sub Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Page Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'analyze_title',
      title: 'Analyze Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'analyze_subtitle',
      title: 'Analyze Sub Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'favicon',
      title: 'Fav Icon',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'page_title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sharing_description',
      title: 'Sharing Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'terms_privacy',
      title: 'Terms & Privacy HTML',
      type: 'array',
      of: [{ type: 'block' }],
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
      title: 'partnerName',
    },
  },
};
