export default {
  name: 'submitSection',
  title: 'Submit Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'buttonTitle',
      title: 'Button Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'buttonTitleColor',
      title: 'Button Title Color',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'buttonSubtitle',
      title: 'Button Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'buttonColorOnToggle',
      title: 'Button Color On Toggle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'buttonColorOffToggle',
      title: 'Button Color Off Toggle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'buttonIcon',
      title: 'Button Icon',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'richText',
              title: 'Rich Text',
              description: `Rich Editor`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Form', value: 'form' },
          { title: 'Info', value: 'info' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'connect',
      title: 'Connect Button Text',
      type: 'string',
      hidden: ({ document }) => document?.type !== 'info',
    },
    {
      name: 'connectLink',
      title: 'Connect Button Link',
      type: 'string',
      hidden: ({ document }) => document?.type !== 'info',
    },
    {
      name: 'connectColor',
      title: 'Connect Button Color',
      type: 'string',
      hidden: ({ document }) => document?.type !== 'info',
    },
    {
      name: 'submitButton',
      title: 'Submit Button Text',
      type: 'string',
      hidden: ({ document }) => document?.type !== 'form',
    },
    {
      name: 'showCtaPopup',
      title: 'Show Popup on CTA?',
      type: 'boolean',
    },
    {
      name: 'submissionOnCta',
      title: 'Show Submission Page on CTA?',
      type: 'boolean',
    },
    {
      name: 'inputs',
      title: 'Choose inputs for form',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'input' } }],
      hidden: ({ document }) => document?.type !== 'form',
    },
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'horizontal ', value: 'hr' },
          { title: 'vertical', value: 'vr' },
        ],
      },
      hidden: ({ document }) => document?.type !== 'form',
    },
  ],
};
