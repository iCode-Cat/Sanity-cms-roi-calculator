export default {
  name: 'stat',
  title: 'Stats Breakdown',
  type: 'document',
  initialValue: {
    tabMenuMod: 1,
    currency: '$',
    disclaimer: false,
  },
  fields: [
    {
      name: 'tabMenuMod',
      title: 'Tab Menu Mod',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'currency',
      title: 'Currency',
      type: 'string',
      description: 'Currency symbol of breakdown',
    },
    {
      name: 'disclaimer',
      title: 'Disclaimer',
      type: 'boolean',
    },
  ],
};
