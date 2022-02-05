export default {
  name: 'stat',
  title: 'Stats Breakdown',
  type: 'object',
  initialValue: {
    tabMenuMod: 1,
    currency: '$',
    disclaimer: false,
    sectionGrade: true,
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
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'disclaimer',
      title: 'Disclaimer',
      type: 'boolean',
    },
    {
      name: 'sectionGrade',
      title: 'Section Grade',
      type: 'boolean',
    },
    {
      name: 'tabMenus',
      title: 'Tab Menus',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tabMenuBreakdown' }] }],
    },
  ],
};
