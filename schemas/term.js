export default {
  name: 'term',
  title: 'Terms',
  type: 'object',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'privacyPolicyUrl',
      title: 'Privacy policy url',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'termsOfServiceUrl',
      title: 'Terms of serviceUrl',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
  ],
};
